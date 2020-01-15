import { createStore, combineReducers } from 'redux';
import addressReducer from './reducers/index';

const rootReducer = combineReducers({
  value: addressReducer,  value2: addressReducer,
  value3: addressReducer, value4: addressReducer,
  value5: addressReducer, value6: addressReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore(addressReducer);
