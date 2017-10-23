import React from 'react';

import TeamList from '../containers/TeamList';

const League = () => (
  <div className='box' style={LeagueBox}>
    <TeamList />
  </div>
);

const LeagueBox = {
  width: '30%',
  padding: '0.5px',
  margin: '10px',
  marginLeft: '50px',
  display: 'inline-block'
};

export default League;
