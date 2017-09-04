import React from  'react';
import PropTypes from 'prop-types';

export const HistoricalQueriesComponent = ({
  historicalQueries,
  selectHistoricalImage,
}) => (
  <div>
    {
      historicalQueries.map((query, idx) => (
        <div
          className="pointer"
          key={idx}
          onClick={() => selectHistoricalImage(idx)}
        >
          {query}
        </div>
      ))
    }
  </div>
);

HistoricalQueriesComponent.propTypes = {
  historicalQueries: PropTypes.array,
  selectHistoricalImage: PropTypes.func,
};
