import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import App from './containers/App';

import { searchDogs, dogsData } from './reducers';

import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchDogs, dogsData });
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
serviceWorker.unregister();
