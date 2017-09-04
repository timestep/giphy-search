import { createSelector } from 'reselect';

export const querySelector = state => state.query;

export const historicalQueriesSelector = createSelector(
  querySelector,
  query => query.queryHistory,
);

export const querySelectedImageSelector = createSelector(
  querySelector,
  query => query.selectedImage,
);

export const queryImageSelector = createSelector(
  querySelectedImageSelector,
  selectedImage => selectedImage.images ? selectedImage.images.fixed_height_downsampled.url : '',
);
