import { resolve } from 'path';

export function getComponentPath(componentName:string):string {
  return resolve(__dirname, '../e2e/__fixtures__/components/', `${componentName}.jsx`);
}
