import { combineReducers } from 'redux';
import TeamsReducer from './TeamsReducer';
import GamesReducer from './GamesReducer';

const allReducers = combineReducers({
  teams: TeamsReducer,
  games: GamesReducer
});

export default allReducers;
