import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import restyReducer from './reducers/resty.js';

let reducers = combineReducers({
  resty: restyReducer,
});

export default () => createStore(reducers, applyMiddleware(thunk));
