import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../props/themeProps';

class ImportedOneOfValueClassComponent extends React.Component {
  static propTypes = {
    theme: PropTypes.oneOf(themes).isRequired,
  };

  render() {
    return <div />;
  }
}

export default ImportedOneOfValueClassComponent;
