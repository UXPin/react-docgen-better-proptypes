import { ComponentDoc } from 'react-docgen-typescript';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';

describe('serialize basic class component', () => {
  it('should serialize simplest class component', async () => {
    // given
    const componentPath:string = getComponentPath('BasicClassComponent');
    const expectedComponent:ComponentDoc = {
      description: '',
      displayName: 'BasicClassComponent',
      methods: [],
      props: {
        color: {
          defaultValue: '',
          description: 'This is color prop description',
          name: 'color',
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
          name: 'text',
          required: false,
          type: {
            name: 'string',
          },
        },
      },
    };

    // when
    const result:ComponentDoc = await parseComponent(componentPath);

    // then
    expect(result).toEqual(expectedComponent);
  });
});
