import { NodePath } from 'ast-types';
import { utils } from 'react-docgen';
import { HandlerContext } from '../handlers/getHandlerContext';
import { NodePathType } from './Nodes/NodePathTypes';
import { isPropTypesExpression } from './isPropTypesExpression';
import { Node, NodeOperator } from './parsePath';

export function resolveToValue(path:NodePath<Node>, context:HandlerContext):NodePath<Node> {
  const { node } = path;

  switch (node.type) {
    case NodePathType.ASSIGNMENT_EXPRESSION: {
      if (!node.operator || node.operator !== NodeOperator.EQUALITY) {
        break;
      }

      return resolveToValue(path.get('right'), context);
    }

    case NodePathType.CALL_EXPRESSION: {
      console.log('resolveToValue', NodePathType.CALL_EXPRESSION);
      break;
    }

    case NodePathType.IDENTIFIER: {
      console.log('resolveToValue', NodePathType.IDENTIFIER);
      break;
    }

    case NodePathType.MEMBER_EXPERSSION: {
      if (isPropTypesExpression(path)) {
        return path;
      }

      const root:NodePath<Node> | undefined = utils.getMemberExpressionRoot(path);
      if (!root) {
        return path;
      }

      const resolved:NodePath<Node> = resolveToValue(root, context);
      if (resolved.node.type !== NodePathType.OBJECT_EXPRESSION) {
        break;
      }

      // TODO:
      return resolved;
    }

    case NodePathType.TYPE_CAST_EXPRESSION: {
      return resolveToValue(path.get('expression'), context);
    }

    case NodePathType.VARIABLE_DECLARATOR: {
      if (node.init) {
        return resolveToValue(path.get('init'), context);
      }
    }

    default: {
      return path;
    }
  }

  return path;
}
