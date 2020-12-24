import React from 'react';
import ReacDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReacDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
