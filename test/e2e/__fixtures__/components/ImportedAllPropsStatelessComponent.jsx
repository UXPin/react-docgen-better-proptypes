import React from 'react';
import BasicStatelessComponent from './BasicStatelessComponent';

function ImportedAllPropsStatelessComponent() {
  return <div />;
}

ImportedAllPropsStatelessComponent.propTypes = BasicStatelessComponent.propTypes;
ImportedAllPropsStatelessComponent.defaultProps = BasicStatelessComponent.defaultProps;

export default ImportedAllPropsClassComponent;
