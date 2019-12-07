import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { Provider } from 'react-redux';
import configureStore from './redux/store';
// import { store } from './redux/store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />  
  </Provider>, rootElement);

//   document.getElementById("root")
// );


// const rootElement = document.getElementById("root");
// ReactDOM.render(<Provider store = {store}>
// <App />
// </Provider>, rootElement);


  // {App.map((prop, key) => {
  //         return <Route path={prop.path} key={key} component={prop.component} />;
  //       })}