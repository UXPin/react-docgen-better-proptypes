import React from 'react';
import PropTypes from 'prop-types';
import { basicPropTypes, basicDefaultProps } from '../props/basicProps';

class ImportedPropsSpreadClassComponent extends React.Component {
  static propTypes = {
    ...basicPropTypes,
    localProp: PropTypes.number,
  };

  static defaultProps = {
    ...basicDefaultProps,
    localProp: 1,
  };

  render() {
    return <div />;
  }
}

export default ImportedPropsSpreadClassComponent;
