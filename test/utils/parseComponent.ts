import { defaultHandlers, Handler, parse } from 'react-docgen';
import { ComponentDoc } from 'react-docgen';

import { importedPropTypesHandler } from '../../src';
import { getSource } from './getSource';

export async function parseComponent(filePath:string):Promise<ComponentDoc> {
  const fileContents:string = await getSource(filePath);

  const handlers:Handler[] = [
    ...defaultHandlers,
    importedPropTypesHandler(filePath),
  ];

  return parse(fileContents, undefined, handlers);
}
