
import { UPDATE_ADDRESS }  from '../actionTypes';

export const addValue = value => {
  return {
    type: UPDATE_ADDRESS,
    payload: value,
  }
}