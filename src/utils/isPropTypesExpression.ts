import { utils } from 'react-docgen';
import { NodePath } from 'ast-types';
import { Node } from './parsePath';

const REACT_PROP_TYPES:string = 'ReactPropTypes';

export function isPropTypesExpression(path:NodePath<Node>):boolean {
  const moduleName:string | undefined = utils.resolveToModule(path);

  if (!moduleName) {
    return false;
  }

  return utils.isReactModuleName(moduleName) || moduleName === REACT_PROP_TYPES;
}
