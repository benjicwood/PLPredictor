import * as types from '../actions/types';

const initState = {
  League: [
    {
      id: 1,
      homeTeam: 'Manchester United',
      homeScore: '',
      awayTeam: 'Tottenham Hotspur',
      awayScore: ''
    },
    {
      id: 2,
      homeTeam: 'Arsenal',
      homeScore: '',
      awayTeam: 'Swansea City',
      awayScore: ''
    },
    {
      id: 3,
      homeTeam: 'Crystal Palace',
      homeScore: '',
      awayTeam: 'West Ham United',
      awayScore: ''
    },
    {
      id: 4,
      homeTeam: 'Liverpool',
      homeScore: '',
      awayTeam: 'Huddersfield Town',
      awayScore: ''
    },
    {
      id: 5,
      homeTeam: 'Watford',
      homeScore: '',
      awayTeam: 'Stoke City',
      awayScore: ''
    },
    {
      id: 6,
      homeTeam: 'West Bromwich Albion',
      homeScore: '',
      awayTeam: 'Manchester City',
      awayScore: ''
    },
    {
      id: 7,
      homeTeam: 'Bournemouth',
      homeScore: '',
      awayTeam: 'Chelsea',
      awayScore: ''
    },
    {
      id: 8,
      homeTeam: 'Brighton and Hove Albion',
      homeScore: '',
      awayTeam: 'Southampton',
      awayScore: ''
    },
    {
      id: 9,
      homeTeam: 'Leicester City',
      homeScore: '',
      awayTeam: 'Everton',
      awayScore: ''
    },
    {
      id: 10,
      homeTeam: 'Burnley',
      homeScore: '',
      awayTeam: 'Newcastle United',
      awayScore: ''
    }
  ]
};

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
