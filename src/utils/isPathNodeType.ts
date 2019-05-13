import { NodePath } from 'ast-types';
import { Node } from './parsePath';
import { NodePathType } from './Nodes/NodePathTypes';

export function isPathNodeType(path:NodePath<Node>, type:NodePathType):boolean {
  return path.node.type === type;
}
