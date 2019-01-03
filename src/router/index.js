import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import button from '@/components/button'
import icon from '@/components/icon'
import pagination from '@/components/pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/button',
      name: 'button',
      component: button
    }, {
      path: '/icon',
      name: 'icon',
      component: icon
    }, {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    }
  ]
})
