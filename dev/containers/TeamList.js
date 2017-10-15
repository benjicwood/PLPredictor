import React, { Component } from 'react';
import { connect } from 'react-redux';
// import

class Team extends Component {
  renderList () {
    return this.props.teams.map((team) => {
      return (
        <li key={team.id}>
          {team.name} {team.points}
        </li>
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
