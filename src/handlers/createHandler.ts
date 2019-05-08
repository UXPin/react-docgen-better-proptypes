import { NodePath } from 'ast-types';
import { resolve } from 'path';
import { utils } from 'react-docgen';

import { parsePath } from '../utils/parsePath';
import { Handler } from './Handler';

export enum AllowedHandlerProps {
  CHILD_CONTEXT_TYPES = 'childContextTypes',
  CONTEXT_TYPES = 'contextTypes',
  PROP_TYPES = 'propTypes',
}

export function createHandler(propName:AllowedHandlerProps):Handler {
  return (filePath:string) => {
    const resolvedFilePath:string = filePath.startsWith('/')
      ? filePath
      : resolve(process.cwd(), filePath);

    console.log(resolvedFilePath);

    return (documentation:any, path:NodePath) => {
      const propPath:NodePath|undefined = utils.getMemberValuePath(path, propName);
      if (!propPath) {
        return;
      }

      console.log(parsePath(propPath));
    };
  };
}
