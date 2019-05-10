import { createHandler } from './createHandler';
import { AllowedHandlerProps } from './getHandledPropertyPath';
import { Handler } from './Handler';

export const importedPropTypesHandler:Handler = createHandler(AllowedHandlerProps.PROP_TYPES);
