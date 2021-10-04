// 导入axios请求配置
import request from '@/utils/request'

// 暴露出登录的一个方法请求
export function login(data) {
    // POST /admin/acl/index/login
    return request({
        url: '/admin/acl/index/login',
        method: 'post',
        data: data
    })
}

// 获取信息的请求
export function getInfo(token) {
    // GET /admin/acl/index/info?token=eeeeaaabbc123
    // 此处的params其实是用来接收query传参用的，会自动将对象的属性名作为key,属性值作为value
    return request({
        url: '/admin/acl/index/info',
        method: 'get',
        params: { token }
    })
}

// 退出的方法请求
export function logout() {
    // POST /admin/acl/index/logout
    return request({
        url: '/admin/acl/index/logout',
        method: 'post'
    })
}