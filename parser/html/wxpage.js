

// const Page = (function () {
//   const _options = {
//     data: true,
//     onLoad: true,
//     onShow: true,
//     onReady: true,
//     onHide: true,
//     onUnload: true,
//     onPullDownRefresh: false,
//     onReachBottom: false,
//     onShareAppMessage: false,
//     onPageScroll: true,
//     onResize: true,
//     onTabItemTap: false,
//     onSaveExitState: false
//   }

//   return function (options) {
//     if (options == null) console.error('Page 参数不能为空！')
//     const methods = {}
//     Object.keys(options).forEach(key => {
//       if (_options[key] == null) methods[key] = options[key]
//       if (_options[key] === false) console.warn(`未实现 ${key} 事件！`)
//     })

//     const el = document.getElementById('app')

//     const styleEl = document.querySelector('#style-editor')

//     styleEl.innerHTML = Parser.wxssToCss(styleEl.innerHTML)

//     Vue.use(wxUI)

//     const wxapp = new Vue({
//       el: '#app',
//       template: Parser.wxmlToHtml(el.innerHTML, {}),
//       data() {
//         return options.data || {}
//       },
//       created() {
//         // `this` 指向 vm 实例
//         options.onLoad.call({ data: this._data }, { error: '浏览器环境未实现参数功能' })
//       },
//       mounted() {
//         options.onShow.call({ data: this._data })
//         options.onReady.call({ data: this._data })
//       },
//       beforeRouteLeave(to, from, next) {
//         // ...
//         options.onReady.onHide({ data: this._data })
//       },
//       beforeDestroy() {
//         options.onReady.onUnload({ data: this._data })
//       },

//       methods: methods
//     })

//     window.addEventListener('resize', () => {
//       options.onResize.call({ data: wxapp._data })
//     })

//     el.addEventListener('scroll', () => {
//       options.onResize.call({ data: wxapp._data })
//     })
//   }
// })()

// // Create a class for the element
// class WxView extends HTMLElement {
//   constructor() {
//     // Always call super first in constructor
//     super();

//     // Create a shadow root
//     var shadow = this.attachShadow({ mode: 'open' });
//     console.log(this.children, 9090)

//     // Create spans
//     var wrapper = document.createElement('span');
//     wrapper.setAttribute('class', 'wrapper');
//     var icon = document.createElement('span');
//     icon.setAttribute('class', 'icon');
//     icon.setAttribute('tabindex', 0);
//     var info = document.createElement('span');
//     info.setAttribute('class', 'info');

//     // Take attribute content and put it inside the info span
//     var text = this.getAttribute('text');
//     info.textContent = text;


//     // Create some CSS to apply to the shadow dom
//     var style = document.createElement('style');

//     style.textContent = '.wrapper {' +
//       'position: relative;' +
//       '}' +

//       '.info {' +
//       'font-size: 0.8rem;' +
//       'width: 200px;' +
//       'display: inline-block;' +
//       'border: 1px solid black;' +
//       'padding: 10px;' +
//       'background: white;' +
//       'border-radius: 10px;' +
//       'opacity: 0;' +
//       'transition: 0.6s all;' +
//       'position: absolute;' +
//       'bottom: 20px;' +
//       'left: 10px;' +
//       'z-index: 3;' +
//       '}' +

//       'img {' +
//       'width: 1.2rem' +
//       '}' +

//       '.icon:hover + .info, .icon:focus + .info {' +
//       'opacity: 1;' +
//       '}';

//     // attach the created elements to the shadow dom

//     // shadow.appendChild(style);
//     // shadow.appendChild(wrapper);
//   }
// }

// // Define the new element
// customElements.define('wx-view', WxView);
