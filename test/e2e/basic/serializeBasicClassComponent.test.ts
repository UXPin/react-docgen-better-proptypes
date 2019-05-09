import { ComponentDoc } from 'react-docgen';
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
      },
    };

    // when
    const result:ComponentDoc = await parseComponent(componentPath);

    // then
    expect(result).toEqual(expectedComponent);
  });
});
