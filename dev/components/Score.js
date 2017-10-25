import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPoints, setGD } from '../actions/actions';

class Score extends Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    const score = event.target.value;
    this.props.dispatch(setPoints(score));
    this.props.dispatch(setGD(score));
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

export default connect()( Score );

const ScoreStyle = {
    width: '40px',
    height: '35px',
    textAlign: 'center',
    padding: '1px',
}
