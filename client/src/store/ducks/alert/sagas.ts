import { call, put} from 'redux-saga/effects';
//import api from './api'

import { setAlert, removeAlert} from './actions';


/*
export function* load(){
    try{    
      //const response = yield call(api.get, 'users')
        const response = {"data":[{"id":'1' ,"name": 'joao'},
                          {"id": "2","name": 'pedro'}]};
        yield put(loadSuccess(response.data))
    } catch (err) {
      yield put(loadFailure())
    }
}
*/