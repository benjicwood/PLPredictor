import React, { Component } from 'react';
import Score from './Score';

import { FixtureTableStyle } from '../styles/style.js';

export default class Fixtures extends Component {
  renderList () {
    return this.props.data.map((game) => {
      return (
        <tr key={game.id}>
          <td>{game.homeTeam}</td>
          <td><Score {...game} /></td>
          <td>{game.awayTeam}</td>
        </tr>
      );
    });
  }
  render () {
    const { data } = this.props;
    return (
      <div style={FixtureTableStyle}>
        <table>
          <tbody>
            { data && this.renderList() }
          </tbody>
        </table>
      </div>
    );
  }
}
