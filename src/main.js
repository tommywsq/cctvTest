import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import Router from 'vue-router'

Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

var vue = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export default vue