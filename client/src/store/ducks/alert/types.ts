import uuid from 'uuid'
/**
 * Action types
 */
export enum AlertTypes {
  SET_ALERT = '@alerts/SET_ALERT',
  REMOVE_ALERT = '@alerts/REMOVE_ALERT'
}
/**
 * Data types
 */
export interface Alert {
  id: string, 
  msg: string
  alertType: string
}
/**
 * State type
 */
export interface AlertState {
  alerts: Alert[]
}
  

/*
interface SetAlertAction {
  type: typeof SET_ALERT
  payload: Alert
}
  
interface RemoveAlertAction {
  type: typeof REMOVE_ALERT
  meta: {
    id: typeof uuid.v4
  }
}
*/
//export type AlertActionTypes = SetAlertAction | RemoveAlertAction