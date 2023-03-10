import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

const store = configureStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);