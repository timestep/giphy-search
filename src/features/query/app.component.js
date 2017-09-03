import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../common/components';

export const QueryComponent = ({ data = [], query }) =>  (
  <div>
    <Input onChange={query} />
    {data.map(() => (
      <div>Hi</div>
    ))}
  </div>
);

QueryComponent.propTypes = {
  data: PropTypes.array,
  query: PropTypes.func.isRequired,
};
