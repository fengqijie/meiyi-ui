import Button from './components/button'
import Icon from './components/icon/icon'
import Pagination from './components/pagination'
import Input from './components/input'
import Row from './components/layout/row'
import Col from './components/layout/col'
import Toast from './components/toast'
import Tabs from './components/tabs/tabs'
import TabsHead from './components/tabs/tabs-head'
import TabsBody from './components/tabs/tabs-body'
import TabsItem from './components/tabs/tabs-item'
import TabsPane from './components/tabs/tabs-pane'
import Popover from './components/popover'
import Collapse from './components/collapse/collapse'
import CollapseItem from './components/collapse/collapse-item'
import Cascader from './components/cascader/cascader'
import Carousel from './components/carousel/carousel'
import CarouselItem from './components/carousel/carousel-item'
import Nav from './components/nav/nav'
import NavItem from './components/nav/nav-item'
import SubNav from './components/nav/sub-nav'
import Pager from './components/pager'
import Table from './components/table'

export default {
    install(Vue) {
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
        Vue.component('m-popover', Popover)
        Vue.component('m-collapse', Collapse)
        Vue.component('m-collapse-item', CollapseItem)
        Vue.component('m-cascader', Cascader)
        Vue.component('m-carousel', Carousel)
        Vue.component('m-carousel-item', CarouselItem)
        Vue.component('m-nav', Nav)
        Vue.component('m-nav-item', NavItem)
        Vue.component('m-sub-nav', SubNav)
        Vue.component('m-pager', Pager)
        Vue.component('m-table', Table)
    }
}
