import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../props/themeProps';

function ImportedOneOfValueStatelessComponent() {
  return <div />;
}

ImportedOneOfValueStatelessComponent.propTypes = {
  theme: PropTypes.oneOf(themes),
};

export default ImportedOneOfValueStatelessComponent;
