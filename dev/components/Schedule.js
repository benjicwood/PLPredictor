import React from 'react';

import Fixtures from '../containers/Fixtures';

const Schedule = () => (
  <div className='box' style={ScheduleBox}>
    <Fixtures />
  </div>
);

const ScheduleBox = {
  width: '35%',
  padding: '0.5px',
  margin: '10px',
  marginRight: '50px',
  float: 'right',
  Top: '200'
};

export default Schedule;
