import React, { Component } from 'react';
import Score from './Score';

export default class Fixtures extends Component {
  renderList () {
    return this.props.data.map((game) => {
      return (
        <tr key={game.id}>
          <td style={{paddingTop: '5px', paddingLeft: '5px', width: '200px', textAlign: 'right'}}>{game.homeTeam}</td>
          <td style={{paddingLeft: '50px'}}><Score {...game} /></td>
          <td style={{paddingTop: '5px', width: '200px', textAlign: 'left'}}>{game.awayTeam}</td>
        </tr>
      );
    });
  }
  render () {
    const { data } = this.props;
    return (
      <table>
        <tbody>
          { data && this.renderList() }
        </tbody>
      </table>
    );
  }
}
