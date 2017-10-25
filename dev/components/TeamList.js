import React, { Component } from 'react';
import sortLeague from '../functions/sortLeague';
import TableHeader from './TableHeader';

export default class TeamList extends Component {
  renderList () {
    return this.props.data.map((team) => {
      return (
        <tr key={team.id}>
          <td>{ team.name }</td>
          <td>{ team.played }</td>
          <td>{ team.gd }</td>
          <td>{ team.points }</td>
        </tr>
      );
    });
  }

  render () {
    const { data } = this.props;
    return (
      <div>
        <TableHeader />
        <table className='table is-striped is-fullwidth'>
          <tbody>
            { data && this.renderList() }
          </tbody>
        </table>
      </div>
    );
  }
}
