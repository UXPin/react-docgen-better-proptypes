import { NodePath, ASTNode } from 'ast-types';
import { ComponentDoc } from 'react-docgen-typescript/lib';
import { ParserOptions } from '@babel/parser';

declare module 'react-docgen' {
  export interface ReactDocgenOptions {
    cwd?:string;
    filename?:string;
    parserOptions?:ParserOptions;
  }

  export interface Documentation {
    getChildContextDescriptor:DocumentationDescriptor;
    getContextDescriptor:DocumentationDescriptor;
    getPropDescriptor:DocumentationDescriptor;
  };

  export type DocumentationDescriptor = (name:string) => PropItem;

  export declare type Handler = (doc:any, path:string) => void;
  export declare type Resolver = (ast:any, recast:object) => NodePath;

  export declare const defaultHandlers:Handler[];

  export declare function parse(
    source:string,
    resolver?:Resolver | undefined,
    handlers?:Handler[] | undefined,
    options?:ReactDocgenOptions | undefined,
  ):ComponentDoc;

  export declare const resolver:any;

  interface ReactDocgenUtils {
    getNameOrValue:(path:NodePath) => string;
    getMembers:(path:NodePath, includeRoot:boolean = false) => MemberDescriptor[],
    getMemberExpressionRoot:(path:NodePath) => NodePath | undefined,
    getMemberValuePath:(componentDefinition:NodePath, memberName:string) => NodePath | undefined,
    getPropertyName:(path:NodePath) => string;
    getPropType:(path:NodePath) => PropTypeValue;
    isReactModuleName:(name:string) => boolean;
    resolveToModule:(path:NodePath) => string | undefined;
    setPropDescription:() => void;
  };

  export interface MemberDescriptor {
    argumentsPath?:NodePath;
    computed:boolean;
    path:NodePath;
  }

  export interface PropTypeValue {
    computed?:boolean;
    name:string;
    value:any;
  }

  export declare const utils:ReactDocgenUtils;

  interface StringIndexedObject<T> {
    [key:string]:T;
  }

  export interface ComponentDoc {
    composes?:string[];
    displayName:string;
    description:string;
    props:Props;
    methods:Method[];
  }

  export interface Props extends StringIndexedObject<PropItem> {
  }

  export interface PropItem {
    name?:string;
    required:boolean;
    type:PropItemType;
    description:string;
    defaultValue?:any;
    parent?:ParentType;
  }

  export interface Method {
    name:string;
    docblock:string;
    modifiers:string[];
    params:Array<{
      name:string;
      description?:string | null;
    }>;
    returns?:{
      description?:string | null;
      type?:string;
    } | null;
    description:string;
  }

  export interface PropItemType {
    computed?:boolean;
    name:string;
    value?:any;
  }

  export interface ParentType {
    name:string;
    fileName:string;
  }
}

declare module 'react-docgen/dist/utils/setPropDescription' {
  export default function():void;
}

declare module 'react-docgen/dist/utils/getMemberExpressionValuePath' {
  export default function(path:NodePath, name:string):NodePath | undefined;
}
