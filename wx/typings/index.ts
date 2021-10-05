import { Collection } from '../src/collection';
import { Doc } from '../src/doc';

export enum IMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

export interface IDatabase {
  collection: (collectionName: string) => ICollection;
  RegExp: () => void;
  config: Object;
  serverDate: () => void;
  toJSON: () => void;
}

export interface ICollection {
  collectionName: string;
  watch: () => void;
  add: (args: IRequestParamWithData) => void;
  doc: (id: string) => Doc;
  aggregate: () => void;
  where: (args: Object) => void;
}

export interface IDoc {
  collection: Collection;
  _id: string;
  get: (args: IRequestParam) => void | Promise<any>;
}

export interface IRequestParam {
  success?: (data: any) => Promise<any>;
  fail?: (reason: any) => Promise<any>;
  complete?: () => Promise<any>;
}

export interface IRequestParamWithData extends IRequestParam {
  data?: Object;
}

export interface IAPIParam extends IRequestParamWithData {
  method?: IMethod;
}

export enum REQUEST_tYPE {
  get = 'get',
  add = 'add',
  delete = 'delete',
  update = 'update',
  count = 'count', // 计数
}
