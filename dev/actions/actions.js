import * as types from './types';
import teams from '../data/teams';
import league from '../data/league';

export function setPoints (score) {
  return {
    type: types.SET_POINTS,
    score: score
  };
}

export function setGD (score) {
  return {
    type: types.SET_GD
        // teams: teams.points + points
  };
}

export function setPlayed (score) {
  return {
    type: types.SET_PLAYED
  };
}

// export const getTeam = () => {
//   return {
//     // if the data was obtained async
//   }
// }

// export const getLeagues = () => {
//   return {
//     // if the data was obtained async
//   }
// }

export const setTeam = () => {
  return {
    type: types.SET_TEAM_DATA,
    teams: teams.teams
  };
};

export const setLeague = () => {
  return {
    type: types.SET_LEAGUE_DATA,
    teams: league.league
  };
};
