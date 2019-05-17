import { ComponentDoc } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';
import { sizePropsResult } from '../__fixtures__/props/sizePropsResult';
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

  describe('with default oneOf value imported from external file', () => {
    it('within class component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedDefaultOneOfValueClassComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'ImportedDefaultOneOfValueClassComponent',
        methods: [],
        props: {
          ...sizePropsResult,
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
      const componentPath:string = getComponentPath('ImportedDefaultOneOfValueStatelessComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'ImportedDefaultOneOfValueStatelessComponent',
        methods: [],
        props: {
          ...sizePropsResult,
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
