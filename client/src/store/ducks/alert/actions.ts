import { action } from 'typesafe-actions';
import { AlertTypes, Alert } from './types';


export const setAlert = (alert: Alert) => action(AlertTypes.SET_ALERT, {alert});

export const removeAlert = (alertId: string) => action(AlertTypes.REMOVE_ALERT, {alertId});