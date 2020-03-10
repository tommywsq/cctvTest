import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'amfe-flexible'
// import VueBus from 'vue-bus'
import Router from 'vue-router'
// import './permission'

Vue.config.productionTip = false
// Vue.use(VueBus)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

var vue = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export default vue