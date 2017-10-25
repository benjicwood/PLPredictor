import React, { Component } from 'react';
import Score from './Score';

import { FixtureTableStyle, HomeTeamStyle, AwayTeamStyle } from '../styles/style.js';

export default class Fixtures extends Component {
  renderList () {
    return this.props.data.map((game) => {
      return (
        <tr key={game.id}>
          <td style={HomeTeamStyle}>{game.homeTeam}</td>
          <td><Score {...game} /></td>
          <td style={AwayTeamStyle}>{game.awayTeam}</td>
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
