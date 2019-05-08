import { AllowedHandlerProps, createHandler } from './createHandler';
import { Handler } from './Handler';

export const importedPropTypesHandler:Handler = createHandler(AllowedHandlerProps.PROP_TYPES);
