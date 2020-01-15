import { POMODORO_VALUE }  from '../actionTypes';
import { SHORTBREAK_VALUE } from '../actionTypes';
import { LONGBREAK_VALUE } from '../actionTypes';

const initialState = ({
  valuePomo: "25",  valueSeconds: "00",
  shortValue: "5",  shortSeconds: "00",
  longValue: "10",  longSeconds: "00",
});

const addressReducer = (state = initialState, action) => {
  switch(action.type) {
    case POMODORO_VALUE:
       state = ({
        valuePomo:    action.payload.valuePomo,
        valueSeconds: action.payload.valueSeconds })
    case  SHORTBREAK_VALUE:
       state = ({
        shortValue: action.payload.shortValue,
        shortSeconds: action.payload.shortSeconds   })
    case  LONGBREAK_VALUE:
       state = ({
        longValue: action.payload.longValue,
        longSeconds: action.payload.longSeconds   })

     default: 
    return state;
  }}


 export default addressReducer;