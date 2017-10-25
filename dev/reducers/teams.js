import * as types from '../actions/types';

export default function teams ( initialState = {}, action ) {
    const newState = { ...initialState };

    switch ( action.type ) {
      case types.SET_TEAM_DATA: return setTeams( newState, action );
      default: return newState;
    }
}

function setTeams( newState, action ) {
    delete action.type;
    return  Object.assign( newState, { ...action } );
}