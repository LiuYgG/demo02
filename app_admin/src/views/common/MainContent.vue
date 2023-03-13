<template>
    <!-- <div> -->
        <el-main>
            <div class="tags">
                <el-tabs type="border-card" v-model="activeTab" closable>
                    <el-tab-pane label="首页" name="0">
                        <div class="index-datas">
                            <el-row :gutter="20">
                                <el-col :span="6" v-for="data in datas"
                                            :key="data">
                                    <el-card>
                                        <div class="index-datas-icon">
                                            <i :class="data.icon"></i>
                                        </div>
                                        <div class="solid-margin"></div>
                                        <div class="index-datas-content">
                                            <h3>{{ data.title }}</h3>
                                            <p>{{ data.nums }}</p>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                </el-tabs>                   
            </div>
        </el-main>
    <!-- </div> -->

</template>

<script>
    export default {
        data() {
            return {
                
                
                // 不同模块数据量
                datas: [
                    { icon: "el-icon-shopping-cart-full", title: "已注册司机", nums: "9999" },
                    { icon: "el-icon-user", title: "已注册用户", nums: "9999" },
                    { icon: "el-icon-pie-chart", title: "订单成交量", nums: "9999" },
                    { icon: "el-icon-data-line", title: "活动参与数", nums: "99%" },
                ],
                activeTab: "0"
            };
        },
    }
</script>

<style lang="less" scoped>

</style>