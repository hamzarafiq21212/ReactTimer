import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./styles.css";

import {Provider} from 'react-redux';
import configureStore from './redux/store';

// import  addressReducer  from './redux/reducers';
// import { store } from './redux/store';
// const store = store(addressReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore}>
    <App />  
  </Provider>, rootElement);