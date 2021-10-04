<template>
    <div>
        <el-card>
            <el-table border stripe :data="skuList" v-loading='loading'>
                <el-table-column
                    align="center"
                    title="index"
                    label="序号"
                    width="80px">
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="skuName"
                    label="名称">
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="skuDesc"
                    label="描述"
                    width="100px">
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="definedImg"
                    label="默认图片"
                    width="width">
                    <template v-shol="{row}">
                        <div class="info">
                            <div class="pic">
                                <img :src="row.skuDescfaultImg" alt="商品图片" style="width:80px;">
                            </div>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="weight"
                    label="重量（千克）"
                >
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="price"
                    label="价格（元）"
                    width="80">
                </el-table-column>

                <el-table-column align="center" label="操作" width="250">
                    <template v-slot="{ row }">
                        <HintButton 
                            v-if="row.isSale == 0" 
                            title="上架" 
                            type="info" 
                            size="mini" 
                            icon="el-icon-top" 
                            @click="onSale(row.id)"
                        />
                        <HintButton 
                            v-if="row.isSale == 1" 
                            title="下架"
                            type="success"
                            size="mini"
                            icon="el-icon-bottom"
                            @click="canceSale(row.id)"
                            />
                        <HintButton 
                            title="修改"
                            type="primary"
                            size="mini"
                            icon="el-icon-edit"
                            @click="toUpdateSku(row.id)"
                        />
                        <HintButton 
                            title="查看详情"
                            type="info"
                            size="mini"
                            icon="el-icon-info"
                            @click="showSkuInfo(row.id)"
                        />
                        <el-popconfirm :title="`确定删除${row.skuName}吗？`" @onConfirm="deleteSku(row.id)"></el-popconfirm>
                    </template>
                </el-table-column>

            </el-table>

            <el-drawer
                title="产品详情"
                :visible.sync="isShowSkuInfo"
                :with-header="false"
                size = "50%"
                >
                <el-row>
                    <el-col :span="5">名称</el-col>
                    <el-col :span="16">{{skuInfo.skuName}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">描述</el-col>
                    <el-col :span="16">{{skuInfo.skuDesc}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">价格</el-col>
                    <el-col :span="16">{{skuInfo.price}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">平台属性</el-col>
                    <el-col :span="20">
                        <el-tag type="success" style="margin-right:5px" v-for="value in skuInfo.skuAttrs" :key="value.id">
                            {{value.attrId + '-' + value.valueId}}
                        </el-tag>
                    </el-col>
                </el-row>
            </el-drawer>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'SKU',
        data() {
            return {
                skuList:[],// sku 列表
                loading:false,// 是否正在加载
                total:'',// 数据库中的总记录数
                page:1, // 默认页码
                limit:10, // 每页记录数
                skuInfo:{},
                isShowSkuInfo:false
            };
        },
        mounted() {
            this.getSkuList()
        },
        methods: {
            toUpdateSku(){
                this.$message.info('正在开发中。。。')
            },
            async isShowSkuInfo(id){
                this.isShowSkuInfo = true
                const {data} = await this.$API.sku.get(id)
                this.skuInfo = data
            },

            // 异步获取指定页码的sku列表
            async getSkuList(page = 1){
                this.page = page
                this.loading = true
                const {data:{records,total}} = await this.$API.sku.getList(this.page,this.limit)
                this.skuList = records
                this.total = total
                this.loading = false
            },

            // 对指定的sku发上架请求
            onSale(skuId){
                this.$API.sku.onSale(skuId).then(res => {
                    this.$message({
                        type:'success',
                        message:'上架成功！'
                    })
                    this.getSkuList(this.page)
                })
            },

            // 下架
            cancelSale(skuId){
                this.$API.sku.cancelSale(skuId).then(res => {
                    this.$message({
                        type:'success',
                        message:'下架成功！'
                    })
                    this.getSkuList(this.page)
                })
            },
        },
    }
</script>

<style>

</style>