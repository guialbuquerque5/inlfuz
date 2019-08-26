import { Reducer } from 'redux'
import { UsersState, UsersTypes } from './types'
import { statement } from '@babel/template';

const INITIAL_STATE: UsersState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UsersTypes.LOAD_REQUEST:
          return { ...state, loading: true};
        case UsersTypes.LOAD_SUCCES:
          return { ...state, loading: false, error: false, data: action.payload.data};
        case UsersTypes.LOAD_FAILURE:
          return {...statement, loading: false, error: true, data: []};
        default:
          return state;
    }
};

export default reducer;