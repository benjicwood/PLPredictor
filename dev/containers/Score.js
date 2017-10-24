import React, { Component } from 'react';

import { setPoints, setGD } from '../actions/actions';

export default class Score extends Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    this.props.dispatch(setPoints(event.target.value));
    this.props.dispatch(setGD(event.target.value));
  }
  render () {
    return (
      <div className='field'>
        <div className='control'>
          <input className='input' type='text' placeholder='0' onChange={this.handleInputChange} style={ScoreStyle} />
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
