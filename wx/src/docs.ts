import { sendRequestWidthQuery } from '../api/api';
import { IAPIParam, IMethod, IRequestParam, REQUEST_tYPE } from '../typings';

export class Docs {
  collectionName: string;
  watch: () => void;
  _data: Object; // where 查询条件

  constructor(collectionName: string, _data: Object) {
    this.collectionName = collectionName;
    this.watch = function (): void {};
    this._data = _data;
  }

  count(_args: IRequestParam) {
    const _options: IAPIParam = {
      method: 'post' as IMethod,
      ..._args,
    };
    return sendRequestWidthQuery(
      this.collectionName,
      _options,
      this._data,
      REQUEST_tYPE.count
    );
  }

  field() {}

  get(_args: IRequestParam) {
    const _options: IAPIParam = {
      method: 'post' as IMethod,
      ..._args,
    };
    return sendRequestWidthQuery(
      this.collectionName,
      _options,
      this._data,
      REQUEST_tYPE.get
    );
  }

  limit() {}
  orderBy() {}

  remove(_args: IRequestParam) {
    const _options: IAPIParam = {
      method: 'post' as IMethod,
      ..._args,
    };
    return sendRequestWidthQuery(
      this.collectionName,
      _options,
      this._data,
      REQUEST_tYPE.delete
    );
  }

  skip() {}
  toJSON() {}

  update(_args: IRequestParam) {
    const _options: IAPIParam = {
      method: 'post' as IMethod,
      ..._args,
    };
    return sendRequestWidthQuery(
      this.collectionName,
      _options,
      this._data,
      REQUEST_tYPE.update
    );
  }

  where() {}
}
