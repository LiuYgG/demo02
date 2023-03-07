import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// CSS
import './assets/css/gloabal.css'
import './assets/css/index.css'
// 引入mockjs文件并使用产生的数据
require('./mock/index.js')

// 引入 axios 组件
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
