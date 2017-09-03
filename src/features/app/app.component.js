import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../common/components';

export const AppComponent = ({ data = [], query }) =>  (
  <div>
    <Input onChange={query} />
    {data.map(() => (
      <div>Hi</div>
    ))}
  </div>
);

AppComponent.propTypes = {
  data: PropTypes.array,
  query: PropTypes.func.isRequired,
};
