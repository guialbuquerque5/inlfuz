import { setAlert, removeAlert} from './actions';

/*
import { AlertState, AlertActionTypes, SET_ALERT, REMOVE_ALERT } from './types';
import { stat } from 'fs';

const initialState: AlertState = {
  alerts: []
}

export function alertReducer(
  state = initialState,
  action: AlertActionTypes
): AlertState {
  switch (action.type) {
    case SET_ALERT:
      return {
        alerts: [...state.alerts, action.payload]
      }
    case REMOVE_ALERT:
      return {
        alerts: state.alerts.filter(
          alert => alert.id !== action.meta.id
        )
      }
    default:
      return state;
  }
}
*/