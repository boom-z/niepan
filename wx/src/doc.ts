import { sendRequestWidthId } from '../api/api';
import {
  IAPIParam,
  IMethod,
  IRequestParam,
  IRequestParamWithData,
  REQUEST_tYPE,
} from '../typings';
import { Collection } from './collection';

export class Doc {
  collection: Collection;
  _id: string;
  constructor(id: string, collection: Collection) {
    this._id = id;
    this.collection = collection;
  }

  get(args: IRequestParam): void | Promise<any> {
    const _options: IAPIParam = {
      ...args,
      method: 'post' as IMethod,
    };
    return sendRequestWidthId(
      this.collection.collectionName,
      _options,
      this._id,
      REQUEST_tYPE.get
    );
  }

  remove(_args: IRequestParam): void | Promise<any> {
    const _options: IAPIParam = {
      ..._args,
      method: 'post' as IMethod,
    };
    return sendRequestWidthId(
      this.collection.collectionName,
      _options,
      this._id,
      REQUEST_tYPE.delete
    );
  }

  // 更新一个或多个记录
  update(_args: IRequestParamWithData) {
    const _options: IAPIParam = {
      ..._args,
      method: 'post' as IMethod,
    };
    return sendRequestWidthId(
      this.collection.collectionName,
      _options,
      this._id,
      REQUEST_tYPE.update
    );
  }

  // 更新一个记录
  set(_args: IRequestParamWithData) {
    const _options: IAPIParam = {
      ..._args,
      method: 'post' as IMethod,
    };
    return sendRequestWidthId(
      this.collection.collectionName,
      _options,
      this._id,
      REQUEST_tYPE.update
    );
  }

  field() {}
  toJSON() {}
}
