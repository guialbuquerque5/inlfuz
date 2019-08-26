import { Alert, SET_ALERT, REMOVE_ALERT, AlertActionTypes } from './types';

export function setAlert(newAlert: Alert): AlertActionTypes {
  return {
    type: SET_ALERT,
    payload: newAlert
  }
}
