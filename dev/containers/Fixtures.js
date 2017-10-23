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
            <td style={{paddingTop: '5px', paddingLeft: '40px', width: '200px'}}><p>Manchester United</p></td>
            <td style={{paddingLeft: '40px'}}><Score /></td>
            <td style={{paddingRight: '40px'}}><Score /></td>
            <td style={{paddingTop: '5px', width: '200px'}}><p>Tottenham Hotspur</p></td>
          </tr>
          <tr>
            <td style={{paddingTop: '5px', paddingLeft: '40px', width: '200px'}}><p>Arsenal</p></td>
            <td style={{paddingLeft: '40px'}}><Score /></td>
            <td style={{paddingRight: '40px'}}><Score /></td>
            <td style={{paddingTop: '5px', width: '200px'}}><p>Swansea City</p></td>
          </tr>
          <tr>
            <td style={{paddingTop: '5px', paddingLeft: '40px', width: '200px'}}><p>Crystal Palace</p></td>
            <td style={{paddingLeft: '40px'}}><Score /></td>
            <td style={{paddingRight: '40px'}}><Score /></td>
            <td style={{paddingTop: '5px', width: '200px'}}><p>West Ham United</p></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
