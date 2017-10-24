import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

/*

export function fetchLeague () {
  return (dispatch) => {
    request
    .get(`${ROOT}`)
    .end((error, response) => {
      if (error) dispatch(fetchLeagueError(error));
      else dispatch(fetchLeagueSuccess(response.body));
    });
  };
}

export function fetchLeagueRequest () {
  return {
    types: types.FETCH_LEAGUE_REQUEST
  };
}

export function fetchLeagueSuccess (teams) {
  return {
    types: types.FETCH_LEAGUE_SUCCESS,
    teams: teams
  };
}

export function fetchLeagueError (error) {
  return {
    types: types.FETCH_LEAGUE_ERROR,
    error: error
  };
}

*/
