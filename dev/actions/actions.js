import * as types from './types';
import request from 'superagent';

// setPoints
// setGD
export function setPoints (points) {
  return {
    type: types.SET_POINTS,
  //  games: parseInt(points.homeScore.toNumber())
  };
}
