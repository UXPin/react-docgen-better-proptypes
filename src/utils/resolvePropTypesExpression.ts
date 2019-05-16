import { ASTNode, NodePath, visit } from 'ast-types';
import { Declaration } from 'ast-types/gen/nodes';
import { MemberDescriptor, PropTypeValue, utils } from 'react-docgen';
import { HandlerContext } from '../handlers/getHandlerContext';
import { getSourceSync } from './fs/getSourceSync';
import { findImportDeclaration } from './Nodes/imports/findImportDeclaration';
import { getImportDeclarationFilePath } from './Nodes/imports/getImportDeclarationFilePath';
import { Node } from './parsePath';

// tslint:disable-next-line:no-var-requires
const babelParser:() => { parse:(soruce:string) => ASTNode } = require('react-docgen/dist/babelParser').default;

export function resolvePropTypesExpression(path:NodePath<Node>, context:HandlerContext):NodePath<Node> {
  const propValue:PropTypeValue = utils.getPropType(path);

  if (propValue.name === 'enum') {
    return resolveEnumPropTypeValue(propValue, path, context);
  }

  return path;
}

function resolveEnumPropTypeValue(propType:PropTypeValue, path:NodePath<Node>, context:HandlerContext):NodePath<Node> {
  const bindings:BindingsMap = path.scope.getBindings();
  const valueBindings:Array<NodePath<Node>> | undefined = bindings[propType.value];
  const valueBinding:NodePath<Node> | undefined = valueBindings ? valueBindings[0] : undefined;

  if (!valueBindings || !valueBinding) {
    return path;
  }

  const importDeclaration:Node | undefined = findImportDeclaration(valueBinding, context);
  if (!importDeclaration) {
    return path;
  }

  const filePath:string | undefined = getImportDeclarationFilePath(importDeclaration, context);
  if (!filePath) {
    return path;
  }

  const result:ASTNode = babelParser().parse(getSourceSync(filePath));
  const declaration:NodePath<Declaration> | undefined = findVariableDeclaration(result, valueBinding);
  if (!declaration) {
    return path;
  }

  const members:MemberDescriptor[] = utils.getMembers(path);
  const oneOfMember:MemberDescriptor | undefined = members.find(({ path: memberPath }:MemberDescriptor):boolean => {
    return memberPath.node.name === 'oneOf';
  });

  if (!oneOfMember || !oneOfMember.argumentsPath) {
    return path;
  }

  // Replace NodePath with variable identifier to actual value of the variable
  oneOfMember.argumentsPath.get(0).replace(declaration.get('declarations').get(0).node);

  return path;
}

function findVariableDeclaration(path:ASTNode, binding:NodePath<Node>):NodePath<Declaration> | undefined {
  const variableName:string = utils.getNameOrValue(binding);
  let resultPath:NodePath<Declaration> | undefined;

  visit(path, {
    visitVariableDeclaration(variablePath:NodePath<Declaration>):void | boolean {
      // Return false to stop traversing
      if (resultPath) {
        return false;
      }

      const declarations:Node[] = variablePath.get('declarations').value;
      const hasDeclaration:boolean = declarations.some((declaration:Node):boolean => {
        return !!declaration.id && declaration.id.name === variableName;
      });

      if (hasDeclaration) {
        resultPath = variablePath;
      }

      // tslint:disable-next-line:no-invalid-this
      this.traverse(variablePath);

      return;
    },
  });

  return resultPath;
}

interface BindingsMap {
  [key:string]:Array<NodePath<Node>>;
}
