import { NodePath } from 'ast-types';
import { Node } from './parsePath';

export function getManyProps(path:NodePath<Node>, props:string[]):NodePath<Node>[] {
  return props.map((prop:string) => path.get(prop));
}
