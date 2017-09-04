import React from 'react';

import { QueryContainer } from '../../store/query';
import { TrendingContainer } from '../../store/trending';

const style = {
  topContainer: {
    height: '45vh',
  },
  bottomContainer: {
    height: '45vh',
  },
};

export const AppComponent = () => (
  <div className="h-100 w-100 flex flex-column mt3">
    <div style={style.topContainer}>
      <QueryContainer />
    </div>
    <div style={style.bottomContainer}>
      <TrendingContainer />
    </div>
  </div>
);
