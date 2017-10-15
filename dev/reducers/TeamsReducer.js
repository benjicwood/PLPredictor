export default function () {
  return [
    {
      id: 1,
      name: 'Manchester City',
      played: 8,
      gd: 25,
      points: 22
    },
    {
      id: 2,
      name: 'Manchester United',
      played: 8,
      gd: 19,
      points: 20
    },
    {
      id: 3,
      name: 'Tottenham Hotspur',
      played: 8,
      gd: 10,
      points: 17
    },
    {
      id: 4,
      name: 'Watford',
      played: 8,
      gd: 0,
      points: 15
    }
  ];
}

/*

export default function reducer (state, action) {
  state = state || initialState;
  switch (action.type) {
    case types.GET_TEAMS:
      return Object.assign({}, state, {
        event: action.event
      });
    default:
      return state;
  }
}

*/
