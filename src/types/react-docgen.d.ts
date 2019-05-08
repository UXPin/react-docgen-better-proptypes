import { NodePath } from 'ast-types';
import { ComponentDoc } from 'react-docgen-typescript/lib';
import { ParserOptions } from '@babel/parser';

declare module 'react-docgen' {
  export interface ReactDocgenOptions {
    cwd?: string;
    filename?: string;
    parserOptions?: ParserOptions;
  }

  export declare type Handler = (doc: any, path: string) => void;
  export declare type Resolver = (ast: any, recast: object) => NodePath;

  export declare const defaultHandlers: Handler[];

  export declare function parse(
    source: string,
    resolver?: () => void | undefined,
    handlers?: Handler[] | undefined,
    options?: ReactDocgenOptions | undefined,
  ): ComponentDoc;

  export declare const resolver: any;

  interface ReactDocgenUtils {
    getMemberValuePath: (componentDefinition: NodePath, memberName: string) => NodePath | undefined,
    getPropertyName: (path: NodePath) => string;
    setPropDescription: () => void;
  };

  export declare const utils: ReactDocgenUtils;
}

declare module 'react-docgen/dist/utils/setPropDescription' {
  export default function():void;
}
