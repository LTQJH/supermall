import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入mockjs
require('./mock.js')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
