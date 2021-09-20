import Vue from 'vue';
// import './components/index'
import { wxmlToHtml, parseWXML, generateHTML } from './wxml/index';
import { wxssToCss } from './wxss/index';
// import WxUI from '../static/wxUI'

// export { wxmlToHtml, parseWXML, generateHTML };

const _options = {
  data: true,
  onLoad: true,
  onShow: true,
  onReady: true,
  onHide: true,
  onUnload: true,
  onPullDownRefresh: false,
  onReachBottom: false,
  onShareAppMessage: false,
  onPageScroll: true,
  onResize: true,
  onTabItemTap: false,
  onSaveExitState: false,
};

const Page = (options) => {
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
    Target = new Proxy({}, {
      get(target, propertyKey, receiver) {
        if (propertyKey === 'data') return vue._data
        if (propertyKey === 'setData') return function (data) {
          Object.keys(data).forEach(key => {
            vue[key] = data[key]
          })
        }
        return vue;
      }
    })

    Object.keys(options).forEach((key) => {
      if (_options[key] == null && typeof options[key] === 'function') {
        methods[key] = options[key].bind(Target)
      };
      if (_options[key] === false) console.warn(`未实现 ${key} 事件！`);
    });
  }

  Vue.use(WxUI)

  new Vue({
    el: '#app',
    template: wxmlToHtml(el.innerHTML, {}),
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
        options.onLoad.call(
          Target,
          { error: '浏览器环境未实现参数功能' }
        );
    },
    mounted() {
      typeof options.onShow === 'function' &&
        options.onShow.call(Target);
      typeof options.onReady === 'function' &&
        options.onReady.call(Target);
    },
    beforeRouteLeave(to, from, next) {
      // ...
      typeof options.onHide === 'function' &&
        options.onHide.call(Target);
    },
    beforeDestroy() {
      typeof options.onUnload === 'function' &&
        options.onUnload.call(Target);
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



export default Page;
