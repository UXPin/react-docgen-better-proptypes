import { NodePath } from 'ast-types';
import { NodePathType } from '../NodePathTypes';
import { Node } from '../../parsePath';

export function getImports(path:NodePath<Node>):Node[] {
  const valuePath:NodePath<Node> = path.get('value');
  const body:Node[] = valuePath.node.body || [];

  return body.filter((node) => node.type === NodePathType.IMPORT_DECLARATION);
}
