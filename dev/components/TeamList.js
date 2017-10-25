import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortLeague from '../functions/sortLeague';
import TableHeader from './TableHeader'

class TeamList extends Component {
  renderList () {
    return this.props.teams.map((team) => {
      return (
        <tr key={team.id}>
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
          <TableHeader/>
            <table className='table is-striped is-fullwidth'>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    teams: state.teams.sort(sortLeague)
  };
}

export default connect(mapStateToProps)(TeamList);
