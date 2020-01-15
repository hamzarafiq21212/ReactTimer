
import { POMODORO_VALUE }  from '../actionTypes';
import { POMODORO_SECONDS }  from '../actionTypes';
import { SHORTBREAK_VALUE } from '../actionTypes';
import { SHORTBREAK_SECONDS }  from '../actionTypes';
import { LONGBREAK_VALUE } from  '../actionTypes';
import { LONGBREAK_SECONDS } from '../actionTypes';

export const pomoValue = value => {
  return {
    type: POMODORO_VALUE,
    payload: value,
  }
}
export const pomoSeconds = value2 => {
  return {
    type: POMODORO_SECONDS,
    payload: value2,
  }
}

export const shortValue = value3 => {
  return {
    type: SHORTBREAK_VALUE,
    payload: value3,
  }
}
export const shortSeconds = value4 => {
  return {
    type: SHORTBREAK_SECONDS,
    payload: value4,
  }
}

export const longValue = value5 => {
  return {
    type: LONGBREAK_VALUE,
    payload: value5,
  }
}
export const longSeconds = value6 => {
  return {
    type: LONGBREAK_SECONDS,
    payload: value6,
  }
}