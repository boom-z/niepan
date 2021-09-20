import { parse } from './parser';
import { generate } from './template/index';

/**
 * 转换 wxml 字符串 为 vue html 字符串
 * @param wxml wxml 字符串
 * @returns vue html 字符串
 */
const handleWXML = (wxml: string, options: Object): string => {
  return generate(parse(wxml, options));
};

export {
  handleWXML as wxmlToHtml,
  parse as parseWXML,
  generate as generateHTML,
};

export default handleWXML;
