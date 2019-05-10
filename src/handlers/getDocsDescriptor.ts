import { Documentation, DocumentationDescriptor } from 'react-docgen';
import { AllowedHandlerProps } from './getHandledPropertyPath';

const PROP_NAME_TO_DOCS_METHOD_MAP:{
  [key in AllowedHandlerProps]:keyof Documentation;
} = {
  [AllowedHandlerProps.CHILD_CONTEXT_TYPES]: 'getChildContextDescriptor',
  [AllowedHandlerProps.CONTEXT_TYPES]: 'getContextDescriptor',
  [AllowedHandlerProps.PROP_TYPES]: 'getPropDescriptor',
};

export function getDocsDescriptor(docs:Documentation, propName:AllowedHandlerProps):DocumentationDescriptor {
  switch (propName) {
    case AllowedHandlerProps.CHILD_CONTEXT_TYPES:
    case AllowedHandlerProps.CONTEXT_TYPES:
    case AllowedHandlerProps.PROP_TYPES: {
      const method:keyof Documentation = PROP_NAME_TO_DOCS_METHOD_MAP[propName];

      return docs[method].bind(docs);
    }

    default:
      throw new Error(`Can not determine documentation descriptor for ${propName}`);
  }
}
