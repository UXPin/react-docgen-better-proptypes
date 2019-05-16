import { ComponentDoc } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';
import { basicPropsResult } from '../__fixtures__/props/basicPropsResult';

describe.skip('serialize components with local spreads', () => {
  describe('with propTypes defined in the same file', () => {
    it('and spread into a class component', async () => {
      // given
      const componentPath:string = getComponentPath('LocalPropsSpreadClassComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'LocalPropsSpreadClassComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('and spread into a stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('LocalPropsSpreadStatelessComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'LocalPropsSpreadStatelessComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });

  describe('with propTypes with imported spreads defined in the same file', () => {
    it('and spread into a class component', async () => {
      // given
      const componentPath:string = getComponentPath('LocalPropsSpreadImportedPropsClassComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'LocalPropsSpreadImportedPropsClassComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('and spread into a stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('LocalPropsSpreadImportedPropsStatelessComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'LocalPropsSpreadImportedPropsStatelessComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });
});
