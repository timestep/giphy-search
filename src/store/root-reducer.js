import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { queryReducer } from './query';
import { trendingReducer } from './trending';

const rootReducer = combineReducers({
  routing: routerReducer,
  trending: trendingReducer,
  query: queryReducer,
});

export default rootReducer;
