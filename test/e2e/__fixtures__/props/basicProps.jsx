import PropTypes from 'prop-types';

export const basicPropTypes = {
  /**
   * This is color prop description
   */
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export const basicDefaultProps = {
  text: 'Submit',
};
