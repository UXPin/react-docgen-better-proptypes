import { ASTNode, NodePath } from 'ast-types';
import { utils } from 'react-docgen';
// import setPropDescription from 'react-docgen/dist/utils/setPropDescription';

import { HandlerContext } from '../handlers/getHandlerContext';
import { NodePathType } from './Nodes/NodePathTypes';

interface PropParseResult {
  [key:string]:any;
}

export type Parser = (path:NodePath<ASTNode>, context:HandlerContext) => null;

function getParser(type:NodePathType):Parser {
  switch (type) {
    case NodePathType.OBJECT_EXPRESSION:
      return objectExpressionParser;

    case NodePathType.PROPERTY:
      return propertyParser;

    default:
      console.log(`Unsupported ${type}`);
      return () => null;
  }
}

function objectExpressionParser(path:NodePath<ASTNode>, context:HandlerContext):null {
  path.get('properties').each((propertyPath:NodePath) => {
    parsePath(propertyPath, context);
  });

  return null;
}

function propertyParser(path:NodePath<ASTNode>, context:HandlerContext):null {
  const name:string = utils.getPropertyName(path);

  console.log(name);

  return null;
}

export function parsePath(path:NodePath<ASTNode>, context:HandlerContext):PropParseResult {
  const parser:Parser = getParser(path.node.type as NodePathType);

  parser(path, context);

  return {};
}
