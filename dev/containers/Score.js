import React, { Component } from 'react';

export default class Score extends Component {
  render () {
    return (
      <div className='field'>
        <div className='control'>
          <input className='input' type='text' placeholder='0' onChange={this.handleInputChange} style={ScoreStyle} />
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
