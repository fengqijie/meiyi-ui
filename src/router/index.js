import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import Button from '@/components/button'
import Icon from '@/components/icon'
import Pagination from '@/components/pagination'
import Input from '@/components/input'
import Row from '@/components/row'
import Col from '@/components/col'
import Toast from '@/components/toast'
import Tabs from '@/components/tabs'
import TabsHead from '@/components/tabs-head'
import TabsBody from '@/components/tabs-body'
import TabsItem from '@/components/tabs-item'
import TabsPane from '@/components/tabs-pane'

Vue.use(Router)

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-pagination', Pagination)
Vue.component('m-input', Input)
Vue.component('m-row', Row)
Vue.component('m-col', Col)
Vue.component('m-toast', Toast)
Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-item', TabsItem)
Vue.component('m-tabs-pane', TabsPane)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
