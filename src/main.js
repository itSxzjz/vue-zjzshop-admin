import Vue from 'vue'

import 'normalize.css/normalize.css' // 初始化css样式

import ElementUI from 'element-ui' // 导入element-ui库
import 'element-ui/lib/theme-chalk/index.css' // element-ui样式
import locale from 'element-ui/lib/locale/lang/en' // 语言包

import '@/styles/index.scss' // css公共样式

import App from './App'
import store from './store' // vuex
import router from './router' // 路由

// 将api中的index文件导入，并且将index中的API都暴露给全局
import * as API from '@/api'
import CategorySelector from '@/components/CategorySelector'
import HintButton from '@/components/HintButton'
import '@/plugins/vcharts'

Vue.component('CategorySelector', CategorySelector);
Vue.component('HintButton', HintButton);
// 将API放在vue的原型对象身上
Vue.prototype.$API = API

import '@/icons' // icon 图标
import '@/permission' // 与权限管理相关

// 如果是开发环境就用mock假数据（没啥用，因为有真实的接口）
// if (process.env.NODE_ENV === 'production') {
//     const { mockXHR } = require('../mock')
//     mockXHR()
// }

// 使用导入的ElementUI插件和 locale插件
Vue.use(ElementUI, { locale })
    // 如果想要中文版 element-ui，按如下方式声明
    // Vue.use(ElementUI)

// 关闭生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})