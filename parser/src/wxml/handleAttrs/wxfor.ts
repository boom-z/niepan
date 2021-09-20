import { propRE } from './const';
import { IAttr, IMapType } from './typing';

const ForList = 'wx:for';
const ForItem = 'wx:for-item';
const ForIndex = 'wx:for-index';

const forMap: IMapType<true> = {
  [ForList]: true,
  [ForItem]: true,
  [ForIndex]: true,
};

export const handleWxFor = (attrs: IAttr[]) => {
  const forMsg: IMapType<string> = {
    [ForList]: '',
    [ForItem]: 'item',
    [ForIndex]: '',
  };
  for (let i = attrs.length - 1; i >= 0; i--) {
    const name = attrs[i].name;
    if (forMap[name]) {
      forMsg[name] =
        name === ForList ? attrs[i].value.match(propRE)[1] : attrs[i].value;
      removeItem(attrs, i);
    }
  }
  const attr = {
    name: 'v-for',
    value: '',
  };
  if (forMsg[ForIndex] === '') {
    attr.value = `${forMsg[ForItem]} in ${forMsg[ForList]}`;
  } else {
    attr.value = `(${forMsg[ForItem]}, ${forMsg[ForIndex]}) in ${forMsg[ForList]}`;
  }
  attrs.push(attr);
};

const removeItem = (arr: any[], index: number) => {
  arr.splice(index, 1);
};
