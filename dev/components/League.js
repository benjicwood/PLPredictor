import React from 'react';

import TeamList from '../containers/TeamList';

const League = () => (
  <div className='box' style={LeagueBox}>
    <TeamList />
  </div>
);

const LeagueBox = {
  width: '400px'
};

export default League;
