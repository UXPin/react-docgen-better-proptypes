import { Props } from 'react-docgen';
import { sizePropsResult } from './sizePropsResult';
import { colorPropsResult } from './colorPropsResult';

export const stylePropsResult:Props = {
  ...colorPropsResult,
  ...sizePropsResult,
  stylePropLocal: {
    description: '',
    required: true,
    type: {
      name: 'boolean',
    },
  },
};
