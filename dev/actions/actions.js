import * as types from './types';
import * as teamData from '../data/teams';
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


export const setTeam = () => {
    return {
        type: types.SET_TEAM_DATA,
        data: teamData,
    }
};