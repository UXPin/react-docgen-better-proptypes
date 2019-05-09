import { ComponentDoc, Props } from 'react-docgen';
import { getComponentPath } from '../../utils/getComponentPath';
import { parseComponent } from '../../utils/parseComponent';
import { basicPropsResult } from '../__fixtures__/props/basicPropsResult';

describe('serialize basic components', () => {
  describe('with propTypes defined within the file', () => {
    it('should serialize simplest class component', async () => {
      // given
      const componentPath:string = getComponentPath('BasicClassComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'BasicClassComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('should serialize simplest stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('BasicStatelessComponent');
      const expectedComponent:ComponentDoc = {
        description: '',
        displayName: 'BasicStatelessComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });
  });

  describe('with all proptypes object imported from external file', () => {
    it('should serialize class component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedAllPropsClassComponent');
      const expectedComponent: ComponentDoc = {
        composes: [
          './BasicClassComponent',
        ],
        description: '',
        displayName: 'ImportedAllPropsClassComponent',
        methods: [],
        props: basicPropsResult,
      };

      // when
      const result:ComponentDoc = await parseComponent(componentPath);

      // then
      expect(result).toEqual(expectedComponent);
    });

    it('should serialize stateless component', async () => {
      // given
      const componentPath:string = getComponentPath('ImportedAllPropsStatelessComponent');
      const expectedComponent:ComponentDoc = {
        composes: [
          './BasicStatelessComponent',
        ],
        description: '',
        displayName: 'ImportedAllPropsStatelessComponent',
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
