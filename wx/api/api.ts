import axios, { Method, AxiosPromise } from 'axios'
import { IAPIParam, REQUEST_tYPE } from '../typings'
import { paramsToString } from '../utils/tools'

interface IAxiosParams {
  method: Method,
  url: string,
  data?: {
    data?: Object,
    updateQuery?: Object,
    query?: Object
  }
}

const baseUrl: String = document.getElementById('wxmodule')?.getAttribute('base_url') + '/db'

export function sendRequest(collectionName: string, _params: IAPIParam, _type: REQUEST_tYPE): void | AxiosPromise<any> {
  const json: IAxiosParams = {
    method: _params.method || 'get',
    url: baseUrl + '/collection/' + encodeURIComponent(collectionName) + '/' + REQUEST_tYPE[_type]  + '_data/'
  }
  if(_params.data) {
    json.data = {
      data:  _params.data
    }
  }

  if(typeof _params.success === 'function' || typeof _params.fail === 'function' || typeof _params.complete === 'function') {
    axios(json).then(res => {
      typeof _params.success === 'function' && _params.success(res.data)
    }).catch(err => {
      typeof _params.fail === 'function' && _params.fail(err)
    }).finally(() => {
      typeof _params.complete === 'function' && _params.complete()
    })
  } else {
    return axios(json).then(res => res.data)
  }
}

export function sendRequestWidthId(collectionName: string, _params: IAPIParam, _id: string, _type: REQUEST_tYPE): void | AxiosPromise<any> {
  const json: IAxiosParams = {
    method: _params.method || 'get',
    url: baseUrl + '/collection/' + encodeURIComponent(collectionName) + '/' + REQUEST_tYPE[_type]  + '_data/?data_id=' + _id
  }
  if(_params.data) {
    json.data = {
      updateQuery: _params.data
    }
  }

  if(typeof _params.success === 'function' || typeof _params.fail === 'function' || typeof _params.complete === 'function') {
    axios(json).then(res => {
      typeof _params.success === 'function' && _params.success(res.data)
    }).catch(err => {
      typeof _params.fail === 'function' && _params.fail(err)
    }).finally(() => {
      typeof _params.complete === 'function' && _params.complete()
    })
  } else {
    return axios(json).then(res => res.data)
  }
}

export function sendRequestWidthQuery(collectionName: string, _params: IAPIParam, _query: Object, _type: REQUEST_tYPE): void | AxiosPromise<any> {
  const json: IAxiosParams = {
    method: _params.method || 'get',
    url: baseUrl +  '/collection/' + encodeURIComponent(collectionName) + '/' + REQUEST_tYPE[_type]  + '_data/'
  }
  if(_params.data) {
    json.data = {
      updateQuery: _params.data,
      query: _query
    }
  } else {
    json.data = {
      query: _query
    }
  }

  if(typeof _params.success === 'function' || typeof _params.fail === 'function' || typeof _params.complete === 'function') {
    axios(json).then(res => {
      typeof _params.success === 'function' && _params.success(res.data)
    }).catch(err => {
      typeof _params.fail === 'function' && _params.fail(err)
    }).finally(() => {
      typeof _params.complete === 'function' && _params.complete()
    })
  } else {
    return axios(json).then(res => res.data)
  }
}