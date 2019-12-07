import { createStore } from "redux";
import  rootReducer  from "./reducers/rootReducer";

function configureStore(state = { bgColor: 25 }) {
  return createStore(rootReducer,state);
}
export default configureStore;

// import { createStore, combineReducers } from 'redux';
// import { appReducer } from './reducers/app';

// const reducers = combineReducers({
//     app: appReducer,
// });

// export const store = createStore(reducers);
