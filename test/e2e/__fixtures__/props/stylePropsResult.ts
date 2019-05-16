import { Props } from 'react-docgen';
import { colorPropsResult } from './colorPropsResult';
import { sizePropsResult } from './sizePropsResult';

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
