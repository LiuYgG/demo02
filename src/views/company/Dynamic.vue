<template>
    <div>
        <Header></Header>

        <main>
            <!-- 公司动态 -->
            <div class="company-news">
                
                    <el-table
                    :data="newsData"
                    style="width: 100%">
                        <el-table-column
                            label="标题">
                            <template slot-scope="scope">
                                <a :href=" '/news/' + scope.row.id">{{ scope.row.title }}</a>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="发表时间"
                            width="180">
                        </el-table-column>
                    </el-table>      
            </div>

            <!-- 发展历程 ：时间线 -->
            <div class="company-development">
                <el-steps align-center active="999" finish-status="success">
                    <el-step v-for="step in steps" :key="step" icon="el-icon-success" :title="step.title" :description="step.desc" 
                    style="width: 200px;"></el-step>
                </el-steps>
            </div>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>

    import Header  from "@/views/common/header.vue";
    import Footer  from "@/views/common/footer.vue";
    export default {
        components:{
            Header,
            Footer
        },
        data() {
            return {
                newsData: [{
                    id: 1,
                    date: '2016 / 05 / 02',
                    title: "上海市普陀区金沙江路 1518 弄"
                }, {
                    id: 2,
                    date: '2016 / 05 / 04',
                    title: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id: 3,
                    date: '2016 / 05 / 01',
                    title: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 4,
                    date: '2016 / 05 / 03',
                    title: '上海市普陀区金沙江路 1516 弄'
                }],

                steps:[
                    {id:0, title:'2023年3月7日', desc:'网站开始部署'},
                    {id:1, title:'2023年3月8日', desc:'网站开始部署'},
                    {id:2, title:'2023年3月9日', desc:'网站开始部署'},
                    {id:3, title:'2023年3月10日', desc:'网站开始部署'},
                    {id:4, title:'2023年3月11日', desc:'网站开始部署'},
                    {id:5, title:'2023年3月12日', desc:'网站开始部署'},
                    {id:6, title:'2023年3月13日', desc:'网站开始部署'},
                    {id:7, title:'2023年3月14日', desc:'网站开始部署'},
                    {id:8, title:'2023年3月15日', desc:'网站开始部署'},
                    {id:9, title:'2023年3月16日', desc:'网站开始部署'},
                    {id:10, title:'2023年3月17日', desc:'网站开始部署'},
                    {id:11, title:'2023年3月18日', desc:'网站开始部署'},

                ]
            }
        },
    }
</script>

<style lang="less" scoped>
.company-news,
.company-development{
    display: flex;
    // justify-content: center;
    margin: 20px auto;
    width: 1200px;
    height: auto;
    border: 1px solid #d1d1d1;;
    border-radius: 15px;
    padding: 20px;
    overflow: auto;
    // scroll-snap-type: mandatory;
}
.company-development{
    height: 300px;
}
.company-development .el-steps{
    margin: 95px 0px;
}
.company-news a{
    color: #606266;
}

// 横向滚动条样式
.company-development::-webkit-scrollbar{
    height: 20px;
    width: 100px !important;
    cursor: pointer;
}
// 滚动条的背景色
.company-development::-webkit-scrollbar-track{
    background-color: #f2f2f2;
    border-radius: 15px;
    cursor: pointer;
}
//滚动条的背景色
.company-development::-webkit-scrollbar-thumb{
    background-color: #cccc;
    border-radius: 15px;
    cursor: pointer;
}
// 滚动条的圆角样式
.company-development::-webkit-scrollbar-corner{
    border-radius: 15px;
    cursor: pointer;
}

</style>