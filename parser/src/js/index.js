/**
 * @description 处理 js 代码
 * @requires htmlTemplate wxml 模板字符串
 * @requires wxUI 自定义vue组件库
 * @returns Page 函数
 * 由于无法处理从模块外部传入的 htmlTemplate 等参数
 * 这里暂时使用 js 文件
 */
import { _options } from './const';
import Vue from 'vue';
import { wxmlToHtml } from '../wxml/index';
import { wxssToCss } from '../wxss/index';

export const Page = (options) => {
  if (options == null) console.error('Page 参数不能为空！');

  const el = document.getElementById('app');

  // el.innerHTML = wxmlToHtml(el.innerHTML, {})

  const styleEl = document.querySelector('#style-editor');

  styleEl.innerHTML = wxssToCss(styleEl.innerHTML);

  // 事件 this 对象
  let Target = null;
  const methods = {};

  // 通过 proxy 模拟事件的 this 对象
  function setTarget(vue) {
    Target = new Proxy(
      {},
      {
        get(target, propertyKey, receiver) {
          if (propertyKey === 'data') return vue._data;
          if (propertyKey === 'setData')
            return function (data) {
              Object.keys(data).forEach((key) => {
                vue[key] = data[key];
              });
            };
          return vue[propertyKey];
        },
      }
    );

    Object.keys(options).forEach((key) => {
      if (_options[key] == null && typeof options[key] === 'function') {
        methods[key] = options[key].bind(Target);
      }
      if (_options[key] === false) console.warn(`未实现 ${key} 事件！`);
    });
  }

  Vue.use(WxUI);

  new Vue({
    el: '#app',
    template: wxmlToHtml(`<template>${htmlTemplate}</template>`, {}),
    data() {
      return options.data || {};
    },
    beforeCreate() {
      // 初始化 Target
      if (!Target) setTarget(this);
    },
    created() {
      // `this` 指向 vm 实例
      typeof options.onLoad === 'function' &&
        options.onLoad.call(Target, { error: '浏览器环境未实现参数功能' });
    },
    mounted() {
      typeof options.onShow === 'function' && options.onShow.call(Target);
      typeof options.onReady === 'function' && options.onReady.call(Target);
    },
    beforeRouteLeave(to, from, next) {
      // ...
      typeof options.onHide === 'function' && options.onHide.call(Target);
    },
    beforeDestroy() {
      typeof options.onUnload === 'function' && options.onUnload.call(Target);
    },

    methods: methods,
  });

  typeof options.onResize === 'function' &&
    window.addEventListener('resize', () => {
      options.onResize.call(Target);
    });

  typeof options.onPageScroll === 'function' &&
    el.addEventListener('scroll', () => {
      options.onPageScroll.call(Target);
    });
};
