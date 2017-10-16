import React from 'react';

import TeamList from '../containers/TeamList';
import Fixtures from '../containers/Fixtures';

const Main = () => (
  <div>
    <Fixtures />
    <h1>PL Predictor!</h1>
    <TeamList />
  </div>
);

export default Main;
