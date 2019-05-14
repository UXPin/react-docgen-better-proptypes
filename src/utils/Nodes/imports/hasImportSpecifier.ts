import { Node } from '../../parsePath';
import { getImportSpecifier } from './getImportSpecifier';

export function hasImportSpecifier(importDeclaration:Node, variableName:string):boolean {
  return !!getImportSpecifier(importDeclaration, variableName);
}
