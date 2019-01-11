import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import button from '@/components/button'
import icon from '@/components/icon'
import pagination from '@/components/pagination'
import Input from '@/components/input'
import Row from '@/components/row'
import Col from '@/components/col'

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
    }, {
      path: '/input',
      name: 'Input',
      component: Input
    }, {
      path: '/row',
      name: 'Row',
      component: Row
    }, {
      path: '/col',
      name: 'Col',
      component: Col
    }
  ]
})
