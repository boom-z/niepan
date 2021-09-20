import { IAttr, IMapType } from './typing';
import { handleWxFor } from './wxfor';

const onRE = /^bind/;
const propRE = /^\{\{([^{}]+)\}\}$/;
const propRE2 = /\{\{([^{}]+)\}\}/g;

const eventMap: IMapType<string> = {
  touchstart: 'mousedown', // 手指触摸动作开始
  touchmove: 'mousemove', //	手指触摸后移动
  // touchcancel: '', // 手指触摸动作被打断，如来电提醒，弹窗
  touchend: 'mouseup', // 手指触摸动作结束
  tap: 'click', // 手指触摸后马上离开
  longpress: 'click', // 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
  longtap: 'click', // 手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
  // transitionend: '', // 会在 WXSS transition 或 wx.createAnimation 动画结束后触发
  // animationstart: '', // 会在一个 WXSS animation 动画开始时触发
  // animationiteration: '', // 会在一个 WXSS animation 一次迭代结束时触发
  // animationend: '', // 会在一个 WXSS animation 动画完成时触发
  // touchforcechange: '', // 在支持 3D Touch 的 iPhone 设备，重按时会触发
};

export const MapEventWXToWeb = (attrs: IAttr[]) => {
  for (let i = 0; i < attrs.length; i++) {
    const e = attrs[i];
    if (!e.name.startsWith('bind')) continue;
    const name = e.name.replace(onRE, '');
    e.name = `@${eventMap[name] ? eventMap[name] : name}`;
  }
};

export const MapPropWXToWeb = (
  attrs: {
    name: string;
    value: string;
    dynamic?: any;
  }[]
) => {
  let isFor = false;
  for (let i = 0; i < attrs.length; i++) {
    const e = attrs[i];
    const value = e.value.trim();
    if (e.name === 'wx:for') {
      isFor = true;
    } else if (e.name === 'wx:key') {
      attrs.splice(i, 1, {
        ...e,
        name: ':key',
        value: propRE.test(e.value) ? RegExp.$1 : e.value,
      });
    } else if (propRE.test(value)) {
      attrs.splice(i, 1, {
        ...e,
        name: ':' + e.name,
        value: RegExp.$1,
      });
    } else if (propRE2.test(value)) {
      const _val = value.replace(propRE2, (_, b) => {
        return `\$\{${b}\}`;
      });
      attrs.splice(i, 1, {
        ...e,
        name: ':' + e.name,
        value: '`' + _val + '`',
      });
    }
  }
  if (isFor) {
    handleWxFor(attrs);
  }
};
