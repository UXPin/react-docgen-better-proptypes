import { createHandler, Handler } from './createHandler';
import { AllowedHandlerProps } from './getHandledPropertyPath';

export const importedPropTypesHandler:Handler = createHandler(AllowedHandlerProps.PROP_TYPES);
