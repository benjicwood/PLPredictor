import React, { Component } from 'react';
import { connect } from 'react-redux';

import Score from './Score';

class Fixtures extends Component {
  renderList () {
    return this.props.games.map((game) => {
      return (
        <tr key={game.id}>
          <td style={{paddingTop: '5px', paddingLeft: '40px', width: '200px'}}>{game.homeTeam}</td>
          <td style={{paddingLeft: '40px'}}><Score /></td>
          <td style={{paddingRight: '40px'}}><Score /></td>
          <td style={{paddingTop: '5px', width: '200px'}}>{game.awayTeam}</td>
        </tr>
      );
    });
  }
  render () {
    return (
      <table>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(Fixtures);
