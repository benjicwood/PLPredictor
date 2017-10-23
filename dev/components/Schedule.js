import React from 'react';

import Fixtures from '../containers/Fixtures';

const Schedule = () => (
  <div className='box' style={ScheduleBox}>
    <Fixtures />
  </div>
);

const ScheduleBox = {
  width: '30%',
  padding: '0.5px',
  margin: '10px'
};

export default Schedule;
