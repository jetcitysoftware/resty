import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import responseReducer from './reducers/response.js';
import historyReducer from './reducers/history.js';

let reducers = combineReducers({
  response: responseReducer,
  history: historyReducer,
});

export default () => createStore(reducers, applyMiddleware(thunk));
