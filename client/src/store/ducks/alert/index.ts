import { Reducer } from 'redux'
import { AlertState, AlertTypes, Alert } from './types'
import { statement } from '@babel/template';
import { action } from 'typesafe-actions';

const INITIAL_STATE: AlertState = {
  alerts: [],
};

const reducer: Reducer<AlertState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case AlertTypes.SET_ALERT:
      return {...state, alerts: action.alert}
    case AlertTypes.REMOVE_ALERT:
      //return {...state.alerts.filter(alert => alert.id !== action.alertId)}
      return {...state}
      default:
      return state;
  }
}

const isNotTheId = (alert: Alert, id: string) => {
  return( alert.id !== id );
}

export default reducer;