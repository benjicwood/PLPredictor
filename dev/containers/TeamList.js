import React, { Component } from 'react';
import { connect } from 'react-redux';
// import

class TeamList extends Component {
  renderList () {
    return this.props.teams.map((team) => {
      return (
        <tr className='table' key={team.id}>
          <td>{team.name}</td>
          <td>{team.played}</td>
          <td>{team.gd}</td>
          <td>{team.points}</td>
        </tr>
      );
    });
  }
  render () {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps)(TeamList);
