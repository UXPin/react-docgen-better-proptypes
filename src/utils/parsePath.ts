import { ASTNode, NodePath } from 'ast-types';
import { utils, PropTypeValue } from 'react-docgen';

import { HandlerContext } from '../handlers/getHandlerContext';
import { NodePathType } from './Nodes/NodePathTypes';
import { resolveToValue } from './resolveToValue';
import { isPropTypesExpression } from './isPropTypesExpression';
import { getManyProps } from './getManyProps';
import { isPathNodeType } from './isPathNodeType';

const getMemberExpressionRoot = require('react-docgen/dist/utils/getMemberExpressionRoot').default;
const getMemberExpressionValuePath = require('react-docgen/dist/utils/getMemberExpressionValuePath').default;

interface PropParseResult {
  [key:string]:any;
}

export enum NodeOperator {
  EQUALITY = '=',
}

export interface Node extends ASTNode {
  body?:Node[],
  imported?:Node,
  init?:any;
  name:string;
  object:Node;
  operator?:NodeOperator;
  source?:Node;
  specifiers?:Node[];
  value:any;
}

export type Parser = (path:NodePath<Node>, context:HandlerContext) => void;

function getParser(type:NodePathType):Parser {
  switch (type) {
    case NodePathType.MEMBER_EXPERSSION:
      return memberExpressionParser;

    case NodePathType.OBJECT_EXPRESSION:
      return objectExpressionParser;

    case NodePathType.PROPERTY:
      return propertyParser;

    default:
      console.log(`Unsupported ${type}`);
      return () => {};
  }
}

function memberExpressionParser(path:NodePath<Node>, context:HandlerContext):void {
  if (isPropTypesExpression(path)) {
    getManyProps(path, ['object', 'property'])
      .filter((innerPath:NodePath<Node>) => innerPath.node.type !== NodePathType.IDENTIFIER)
      .forEach((innerPath:NodePath<Node>) => parsePath(innerPath, context));

    return;
  }

  const objectPath:NodePath<Node> = path.get('object');
  if (objectPath && !isPathNodeType(objectPath, NodePathType.CALL_EXPRESSION)) {
    const resolved:NodePath<Node> = resolveToValue(objectPath, context);
    if (
      isPathNodeType(resolved, NodePathType.CALL_EXPRESSION)
        || isPathNodeType(resolved, NodePathType.MEMBER_EXPERSSION)
        || isPathNodeType(resolved, NodePathType.IDENTIFIER)
    ) {
      return;
    }

    const memberValuePath:NodePath<Node> | undefined = utils.getMemberValuePath(resolved, utils.getNameOrValue(path.get('property')));
    if (!memberValuePath) {
      return;
    }

    parsePath(memberValuePath, context);
  }

}

function objectExpressionParser(path:NodePath<Node>, context:HandlerContext):void {
  path.get('properties').each((propertyPath:NodePath) => {
    parsePath(propertyPath, context);
  });
}

function propertyParser(path:NodePath<Node>, context:HandlerContext):void {
  const name:string = utils.getPropertyName(path);
  if (!name) {
    return;
  }

  const valuePath:NodePath<Node> = path.get('value');
  const value:NodePath<Node> = resolveToValue(valuePath, context);

  parsePath(value, context);

  const type:PropTypeValue = utils.getPropType(value);

  console.log(type);
}

export function parsePath(path:NodePath<Node>, context:HandlerContext):PropParseResult {
  const parser:Parser = getParser(path.node.type as NodePathType);

  parser(path, context);

  return {};
}
