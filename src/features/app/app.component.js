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
  <div className="vh-100 w-100 flex flex-column pt3 bg-black white">
    <div style={style.topContainer}>
      <QueryContainer />
    </div>
    <div style={style.bottomContainer}>
      <TrendingContainer />
    </div>
  </div>
);
