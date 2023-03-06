<template>
    <div>
        <Header></Header>

        <main>
            <!-- 公司动态 -->
            <div class="company-news">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        prop="date"
                        label=""
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label=""
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="">
                    </el-table-column>
                </el-table>
            </div>

            <!-- 发展历程 ：时间线 -->
            <div class="company-development">
                <el-steps align-center active="4">
                    <el-step icon="el-icon-success" title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step icon="el-icon-success" title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step icon="el-icon-success" title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step icon="el-icon-success" title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
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
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }


    }
</script>

<style lang="less" scoped>
    .company-news,
    .company-development{
        display: flex;
        justify-content: center;
        margin: 20px auto;
        width: 1200px;
        height: auto;
        border: 1px solid #d1d1d1;;
        border-radius: 15px;
        padding: 20px;
    }
</style>