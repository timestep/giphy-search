import { createSelector } from 'reselect';

export const trendingDataSelector = state => state.trending.data;

export const trendingGifs = createSelector(
  trendingDataSelector,
  data => data ? data : [],
);

