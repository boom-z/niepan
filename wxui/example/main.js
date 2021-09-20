import Vue from 'vue'
import App from './App.vue'
import wxUI from '../packages/index'

Vue.config.productionTip = false
console.log(wxUI.install)
Vue.use(wxUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
