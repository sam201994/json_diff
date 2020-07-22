import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({value, onClick, customStyleClass}) => {
  return (
    <button type="button" className={customStyleClass} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customStyleClass: PropTypes.string.isRequired,
};

export default Button;
