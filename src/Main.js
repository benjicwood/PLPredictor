import React, { Component } from 'react';

import LeagueTable from './LeagueTable';

export default class Main extends Component {
  render () {
    return (
      <div>
        <h1>PL Predictor!</h1>
        <LeagueTable />
      </div>
    );
  }
}
