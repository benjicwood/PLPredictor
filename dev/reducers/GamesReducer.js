import * as types from '../actions/types';

export default function GamesReducer (state, action) {
  state = state || initState;
  switch (action.type) {
    case types.SET_POINTS:
      return Object.assign({}, state, {
        League: action.data
      });
      default:
      return state;
  }
}
