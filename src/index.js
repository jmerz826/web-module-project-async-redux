import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import artReducer from './reducers';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const store = createStore(artReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
