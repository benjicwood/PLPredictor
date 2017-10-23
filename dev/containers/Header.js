import React, { Component } from 'react';

export default class Header extends Component {
  render () {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Team</th>
              <th style={{paddingLeft: '235px'}}><abbr title='Played'>Pld</abbr></th>
              <th><abbr title='Goal difference' style={{paddingRight: '15px'}}>GD</abbr></th>
              <th><abbr title='Points' style={{paddingRight: '15px'}}>Pts</abbr></th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
