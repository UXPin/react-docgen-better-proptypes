import React from 'react';
import PropTypes from 'prop-types';
import { stylePropTypes, styleDefaultProps } from '../props/styleProps';

function ImportedPropsSpreadImportedPropsStatelessComponent() {
  return <div />;
}

ImportedPropsSpreadImportedPropsStatelessComponent.propTypes = {
  ...stylePropTypes,
  localProp: PropTypes.number,
};

ImportedPropsSpreadImportedPropsStatelessComponent.defaultProps = {
  ...styleDefaultProps,
  localProp: 1,
};

export default ImportedPropsSpreadImportedPropsStatelessComponent;
