import React from 'react';
import PropTypes from 'prop-types';
import { stylePropTypes, styleDefaultProps } from '../props/styleProps';

class ImportedPropsSpreadImportedPropsClassComponent extends React.Component {
  static propTypes = {
    ...stylePropTypes,
    localProp: PropTypes.number,
  };

  static defaultProps = {
    ...styleDefaultProps,
    localProp: 1,
  };

  render() {
    return <div />;
  }
}

export default ImportedPropsSpreadImportedPropsClassComponent;
