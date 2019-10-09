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
    { path: '/index/stores', exact: false,  name: '商超系统管理', component: Stores },
    { path: '/index/analysis', exact: false,  name: '数据分析', component: Test },
    { path: '/index/customer', exact: false,  name: '客户管理', component: Test },
    { path: '/index/employee', exact: false,  name: '员工管理', component: Test },
    { path: '/index/notice', exact: false,  name: '公告系统', component: Test },
]

export const routerConfig =  {
    main, menus
}