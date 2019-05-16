import { existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { HandlerContext } from '../../../handlers/getHandlerContext';
import { Node } from '../../parsePath';

export const ALLOWED_EXTENSIONS:string[] = ['js', 'jsx'];

export function getImportDeclarationFilePath(importDeclaration:Node, context:HandlerContext):string | undefined {
  const filePath:string = resolve(dirname(context.filePath), importDeclaration.source!!.value);
  const extension:string | undefined = ALLOWED_EXTENSIONS.find((ext:string) => {
    try {
      return existsSync(`${filePath}.${ext}`);
    } catch (e) {
      return false;
    }
  });

  return extension
    ? `${filePath}.${extension}`
    : undefined;
}
