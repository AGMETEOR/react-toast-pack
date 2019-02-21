import React from 'react';
import PropTypes from 'prop-types';

const closeToast = props => {
  const { clickFunction } = props;
  return (
    <button className="Close" onClick={clickFunction}>x</button>
  );
};

closeToast.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default closeToast;
