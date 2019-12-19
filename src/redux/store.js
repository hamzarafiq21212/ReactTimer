import { createStore, combineReducers } from 'redux';
import addressReducer from './reducers/index';

const rootReducer = combineReducers({
  value: addressReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore(addressReducer);
