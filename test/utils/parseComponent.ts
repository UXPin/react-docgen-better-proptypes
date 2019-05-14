import { defaultHandlers, Handler, parse } from 'react-docgen';
import { ComponentDoc } from 'react-docgen';

import { getSource } from '../../src/utils/fs/getSource';
import { importedPropTypesHandler } from '../../src';

export async function parseComponent(filePath:string):Promise<ComponentDoc> {
  const fileContents:string = await getSource(filePath);

  const handlers:Handler[] = [
    ...defaultHandlers,
    importedPropTypesHandler(filePath),
  ];

  return parse(fileContents, undefined, handlers);
}
