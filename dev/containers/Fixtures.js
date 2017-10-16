import React, { Component } from 'react';

class Score extends Component {
  render () {
    return (
      <div className='field'>
        <div className='control'>
          <input className='input' type='text' placeholder='0' />
        </div>
      </div>
    );
  }
}

export default class Fixtures extends Component {
  render () {
    return (
      <div>
        <p>Manchester United</p>
        <Score />
        <Score />
        <p>Manchester City</p>
      </div>
    );
  }
}
