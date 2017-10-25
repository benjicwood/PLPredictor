import { combineReducers } from 'redux';
import teams from './teams';
import league from './league';

const allReducers = combineReducers({
  teams: teams,
  league: league
});

export default allReducers;
