export function paramsToString(params: Object): string {
  var _res: string = ''
  for(let key of Object.keys(params)) {
    _res = _res + '&' + key + '=' + params[key]
  }
  return _res.slice(1)
}
