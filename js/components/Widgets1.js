import React from 'react';
import Relay from 'react-relay';

class Widgets1 extends React.Component {
  render() {
    console.log('Widgets1', this.props)
    return (
      <div>
        <h1>Widget list 1</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Widgets1, {
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