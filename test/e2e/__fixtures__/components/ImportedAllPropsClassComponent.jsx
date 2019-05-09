import React from 'react';
import BasicClassComponent from './BasicClassComponent';

class ImportedAllPropsClassComponent extends React.Component {
  static propTypes = BasicClassComponent.propTypes;
  static defaultProps = BasicClassComponent.defaultProps;

  render() {
    return <div />;
  }
}

export default ImportedAllPropsClassComponent;
