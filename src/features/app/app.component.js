import React from 'react';

import { QueryContainer } from '../../store';
import { TrendingContainer } from '../../store';

export const AppContainer = () => (
  <div>
    <QueryContainer />
    <TrendingContainer />
  </div>
);
