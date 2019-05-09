import { readFile } from 'fs-extra';

export async function getSource(filePath:string):Promise<string> {
  return readFile(filePath, { encoding: 'utf8' });
}
