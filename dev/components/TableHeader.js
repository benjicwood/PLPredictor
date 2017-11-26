import React, { Component } from 'react';

export default class TableHeader extends Component {
  render () {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
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
