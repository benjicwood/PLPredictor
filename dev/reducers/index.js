import { combineReducers } from 'redux';
import teams from './teams';
// import GamesReducer from './GamesReducer';

const allReducers = combineReducers({
  teams: teams,
  // games: GamesReducer
});

export default allReducers;
