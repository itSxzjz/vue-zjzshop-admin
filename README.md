# 商品后台管理系统
## 二次开发项目
## 项目描述
杂货铺后台管理项目，是一款商品信息类的项目，主要包含登录功能，商品属性管理，商品列表页管理，商品spu模块，商品sku等模块。
## 技术点
1. 基于vue-admin-template模板二次开发
2. element-ui开发
3. 前后端分离的项目
4. scss
5. 通过表单验证，进行一个小优化，防止恶意的攻击服务器
6. 弹窗组件分装
7. echarts

## 用到elementUI中的那些组件
1. 按钮组件 el-button
2. 表格组件 el-table ,显示表格中的每一列的组件 el-table-column
3. 标签组件 el-tag
4. 分页器组件 el-pagination
5. 对话框组件 el-dialog
6. 表单组件 el-form ， 显示表单中的每一项的组件 el-form-item, 下拉选择组件 el-select ，下拉框中显示每一项组件的组件 el-option
7. 上传文件的组件 el-upload
8. 卡片组件 el-card
9. 文字提示组件 tooltip 
10. 气泡确认框 el-popconfirm
11. 加载 loading 
12. 走马灯（轮播图） el-carousel

## api
1. message 消息提示弹窗API
2. 

## SEO优化，能够让更多的人发现网页。但是，后台管理项目，最好不要SEO优化。，vue后台优化使用的是next.js

# src
- aip : 与数据请求相关 
        1. product 在里面存放接口
        2. user.js : 与用户登录相关
        3. index.js 里面统一放了所有的API并且都暴露出去了，在main中导入index文件就行
- assets : 静态资源
- components : 小组件聚集地,公共的组件，
        1. HintButton 封装的提示框组件（因为好多页面要用，所以单独分装成一个组件，提高代码的复用）
- icons :  图标
        1. svg : 存放图片，矢量图，放大不失真
- layout(重点) : （等价于home，于login页面同为一级路由）
- router: 路由相关
- store : 其实就是熟悉的vuex
- styles: 公共样式
- utils : 工具函数
- views : 页面文件
        - product 与产品相关
                - attr 属性管理页面
                - sku
                - spu
                - trademark 商品列表页
- main.js: 入口文件
- permission.js 权限。里面关键的代码是配置了**前置守卫**
