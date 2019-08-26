import uuid from 'uuid'
export interface Alert {
  id: string, 
  msg: string
  alertType: string
}
export interface AlertState {
  alerts: Alert[]
}
  
export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

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

export type AlertActionTypes = SetAlertAction | RemoveAlertAction