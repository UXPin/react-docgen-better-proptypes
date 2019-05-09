import React from 'react';
import PropTypes from 'prop-types';
import { colorPropTypes } from '../props/colorProps';

const localProps = {
  ...colorPropTypes,
};

class LocalPropsSpreadImportedPropsClassComponent extends React.Component {
  static propTypes = {
    ...localProps,
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Submit',
  };

  render() {
    return <div />;
  }
}

export default LocalPropsSpreadImportedPropsClassComponent;
