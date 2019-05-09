import React from 'react';
import PropTypes from 'prop-types';

class BasicClassComponent extends React.Component {
  static propTypes = {
    /**
     * This is color prop description
     */
    color: PropTypes.string.isRequired,
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Submit',
  };

  render() {
    const { color, text } = this.props;

    return (
      <button className={ color }>{ text }</button>
    );
  }
}

export default BasicClassComponent;
