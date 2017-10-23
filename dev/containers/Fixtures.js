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
  height: '35px',
  textAlign: 'center',
  padding: '1px'
};

export default class Fixtures extends Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <td style={{paddingTop: '5', paddingLeft: '40', width: '200'}}><p>Manchester United</p></td>
            <td style={{paddingLeft: '40'}}><Score /></td>
            <td style={{paddingRight: '40'}}><Score /></td>
            <td style={{paddingTop: '5', width: '200'}}><p>Manchester City</p></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
