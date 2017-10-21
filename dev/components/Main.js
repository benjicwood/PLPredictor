import React from 'react';

import League from './League';
import Schedule from './Schedule';

const Main = () => (
  <div style={{flexDirection: 'row'}}>
    <League />
    <Schedule />
  </div>
);

export default Main;
