import React from 'react';
import PropTypes from 'prop-types';

function BasicStatelessComponent({ color, text }) {
  return (
    <button className={ color }>{ text }</button>
  );
}

BasicStatelessComponent.propTypes = {
  /**
   * This is color prop description
   */
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

BasicStatelessComponent.defaultProps = {
  text: 'Submit',
};

export default BasicStatelessComponent;
