import { ASTNode, NodePath } from 'ast-types';
import { utils } from 'react-docgen';
// import setPropDescription from 'react-docgen/dist/utils/setPropDescription';

import { NodePathType } from './Nodes/NodePathTypes';

interface PropParseResult {
  [key:string]:any;
}

export type Parser = (path:NodePath<ASTNode>) => null;

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

function objectExpressionParser(path:NodePath<ASTNode>):null {
  path.get('properties').each((propertyPath:NodePath) => {
    parsePath(propertyPath);
  });

  return null;
}

function propertyParser(path:NodePath<ASTNode>):null {
  const name:string = utils.getPropertyName(path);

  console.log(name);

  return null;
}

export function parsePath(path:NodePath<ASTNode>):PropParseResult {
  const parser:Parser = getParser(path.node.type as NodePathType);

  parser(path);

  return {};
}
