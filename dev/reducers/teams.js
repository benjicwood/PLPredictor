import * as types from '../actions/types';

export default function teams (initialState = {}, action) {
  const newState = { ...initialState };

  switch (action.type) {
    case types.SET_TEAM_DATA: return setTeams(newState, action);
    case types.SET_POINTS: return setPoints(newState, action);
    case types.SET_GD: return setGd(newState, action);
    case types.SET_PLAYED: return setPlayed(newState, action);
    default: return newState;
  }
}

function setTeams (newState, action) {
  delete action.type;
  return Object.assign(newState, {...action});
}

function setPoints (newState, action) {
  console.log('action:')
  console.log(action)
  console.log('newState:')
  console.log(newState)
  console.log(newState.teams[0].played)
  delete action.type;
  newState.teams[0].played = newState.teams[0].played + 1;
  return newState;
}

function setGd (newState, action) {
  delete action.type;
  return newState;
}

function setPlayed (newState, action) {
  delete action.type;
  return newState;
}
