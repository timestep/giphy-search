import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

export const Input = ({ onChange }) => {
  const handleOnChange = debounce((value) => {
    if (!value) return null;
    return onChange(value);
  }, 200);
  return (
    <div>
      <input onChange={ evt => handleOnChange(evt.target.value) } />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};
