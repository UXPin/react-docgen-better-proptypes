import { ComponentDoc } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';

describe('serialize basic stateless component', () => {
  it('should serialize simplest stateless component', async () => {
    // given
    const componentPath:string = getComponentPath('BasicStatelessComponent');
    const expectedComponent:ComponentDoc = {
      description: '',
      displayName: 'BasicStatelessComponent',
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
