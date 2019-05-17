import { Node } from '../../parsePath';
import { NodePathType } from '../NodePathTypes';

export function getImportSpecifier(importDeclaration:Node, variableName:string):Node | undefined {
  return importDeclaration.specifiers && importDeclaration.specifiers.find((specifier:Node) => {
    switch (specifier.type) {
      case NodePathType.IMPORT_DEFAULT_SPECIFIER:
        return !!specifier.local && specifier.local.name === variableName;

      case NodePathType.IMPORT_SPECIFIER:
        return !!specifier.imported && specifier.imported.name === variableName;

      default:
        return false;
    }
  });
}
