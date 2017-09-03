import React from 'react';

import { QueryContainer } from '../../store/query';
import { TrendingContainer } from '../../store/trending';

export const AppComponent = () => (
  <div>
    <QueryContainer />
    <TrendingContainer />
  </div>
);
