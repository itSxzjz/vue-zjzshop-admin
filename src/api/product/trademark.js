import request from '@/utils/request';

export default {
    // DELETE  /admin/product/baseTrademark/remove/${ id }
    // 根具品牌id 删除对应的品牌
    deleteTradeMark() {
        return request.delete(`/admin/product/baseTrademark/remove/${id}`)
    },

    // POST  /admin/product/baseTrademark/save
    // 新增品牌
    // {
    //     "id": 0,
    //     "logoUrl": "string",
    //     "tmName": "string"
    //   }

    // PUT  /admin/product/baseTrademark/update
    // 修改品牌
    // {
    //     "id": 0,                 品牌id（id是后端生成的，也就是说添加商品不需要传入id,修改的时候才需要id）
    //     "logoUrl": "string",     品牌logo链接
    //     "tmName": "string"       品牌名称
    //   }
    addOrUpdate(trademark) {
        if (trademark.id) {
            // 如果有id，说明是在修改品牌内容
            // 请求的时候，传参一定要传第二个参数（代表需要传过去的请求体参数）
            return request.put(`/admin/product/baseTrademark/update`, trademark)
        } else {
            // 没有id属性，说明是后端传过来的数据，不对id进行操作,在新增品牌
            return request.post(`/admin/product/baseTrademark/save`, trademark)
        }
    },

    // GET  /admin/product/baseTrademark/{ page }/{limit}
    // 根据当前页数page和当前页面显示条数limit，获取对应的品牌列表
    getTradeMarkList(page, limit) {
        return request.get(`/admin/product/baseTrademark/${page}/${limit}`)
    },

    // GET /admin/product/baseTrademark/getTrademarkList
    // 获取平台中所有的品牌
    getTradeMarks() {
        return request.get(`/admin/product/baseTrademark/getTrademarkList`)
    }
}

/*
    一共有几种模块化语法：4种
        1.commonjs  仅用于node
        2.AMD 运用于浏览器
        2.CMD 运用于浏览器
        4.ES6 moduless
    es6模块化语法关键字： 
        1.import
        2.export
        3.default
    es6暴露方式：
        1.默认暴露  (问题，暴露出去的是什么东西？) 答案：对象
            export default 100;
            真正暴露出去的是 对象
                {
                    default:100
                }
            引入方式
            完整写法： import {default as a} from './path'
            结构出来的简写：import a from './path'

        2.分别暴露  (问题，暴露出去的是什么东西？) 答案：对象
            export const a = 100;
            export const b = 100;

            引入方式
            完整写法： import * as obj from './path'
            结构出来的简写：import a from './path'

        3.统一暴露  (问题，暴露出去的是什么东西？) 
            export default {
                a:100,
                b:100
            }
*/