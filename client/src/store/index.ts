
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { UsersState } from './ducks/users/types';
import {AlertState} from './ducks/alert/types'

import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  alert: AlertState
}
//const sagaMiddleware = createSagaMiddleware();

//const store: Store<ApplicationState> = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

//sagaMiddleware.run(rootSaga);

const store = createStore(rootReducer);


export default store;