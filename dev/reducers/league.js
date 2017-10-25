import * as types from '../actions/types';

export default function league ( initialState = {}, action ) {
    const newState = { ...initialState };

    switch ( action.type ) {
        case types.SET_LEAGUE_DATA: return setLeague( newState, action );
        default: return newState;
    }
}

function setLeague( newState, action ) {
    delete action.type;
    return  Object.assign( newState, { ...action } );
}




// export default function GamesReducer (state, action) {
//   state = state || initState;
//   switch (action.type) {
//     case types.SET_POINTS:
//       return Object.assign({}, state, {
//         League: action.data
//       });
//       default:
//       return state;
//   }
// }

