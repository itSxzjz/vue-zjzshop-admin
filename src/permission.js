// **********************************与权限相关****************************

import router from './router'
import store from './store'
import { Message } from 'element-ui'
// 导入加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 加载条样式

import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

// 前置守卫
router.beforeEach(async(to, from, next) => {
    // 加载条开启
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    // 把登录过的token值保存给hasToken，下次在登录的时候进行判断，如果有token值，就7天免登录啦
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasGetUserInfo = store.getters.name
            if (hasGetUserInfo) {
                next()
            } else {
                try {
                    // get user info
                    await store.dispatch('user/getInfo')

                    next()
                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // 如果没有token直接送你去login，哪里也去不了
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

// 后置守卫
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})