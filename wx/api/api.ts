import axios from 'axios';
import { IAPIParam, IMethod, REQUEST_tYPE } from '../typings';
import { paramsToString } from '../utils/tools';

interface IAxiosParams {
  method: IMethod;
  url: string;
  data?: {
    data?: Object;
    updateQuery?: Object;
    query?: Object;
  };
}

const baseUrl: String =
  document.getElementById('wxmodule')?.getAttribute('base_url') + '/db';

/**
 *
 * @param collectionName 集合名称
 * @param _params 参数对象
 * @param _type 操作类型
 * @returns
 */
export function sendRequest(
  collectionName: string,
  _params: IAPIParam,
  _type: REQUEST_tYPE
): void | Promise<any> {
  const json: IAxiosParams = {
    method: _params.method || ('get' as IMethod),
    url:
      baseUrl +
      '/collection/' +
      encodeURIComponent(collectionName) +
      '/' +
      _type +
      '_data/',
  };
  if (_params.data) {
    json.data = {
      data: _params.data,
    };
  }

  if (
    typeof _params.success === 'function' ||
    typeof _params.fail === 'function' ||
    typeof _params.complete === 'function'
  ) {
    axios(json)
      .then((res: { data: any }) => {
        typeof _params.success === 'function' && _params.success(res.data);
      })
      .catch((err: any) => {
        typeof _params.fail === 'function' && _params.fail(err);
      })
      .finally(() => {
        typeof _params.complete === 'function' && _params.complete();
      });
  } else {
    return axios(json).then((res: { data: any }) => res.data);
  }
}

/**
 * 按 id 请求
 * @param collectionName 集合名称
 * @param _params 参数对象
 * @param _id 目标 id
 * @param _type 操作类型
 * @returns
 */
export function sendRequestWidthId(
  collectionName: string,
  _params: IAPIParam,
  _id: string,
  _type: REQUEST_tYPE
): void | Promise<any> {
  const json: IAxiosParams = {
    method: _params.method || ('get' as IMethod),
    url:
      baseUrl +
      '/collection/' +
      encodeURIComponent(collectionName) +
      '/' +
      _type +
      '_data/?data_id=' +
      _id,
  };
  if (_params.data) {
    json.data = {
      updateQuery: _params.data,
    };
  }

  if (
    typeof _params.success === 'function' ||
    typeof _params.fail === 'function' ||
    typeof _params.complete === 'function'
  ) {
    axios(json)
      .then((res: { data: any }) => {
        typeof _params.success === 'function' && _params.success(res.data);
      })
      .catch((err: any) => {
        typeof _params.fail === 'function' && _params.fail(err);
      })
      .finally(() => {
        typeof _params.complete === 'function' && _params.complete();
      });
  } else {
    return axios(json).then((res: { data: any }) => res.data);
  }
}

/**
 *
 * @param collectionName 集合名称
 * @param _params 参数对象
 * @param _query  查询条件
 * @param _type 操作类型
 * @returns
 */
export function sendRequestWidthQuery(
  collectionName: string,
  _params: IAPIParam,
  _query: Object,
  _type: REQUEST_tYPE
): void | Promise<any> {
  const json: IAxiosParams = {
    method: _params.method || ('get' as IMethod),
    url:
      baseUrl +
      '/collection/' +
      encodeURIComponent(collectionName) +
      '/' +
      _type +
      '_data/',
  };
  if (_params.data) {
    json.data = {
      updateQuery: _params.data,
      query: _query,
    };
  } else {
    json.data = {
      query: _query,
    };
  }

  if (
    typeof _params.success === 'function' ||
    typeof _params.fail === 'function' ||
    typeof _params.complete === 'function'
  ) {
    axios(json)
      .then((res: { data: any }) => {
        typeof _params.success === 'function' && _params.success(res.data);
      })
      .catch((err: any) => {
        typeof _params.fail === 'function' && _params.fail(err);
      })
      .finally(() => {
        typeof _params.complete === 'function' && _params.complete();
      });
  } else {
    return axios(json).then((res: { data: any }) => res.data);
  }
}
