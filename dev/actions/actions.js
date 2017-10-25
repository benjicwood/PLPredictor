import * as types from './types';
import teams from '../data/teams';
import league from '../data/league';
console.log( league )

// setPoints
// setGD
// export function setPoints (points) {
//   return {
//     type: types.SET_POINTS,
//     teams: teams.points + points
//   };
// }

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
        teams: teams.teams,
    }
};

export const setLeague = () => {
    return {
        type: types.SET_LEAGUE_DATA,
        teams: league.league,
    }
};