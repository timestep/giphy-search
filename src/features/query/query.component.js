import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../common/components';
import { HistoryComponent } from './history/history.component';

import { SelectedImageComponent } from './selected-image';

export const QueryComponent = ({
  url,
  query,
  historicalQueries,
  selectHistoricalImage,
}) =>  (
  <div className="w-100 justify-center flex items-center flex-column">
    <div className="f1 tc"> GIF Search </div>
    <div>
      <Input onChange={query} />
    </div>
    <div className="flex justify-around w-100">
      <div className="pl2">
        <SelectedImageComponent url={url} />
      </div>
      <div className="pr2 tr">
        <HistoryComponent
          historicalQueries={historicalQueries}
          selectHistoricalImage={selectHistoricalImage}
        />
      </div>
    </div>
  </div>
);

QueryComponent.propTypes = {
  url: PropTypes.string,
  query: PropTypes.func.isRequired,
  selectHistoricalImage: PropTypes.func.isRequired,
  historicalQueries: PropTypes.array,
};
