import React from 'react';

import League from './League';
import Fixtures from '../containers/Fixtures';

const Main = () => (
  <div style={LeagueBox}>
    <League />
    <Fixtures />
  </div>
);

const LeagueBox = {
  width: '400px'
};

export default Main;
