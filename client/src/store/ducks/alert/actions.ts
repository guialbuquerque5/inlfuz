import { action } from 'typesafe-actions';
import { AlertTypes, Alert } from './types';


export const setAlert = (msg: string) => action(AlertTypes.SET_ALERT, {id: 'id', msg: msg, alertType: 'danger'});

export const removeAlert = (alertId: string) => action(AlertTypes.REMOVE_ALERT, {alertId});