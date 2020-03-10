import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import homePage from './components/homePage'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'homePage', component: homePage, meta: 'visitor' },
  ]
})
