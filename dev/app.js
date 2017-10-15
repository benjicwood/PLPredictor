import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import Main from './components/Main';

import reducer from './reducers/index';

const logger = createLogger();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk, promise)));

ReactDOM.render(
  <Provider store={store}><Main /></Provider>,
    document.getElementById('app')
  );
