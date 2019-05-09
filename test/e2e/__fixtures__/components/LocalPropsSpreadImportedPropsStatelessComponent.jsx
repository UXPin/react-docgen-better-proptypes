import React from 'react';
import PropTypes from 'prop-types';
import { colorPropTypes } from '../props/colorProps';

const localProps = {
  ...colorPropTypes,
};

function LocalPropsSpreadImportedPropsStatelessComponent() {
  return <div />;
}

LocalPropsSpreadImportedPropsStatelessComponent.propTypes = {
  ...localProps,
  text: PropTypes.string,
};

LocalPropsSpreadImportedPropsStatelessComponent.defaultProps = {
  text: 'Submit',
};

export default LocalPropsSpreadImportedPropsStatelessComponent;
