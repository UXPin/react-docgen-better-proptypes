import React from 'react';
import PropTypes from 'prop-types';
import { basicPropTypes, basicDefaultProps } from '../props/basicProps';

function ImportedPropsSpreadStatelessComponent() {
  return <div />;
}

ImportedPropsSpreadStatelessComponent.propTypes = {
  ...basicPropTypes,
  localProp: PropTypes.number,
};

ImportedPropsSpreadStatelessComponent.defaultProps = {
  ...basicDefaultProps,
  localProp: 1,
};

export default ImportedPropsSpreadStatelessComponent;
