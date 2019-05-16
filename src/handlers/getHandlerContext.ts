import { NodePath } from 'ast-types';
import { resolve } from 'path';
import { Documentation, PropItem, DocumentationDescriptor } from 'react-docgen';
import { AllowedHandlerProps, getHandledPropertyPath } from './getHandledPropertyPath';
import { getDocsDescriptor } from './getDocsDescriptor';

export function getHandlerContext(
  docs:Documentation,
  componentPath:NodePath,
  propName:AllowedHandlerProps,
  fileName:string,
):HandlerContext {
  const filePath: string = fileName.startsWith('/')
    ? fileName
    : resolve(process.cwd(), fileName);

  const propertyPath = getHandledPropertyPath(componentPath, propName);
  const docsDescriptor:DocumentationDescriptor = getDocsDescriptor(docs, propName);

  return {
    componentPath,
    docs,
    docsDescriptor,
    filePath,
    propertyPath,
  };
}

export interface HandlerContext {
  componentPath:NodePath,
  docs:Documentation,
  docsDescriptor:DocumentationDescriptor,
  filePath:string;
  propertyPath:NodePath,
}
