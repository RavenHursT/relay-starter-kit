import React from 'react';
import Relay from 'react-relay';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';

class App extends React.Component {
  render() {
    return (
      <div>
        <Widgets1 />
        <Widgets2 />
      </div>
    );
  }
}

export default Relay.createContainer(App,
{
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
