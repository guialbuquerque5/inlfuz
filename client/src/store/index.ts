import { alertReducer } from './alert/reducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  alert: alertReducer
})

export type AppState = ReturnType<typeof rootReducer>

//export default AppState