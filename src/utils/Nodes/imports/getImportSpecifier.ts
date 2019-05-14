import { Node } from '../../parsePath';

export function getImportSpecifier(importDeclaration:Node, variableName:string):Node | undefined {
  return importDeclaration.specifiers && importDeclaration.specifiers.find((specifier:Node) => {
    return !!specifier.imported && specifier.imported.name === variableName;
  });
}
