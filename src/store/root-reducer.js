import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './app';
import { trendingReducer } from './trending';

const rootReducer = combineReducers({
  routing: routerReducer,
  app: appReducer,
  trending: trendingReducer,
});

export default rootReducer;
