// 导入axios
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建一个axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000 // 请求时长
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么

        if (store.getters.token) {
            // 让每个请求携带token
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        // 在发送请求错误做些什么
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    // response 响应报文对象，包括响应头，响应体
    response => {
        const res = response.data

        // 请求判断的判断条件
        // 走过的坑一：如果该处的&&写成||，会出现跳转的错误，并出现提示窗口，提示失败信息为成功
        if (res.code !== 20000 && res.code !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            // 返回响应体对象（也就是说，后端真正想给我们的数据，已经自动过滤掉响应头等内容）
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service