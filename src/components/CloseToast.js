import React from 'react';
import PropTypes from 'prop-types';

const closeToast = props => {
  const { clickFunction } = props;
  return (
    <button onClick={clickFunction}>x</button>
  );
};

closeToast.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default closeToast;
