import { ComponentDoc, Props } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';
import { basicPropsResult } from '../__fixtures__/props/basicPropsResult';
import { stylePropsResult } from '../__fixtures__/props/stylePropsResult';

const localPropResult:Props = {
  localProp: {
    defaultValue: {
      computed: false,
      value: '1',
    },
    description: '',
    required: false,
    type: {
      name: 'number',
    },
  },
};

describe.skip('serialize components with local spreads', () => {
  describe('with propTypes imported from external file', () => {
    it('and spread directly into a class component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedPropsSpreadClassComponent');
      const expectedComponent:ComponentDoc = {
        composes: [
          '../props/basicProps',
        ],
        description: '',
        displayName: 'ImportedPropsSpreadClassComponent',
        methods: [],
        props: {
          ...basicPropsResult,
          ...localPropResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('and spread directly into a stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedPropsSpreadStatelessComponent');
      const expectedComponent:ComponentDoc = {
        composes: [
          '../props/basicProps',
        ],
        description: '',
        displayName: 'ImportedPropsSpreadStatelessComponent',
        methods: [],
        props: {
          ...basicPropsResult,
          ...localPropResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });

  describe('with propTypes with external spread imported from external file', () => {
    it('and spread into a class component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedPropsSpreadImportedPropsClassComponent');
      const expectedComponent:ComponentDoc = {
        composes: [
          '../props/styleProps',
        ],
        description: '',
        displayName: 'ImportedPropsSpreadImportedPropsClassComponent',
        methods: [],
        props: {
          ...stylePropsResult,
          ...localPropResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('and spread into a stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedPropsSpreadImportedPropsStatelessComponent');
      const expectedComponent:ComponentDoc = {
        composes: [
          '../props/styleProps',
        ],
        description: '',
        displayName: 'ImportedPropsSpreadImportedPropsStatelessComponent',
        methods: [],
        props: {
          ...stylePropsResult,
          ...localPropResult,
        },
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });
});
