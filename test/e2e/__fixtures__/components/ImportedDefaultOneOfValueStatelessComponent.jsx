import React from 'react';
import PropTypes from 'prop-types';
import sizesArr from '../props/sizeProps';
import themes from '../props/themeProps';

function ImportedDefaultOneOfValueStatelessComponent() {
  return <div />;
}

ImportedDefaultOneOfValueStatelessComponent.propTypes = {
  size: PropTypes.oneOf(sizesArr).isRequired,
  theme: PropTypes.oneOf(themes),
};

export default ImportedDefaultOneOfValueStatelessComponent;
