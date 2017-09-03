import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../common/components';
import { HistoricalQueriesComponent } from './historical-queries';

export const QueryComponent = ({
  image = {},
  query,
  historicalQueries = [],
  selectHistoricalImage,
}) =>  (
  <div>
    <Input onChange={query} />
    {
      image.images ?
      <img alt="" src={image.images.downsized.url} /> :
      <div> NO IMAGES FOUND </div>
    }
    {
      historicalQueries.length > 0 ?
      <HistoricalQueriesComponent
        historicalQueries={historicalQueries}
        selectHistoricalImage={selectHistoricalImage}
      /> :
      <div> NO HISTORY </div>
    }
  </div>
);

QueryComponent.propTypes = {
  image: PropTypes.any,
  query: PropTypes.func.isRequired,
  selectHistoricalImage: PropTypes.func.isRequired,
  historicalQueries: PropTypes.array,
};
