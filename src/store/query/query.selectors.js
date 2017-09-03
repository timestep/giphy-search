import { createSelector } from 'reselect';

export const queryDataSelector = state => state.query.data;
export const queryImageSelector = createSelector(
  queryDataSelector,
  query => query ? query[0] : {},
);
