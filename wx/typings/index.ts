import { Collection } from "../src/collection";
import { Doc } from "../src/doc";
import { Method } from 'axios'

export interface IDatabase {
  collection: (collectionName: string) => ICollection;
  RegExp: () => void;
  config: Object;
  serverDate: () => void;
  toJSON: () => void
}

export interface ICollection {
  collectionName: string;
  watch: () => void;
  add: (args: IRequestParamWithData) => void;
  doc: (id: string) => Doc;
  aggregate: () => void;
  where: (args: Object) => void
}

export interface IDoc {
  collection: Collection;
  _id: string;
  get: (args: IRequestParam) => void | Promise<any>
}

export interface IRequestParam {
  success?: (data: any) => Promise<any>;
  fail?: (reason: any) => Promise<any>;
  complete?: () => Promise<any>
}

export interface IRequestParamWithData extends IRequestParam {
  data?: Object
}

export interface IAPIParam extends IRequestParamWithData {
  method?: Method;
}

export enum REQUEST_tYPE {
  get,
  add,
  delete,
  update
}