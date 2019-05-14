import { readFileSync } from 'fs-extra';

export function getSourceSync(filePath:string):string {
  return readFileSync(filePath, { encoding: 'utf8' });
}
