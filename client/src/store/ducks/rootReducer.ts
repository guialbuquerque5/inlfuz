import { alertReducer } from './alert/reducers'
import { combineReducers } from 'redux';

export default combineReducers({
  alert: alertReducer
})