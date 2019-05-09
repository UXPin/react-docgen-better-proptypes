import { readFileSync } from 'fs';
import { sync as globSync } from 'glob';
import { basename, resolve } from 'path';
import { parse, resolver } from 'react-docgen';

import { importedPropTypesHandler } from '../../src/handlers/importedPropTypesHandler';

const TARGET_FILES:string[] = globSync(
  resolve(__dirname, 'fixtures/components/component-*.js'),
);

describe('react-docgen-imported-proptypes-handler', () => {
  function test(filepath:string):void {
    it('parses with only imported handlers', () => {
      const info:any = parse(
        readFileSync(filepath, 'utf8'),
        resolver.findExportedComponentDefinition,
        [importedPropTypesHandler(filepath)],
        {},
      );

      expect(info).toMatchSnapshot();
    });
  }

  TARGET_FILES.forEach((filepath:string) => {
    describe(basename(filepath), () => test(filepath));
  });
});
