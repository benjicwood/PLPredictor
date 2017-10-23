import React, { Component } from 'react';

class Score extends Component {
  render () {
    return (
      <div className='field'>
        <div className='control'>
          <input className='input' type='text' placeholder='0' style={ScoreStyle} />
        </div>
      </div>
    );
  }
}

const ScoreStyle = {
  width: '40px',
  textAlign: 'center'
};

export default class Fixtures extends Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <td><p>Manchester United</p></td>
            <td><Score /></td>
            <td><Score /></td>
            <td><p>Manchester City</p></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
