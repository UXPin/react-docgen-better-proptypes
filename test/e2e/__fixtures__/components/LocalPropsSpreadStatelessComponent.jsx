import React from 'react';
import PropTypes from 'prop-types';

const localProps = {
  color: PropTypes.string.isRequired,
};

function LocalPropsSpreadStatelessComponent() {
  return <div />;
}

LocalPropsSpreadStatelessComponent.propTypes = {
  ...localProps,
  text: PropTypes.string,
};

LocalPropsSpreadStatelessComponent.defaultProps = {
  text: 'Submit',
};

export default LocalPropsSpreadStatelessComponent;
