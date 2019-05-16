import { NodePath } from 'ast-types';
import { NodePathType } from './Nodes/NodePathTypes';
import { Node } from './parsePath';

export function isPathNodeType(path:NodePath<Node>, type:NodePathType):boolean {
  return path.node.type === type;
}
