import React, { Component } from 'react';
import { connect } from 'react-redux';
// import

class Team extends Component {
  renderList () {
    return this.props.teams.map((team) => {
      return (
        <tr>
          <th>1</th>
          <td><a title={this.props.name}>{this.props.name}</a></td>
          <td>{this.props.played}</td>
          <td>{this.props.gd}</td>
          <td>{this.props.points}</td>
          <td />
        </tr>
      );
    });
  }
  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps)(Team);
