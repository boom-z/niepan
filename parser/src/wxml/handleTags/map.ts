import { IMapType } from '../handleAttrs/typing';

const elementMap: IMapType<string> = {
  view: 'div',
};

/**
 * 映射 小程序标签 为 web标签
 * @param tag
 * @returns
 */
export const mapElement = (tag: string): string => {
  return elementMap[tag] || 'wx-' + tag;
};
