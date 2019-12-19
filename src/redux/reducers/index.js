import { UPDATE_ADDRESS } from '../actionTypes';

const initialState = {
  valuePomo: 25,
};

const addressReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_ADDRESS:
      return {
        ...state,
        valuePomo: action.valuePomo
      };
    default:
      return state.valuePomo;
  }
}

 export default addressReducer;