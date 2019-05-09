import { Props } from 'react-docgen';

export const basicPropsResult:Props = {
  color: {
    description: 'This is color prop description',
    required: true,
    type: {
      name: 'string',
    },
  },
  text: {
    defaultValue: {
      computed: false,
      value: "'Submit'",
    },
    description: '',
    required: false,
    type: {
      name: 'string',
    },
  },
};
