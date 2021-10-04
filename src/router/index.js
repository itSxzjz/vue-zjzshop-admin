import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
// 这种导入组件方式，只要在页面挂载完毕，就会把所有内容都加载好。不是按需加载（懒加载）
import Layout from '@/layout'
// 创建并暴露出去路由
export const constantRoutes = [{
        path: '/login',
        // import 方式引入，是组件懒加载，自由真正的点击到这个页面，才会发送请求
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        // 重定向到这个地址
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            // 路由别名
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            // meta配置：控制左侧的显示
            meta: { title: '首页', icon: 'el-icon-s-home' }
        }]
    },

    {
        path: '/product',
        component: Layout,
        redirect: 'trademark/list',
        children: [{
                path: 'trademark/list',
                name: 'Trademark',
                component: () =>
                    import ('@/views/product/trademark/list'),
                meta: { title: '品牌管理', icon: 'dashboard' }
            },
            {
                path: 'attr/list',
                name: 'Attr',
                component: () =>
                    import ('@/views/product/attr/list'),
                meta: { title: '属性管理', icon: 'el-icon-postcard' }
            },
            {
                path: 'sku/list',
                name: 'SKU',
                component: () =>
                    import ('@/views/product/sku/list'),
                meta: { title: 'SUK管理', icon: 'el-icon-shopping-cart-2' }
            },
            {
                path: 'spu/list',
                name: 'SPU',
                component: () =>
                    import ('@/views/product/spu/list'),
                meta: { title: 'SPU管理', icon: 'el-icon-shopping-bag-2' }
            }
        ],
        meta: { title: '商品管理', icon: 'el-icon-s-shop' }
    },

    // 404 页面兜底页面 !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router