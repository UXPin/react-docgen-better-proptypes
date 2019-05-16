import * as astTypes from 'ast-types';

declare module 'ast-types' {
  export declare function visit(path:astTypes.ASTNode, visitor:astTypes.Visitor):void;
}
