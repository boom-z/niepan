import { IAttr } from './handleAttrs/typing';

export interface IAst {
  type: IElementType;
  attrs?: IAttr[];
  attrsList?: IAttr[];
  attrsMap?: Object;
  children?: IAst[];
  hasBindings?: boolean;
  parent?: IAst;
  plain?: boolean;
  rawAttrsMap?: Object;
  tag?: string;
  text?: string;
}

export enum IElementType {
  tag = 1,
  expression = 2,
  text = 3,
}
