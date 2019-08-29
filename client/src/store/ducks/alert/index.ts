import { Reducer } from 'redux'
import { AlertState, AlertTypes, Alert } from './types'

const INITIAL_STATE: AlertState = {
  alerts: [],
};

const reducer: Reducer<AlertState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case AlertTypes.SET_ALERT:
      return  {alerts:[...state.alerts,action.payload]}
    case AlertTypes.REMOVE_ALERT:
      return {alerts:[...state.alerts.filter(alert => alert.id !== action.alertId)]}
      default:
      return state;
  }
}

const isNotTheId = (alert: Alert, id: string) => {
  return( alert.id !== id );
}

export default reducer;