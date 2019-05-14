import { NodePath } from 'ast-types';
import { existsSync } from 'fs';
import { utils, PropTypeValue } from 'react-docgen';
import { dirname, resolve } from 'path';
import { HandlerContext } from '../handlers/getHandlerContext';
import { Node } from './parsePath';
import { NodePathType } from './Nodes/NodePathTypes';
import { getSourceSync } from './getSourceSync';

const buildParse = require('react-docgen/dist/babelParser').default;

export function resolvePropTypesExpression(path:NodePath<Node>, context:HandlerContext):NodePath<Node> {
  const propValue:PropTypeValue = utils.getPropType(path);

  if (propValue.name === 'enum') {
    return resolveEnumPropTypeValue(propValue, path, context);
  }

  return path;
}

function resolveEnumPropTypeValue(propType:PropTypeValue, path:NodePath<Node>, context:HandlerContext):NodePath<Node> {
  const bindings:BindingsMap = path.scope.getBindings();
  const valueBindings:NodePath<Node>[] | undefined = bindings[propType.value];
  const valueBinding:NodePath<Node> | undefined = valueBindings ? valueBindings[0] : undefined;

  if (!valueBindings || !valueBinding) {
    return path;
  }

  const importDeclaration:Node | undefined = findImportDeclaration(valueBinding, context);
  if (!importDeclaration) {
    return path;
  }

  const filePath:string | undefined = getImportDeclarationFilePath(importDeclaration, context);
  console.log(filePath);
  if (!filePath) {
    return path;
  }

  const result:any = buildParse().parse((getSourceSync(filePath)));
  console.log(result);

  return path;
}

const ALLOWED_EXTENSIONS:string[] = ['js', 'jsx'];

function getImportDeclarationFilePath(importDeclaration:Node, context:HandlerContext):string | undefined {
  const filePath:string = resolve(dirname(context.filePath), importDeclaration.source!!.value);
  const extension:string | undefined = ALLOWED_EXTENSIONS.find((extension:string) => {
    try {
      return existsSync(`${filePath}.${extension}`);
    } catch (e) {
      return false;
    }
  });

  return extension ? `${filePath}.${extension}` : undefined;
}

function findImportDeclaration(binding:NodePath<Node>, context:HandlerContext):Node | undefined {
  // Get reversed list to start looking from the end of the list in case
  // when variables are overriden
  const imports:Node[] = getImports(context.componentPath.parentPath).reverse();
  const variableName:string = utils.getNameOrValue(binding);

  return imports.find((importDeclaration:Node) => {
    return hasImportSpecifier(importDeclaration, variableName);
  });
}

function getImports(path:NodePath<Node>):Node[] {
  const valuePath:NodePath<Node> = path.get('value');
  const body:Node[] = valuePath.node.body || [];

  return body.filter((node) => node.type === NodePathType.IMPORT_DECLARATION);
}

function hasImportSpecifier(importDeclaration:Node, variableName:string):boolean {
  return !!getImportSpecifier(importDeclaration, variableName);
}

function getImportSpecifier(importDeclaration:Node, variableName:string):Node | undefined {
  return importDeclaration.specifiers && importDeclaration.specifiers.find((specifier:Node) => {
    return !!specifier.imported && specifier.imported.name === variableName;
  });
}

interface BindingsMap {
  [key:string]:NodePath<Node>[];
}
