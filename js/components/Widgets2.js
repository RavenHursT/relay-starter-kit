import React from 'react';
import Relay from 'react-relay';

class Widgets2 extends React.Component {
  increasePageSize () {
    this.props.relay.setVariables({
      widgets1PageSize: this.props.relay.variables.widgets1PageSize + 1
    })
  }

  render() {
    console.log('Widgets2', this.props)

    return (
      <div>
        <h1>Widget list 2</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
        <button onClick={this.increasePageSize.bind(this)}>Increase pageSize</button>
      </div>
    );
  }
}

export default Relay.createContainer(Widgets2, {
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