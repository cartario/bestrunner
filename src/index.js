import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import {api} from './api.js';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {reducers} from "./reducers.js";
import {ActionCreator, Operation} from './reducer';
import {getItems, setItem, setItems, removeItem} from './local-storage';

// localStorage.clear();

const store = createStore(
  reducers, compose(
      applyMiddleware(thunkMiddleware.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

const localStorageSessions = [{
  id: 41,
  type: `Плавание`,
  date: new Date(),
  distance: 8,
  comment: `heyLocal`,
},{
  id: 42,
  type: `Плавание`,
  date: new Date(),
  distance: 9,
  comment: `howLocal`,
},{
  id: 43,
  type: `Плавание`,
  date: new Date(),
  distance: 10,
  comment: `areLocal`,
}];

store.dispatch(Operation.loadSessions());
store.dispatch(ActionCreator.loadSessions(localStorageSessions));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
