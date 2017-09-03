import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../common/components';

export const QueryComponent = ({ image = {}, query }) =>  (
  <div>
    <Input onChange={query} />
    {
      image.images ?
      <img alt="" src={image.images.downsized.url} /> :
      <div> NO IMAGES FOUND </div>
    }
  </div>
);

QueryComponent.propTypes = {
  image: PropTypes.any,
  query: PropTypes.func.isRequired,
};
