import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import TeamList from '../components/TeamList';
import Fixtures from '../components/Fixtures';

import sortLeague from '../functions/sortLeague';

import { Background } from '../styles/style.js';

class PLPredictor extends Component {
  componentWillMount () {
    this.props.getTeamData();
    this.props.getLeagueData();
  }

  render () {
    const { teamsData, leagueData } = this.props;
    return (
      <div style={Background}>
        {/* <AppHeader /> */}
        <TeamList data={teamsData} />
        <Fixtures data={leagueData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamsData: state.teams.teams,
    leagueData: state.league.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTeamData: () => dispatch(actions.setTeam()),
    getLeagueData: () => dispatch(actions.setLeague())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PLPredictor);
