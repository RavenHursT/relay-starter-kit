import React from 'react';
import Relay from 'react-relay';

class Widgets2 extends React.Component {
  increasePageSize () {
    this.props.relay.setVariables({
      pageSize: this.props.relay.variables.pageSize + 1
    })
  }

  nextPage () {
    let lastIndex = this.props.viewer.widgets.edges.length - 1
    this.props.relay.setVariables({
      curs: this.props.viewer.widgets.edges[lastIndex].cursor
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
        <button onClick={this.nextPage.bind(this)}>Next Page &gt;</button>
      </div>
    );
  }
}

export default Relay.createContainer(Widgets2, {
  initialVariables: {
    pageSize: 2,
    curs: null
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(
          first: $pageSize,
          after: $curs
        ) {
          edges {
            cursor,
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