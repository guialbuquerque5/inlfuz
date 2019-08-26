import {setAlert} from './actions';
import uuid from 'uuid'

export const newAlert = (msg: string, alertType: string) => dispatch =>{
  const id = uuid.v4()
  dispatch(
    setAlert({
      id = id,
      msg = msg,
      alertType = 'string'
    })
  )
}