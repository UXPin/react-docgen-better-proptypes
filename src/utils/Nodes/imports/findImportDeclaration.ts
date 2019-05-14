import { NodePath } from 'ast-types';
import { utils } from 'react-docgen';
import { HandlerContext } from '../../../handlers/getHandlerContext';
import { Node } from '../../parsePath';
import { getImports } from './getImports';
import { hasImportSpecifier } from './hasImportSpecifier';

export function findImportDeclaration(binding:NodePath<Node>, context:HandlerContext):Node | undefined {
  // Get reversed list to start looking from the end
  // of the list in case when variables are overriden
  const imports:Node[] = getImports(context.componentPath.parentPath).reverse();
  const variableName:string = utils.getNameOrValue(binding);

  return imports.find((importDeclaration:Node) => {
    return hasImportSpecifier(importDeclaration, variableName);
  });
}
