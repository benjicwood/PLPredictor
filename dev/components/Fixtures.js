import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Score from './Score';

class Fixtures extends Component {
  // renderList () {
  //   return this.props.games.League.map((game) => {
  //     return (
  //       <tr key={game.id}>
  //         <td style={{paddingTop: '5px', paddingLeft: '5px', width: '200px', textAlign: 'right'}}>{game.homeTeam}</td>
  //         <td style={{paddingLeft: '50px'}}><Score homeScore={this.homeTeam} awayScore={this.awayTeam} /></td>
  //         <td style={{paddingTop: '5px', width: '200px', textAlign: 'left'}}>{game.awayTeam}</td>
  //       </tr>
  //     );
  //   });
  // }
  render () {
    return (
      <table>
        <tbody>
          {/*{this.renderList()}*/}
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
