import React from 'react';
import Relay from 'react-relay';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Widgets1 viewer={this.props.viewer} />
        <Widgets2 viewer={this.props.viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(App,
{
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        ${Widgets1.getFragment('viewer')}
        ${Widgets2.getFragment('viewer')}
      }
    `,
  },
});
