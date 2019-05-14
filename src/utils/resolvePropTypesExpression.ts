import { NodePath } from 'ast-types';
import { utils, PropTypeValue } from 'react-docgen';
import { HandlerContext } from '../handlers/getHandlerContext';
import { getSourceSync } from './fs/getSourceSync';
import { findImportDeclaration } from './Nodes/imports/findImportDeclaration';
import { getImportDeclarationFilePath } from './Nodes/imports/getImportDeclarationFilePath';
import { Node } from './parsePath';

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

interface BindingsMap {
  [key:string]:NodePath<Node>[];
}
