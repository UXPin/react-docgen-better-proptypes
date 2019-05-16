import { ComponentDoc } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';
import { themePropsResult } from '../__fixtures__/props/themePropsResult';

describe('serialize components with imported one of', () => {
  describe('with oneOf value imported from external file', () => {
    it('within class component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedOneOfValueClassComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'ImportedOneOfValueClassComponent',
        methods: [],
        props: {
          ...themePropsResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('within stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedOneOfValueStatelessComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'ImportedOneOfValueStatelessComponent',
        methods: [],
        props: {
          ...themePropsResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });
});
