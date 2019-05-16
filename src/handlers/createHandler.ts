import { NodePath } from 'ast-types';
import { Documentation } from 'react-docgen';
import { parsePath } from '../utils/parsePath';
import { AllowedHandlerProps } from './getHandledPropertyPath';
import { getHandlerContext, HandlerContext } from './getHandlerContext';

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

      parsePath(context.propertyPath, context);
    };
  };
}
