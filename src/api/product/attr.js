import request from '@/utils/request';

export default {

    // GET /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
    // 根据当前三级分类id获取对应的属性列表
    getAttrList(category1Id, category2Id, category3Id) {
        return request.get(`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`)
    },


    // DELETE /admin/product/deleteAttr/{attrId}
    deleteAttr(attrId) {
        return request.delete(`/admin/product/deleteAttr/${attrId}`)
    },

    // GET /admin/product/getAttrValueList/{attrId}   暂时用不上
    // 获取属性值的列表
    // getAttrValueList(attrId) {
    //     return request.get(`/admin/product/getAttrValueList/${attrId}`)
    // },

    // POST /admin/product/saveAttrInfo
    // 第二个参数，作为请求体传回去
    addOrUpdata(attrInfo) {
        return request.post(`/admin/product/saveAttrInfo`, attrInfo)
    },
}