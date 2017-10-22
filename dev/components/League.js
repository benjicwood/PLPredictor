import React from 'react';

import TeamList from '../containers/TeamList';

const League = () => (
  <div className='box' style={LeagueBox}>
    <TeamList />
  </div>
);

const LeagueBox = {
  width: '30%',
  height: '80%'
};

export default League;
