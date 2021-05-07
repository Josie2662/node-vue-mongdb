import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入element-ui
import elementui from './plugin/element'
// 引入axios实例
import _http from './plugin/axios'

//挂载elementui
Vue.use(elementui)
// 将axios实例挂载到vue原型上，这样就可以在任意页面通过this引用axios实例
Vue.prototype.$_http = _http


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
