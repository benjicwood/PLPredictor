import * as types from '../actions/types';

export default function teams (initialState = {}, action) {
  const newState = { ...initialState };

  switch (action.type) {
    case types.SET_TEAM_DATA: return setTeams(newState, action);
    case types.SET_POINTS: return setPoints(newState, action);
    case types.SET_GD: return setGd(newState, action);
    default: return newState;
  }
}

function setTeams (newState, action) {
  delete action.type;
  return Object.assign(newState, {...action});
}

function setPoints (newState, action) {
  delete action.type;

    // console.log( 'reducer',newState.teams )
  return newState;
}

function setGd (newState, action) {
  delete action.type;

    // console.log( 'reducer',newState.teams )
  return newState;
}
