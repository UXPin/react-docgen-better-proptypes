import PropTypes from 'prop-types';

export const themes = ['dark', 'light'];

export const themesPropTypes = {
  theme: PropTypes.oneOf(themes).isRequired,
};

export const themesDefaultProps = {};
