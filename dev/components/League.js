import React from 'react';

import TeamList from '../containers/TeamList';

const League = () => (
  <div className='box' style={LeagueBox}>
    <TeamList />
  </div>
);

const LeagueBox = {
  width: '30%',
  height: '80%',
  padding: '10px',
  margin: '10px',
  display: 'inline-block'
};

export default League;
