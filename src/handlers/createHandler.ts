import { NodePath } from 'ast-types';
import { Documentation } from 'react-docgen';

import { parsePath } from '../utils/parsePath';
import { HandlerContext, getHandlerContext } from './getHandlerContext';
import { AllowedHandlerProps } from './getHandledPropertyPath';

export type Handler = (filePath:string) => (...args:any[]) => void;

export function createHandler(propName:AllowedHandlerProps):Handler {
  return (filePath:string) => {
    return (docs:Documentation, path:NodePath) => {
      const context:HandlerContext = getHandlerContext(
        docs,
        path,
        propName,
        filePath,
      );

      console.log(parsePath(context.propertyPath, context));
    };
  };
}
