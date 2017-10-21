import React from 'react';

import Fixtures from '../containers/Fixtures';

const Schedule = () => (
  <div className='box' style={ScheduleBox}>
    <Fixtures />
  </div>
);

const ScheduleBox = {
  width: '400px',
  justifyContent: 'right'
};

export default Schedule;
