import React from 'react';
import PropTypes from 'prop-types';

const localProps = {
  color: PropTypes.string.isRequired,
};

class LocalPropsSpreadClassComponent extends React.Component {
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

export default LocalPropsSpreadClassComponent;
