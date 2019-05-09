import PropTypes from 'prop-types';
import { colorPropTypes } from './colorProps';
import { sizePropTypes } from './sizeProps';

export const stylePropTypes = {
  ...colorPropTypes,
  ...sizePropTypes,
  stylePropLocal: PropTypes.boolean.isRequired,
};

export const styleDefaultProps = {};
