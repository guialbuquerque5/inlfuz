import { combineReducers } from 'redux';

import alerts from './alert'
import users from './users'

export default combineReducers({
  alerts,
  users
})