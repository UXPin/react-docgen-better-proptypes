import { NodePath } from 'ast-types';
import { utils } from 'react-docgen';

export enum AllowedHandlerProps {
  CHILD_CONTEXT_TYPES = 'childContextTypes',
  CONTEXT_TYPES = 'contextTypes',
  PROP_TYPES = 'propTypes',
}

export function getHandledPropertyPath(path:NodePath, propName:AllowedHandlerProps):NodePath {
  const handledPropertyPath:NodePath | undefined = utils.getMemberValuePath(path, propName);

  if (!handledPropertyPath) {
    throw new Error(`${propName} not found!`);
  }

  return handledPropertyPath;
}
