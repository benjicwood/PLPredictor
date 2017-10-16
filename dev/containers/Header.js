import React, { Component } from 'react';

export default class Header extends Component {
  render () {
    return (
      <div width='10'>
        <table className='table'>
          <thead>
            <tr>
              <th><abbr title='Position'>Pos</abbr></th>
              <th>Team</th>
              <th><abbr title='Played'>Pld</abbr></th>
              <th><abbr title='Goal difference'>GD</abbr></th>
              <th><abbr title='Points'>Pts</abbr></th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
