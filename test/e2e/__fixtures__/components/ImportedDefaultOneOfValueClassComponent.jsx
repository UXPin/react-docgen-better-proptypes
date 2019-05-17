import React from 'react';
import PropTypes from 'prop-types';
import sizesArr from '../props/sizeProps';
import themes from '../props/themeProps';

class ImportedDefaultOneOfValueClassComponent extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(sizesArr).isRequired,
    theme: PropTypes.oneOf(themes).isRequired,
  };

  render() {
    return <div />;
  }
}

export default ImportedDefaultOneOfValueClassComponent;
