import { createSelector } from 'reselect';

export const dataState = state => state.data;

export const trendingGifs = createSelector(
  dataState,
  data => data ? data.map(d => d.images) : [],
);

