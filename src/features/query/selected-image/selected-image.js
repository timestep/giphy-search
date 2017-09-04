import React from 'react';
import PropTypes from 'prop-types';

const style = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
};

export const SelectedImageComponent = ({ url }) => (
  <div>
    <div className="f4"> Searched Image </div>
    {
      url ?
      <img
        style={style}
        alt=""
        src={url}
      /> :
      <div> NO IMAGES FOUND </div>
    }
  </div>
);

SelectedImageComponent.propTypes = {
  url: PropTypes.any,
};
