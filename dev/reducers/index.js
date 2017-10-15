import { combineReducers } from 'redux';
import TeamsReducer from './TeamsReducer';

const allReducers = combineReducers({
  teams: TeamsReducer
});

export default allReducers;
