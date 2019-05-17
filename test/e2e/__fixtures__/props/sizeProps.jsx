import PropTypes from 'prop-types';

export const sizes = ['sm', 'md', 'xl'];

export const sizePropTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'xl']).isRequired,
};

export default sizes;
