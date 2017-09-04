import React from 'react';
import PropTypes from 'prop-types';

import { HistoricalQueriesComponent } from './historical-queries.component';

export const HistoryComponent = ({ historicalQueries, selectHistoricalImage }) => (
  <div>
    <div className="f4"> Historical Searches </div>
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

HistoryComponent.propTypes = {
  historicalQueries: PropTypes.array,
  selectHistoricalImage: PropTypes.func,
};
