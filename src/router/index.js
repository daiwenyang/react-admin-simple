import Login from '@/views/login/index'
import Index from '@/views/index/index'
import Test from '@/views/test/index'
import NotFound from '@/components/notFound'
import Stores from '@/components/stores'

export const main = [
    { path: '/login', name: '登录', component: Login },
    { path: '/', exact: true,  name: '首页'},
    { path: '/index', exact: false,  name: '首页', component: Index },
    { path: '/404', exact: true,  name: '404', component: NotFound },
]

export const menus = [
    { path: '/index/stores', exact: false,  name: 'tab1', component: Stores },
    { path: '/index/analysis', exact: false,  name: 'tab2', component: Test },
    { path: '/index/customer', exact: false,  name: 'tab3', component: Test },
    { path: '/index/employee', exact: false,  name: 'tab4', component: Test },
    { path: '/index/notice', exact: false,  name: 'tab5', component: Test },
]

export const routerConfig =  {
    main, menus
}