import * as types from '../actions/types';

export const initialState = {
  league: [
    {
      'name': 'Manchester City',
      'played': 7,
      'gd': 20,
      'points': 19
    },
    {
      'name': 'Manchester United',
      'played': 7,
      'gd': 19,
      'points': 19
    },
    {
      'name': 'Tottenham Hotspur',
      'played': 7,
      'gd': 9,
      'points': 14
    },
    {
      'name': 'Chelsea',
      'played': 7,
      'gd': 6,
      'points': 13
    }
  ]
};

export default function reducer (state, action) {}
