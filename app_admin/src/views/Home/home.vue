<template>
    <div>
        <el-container>
            <el-header>
                <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item>XX 后台管理系统</el-menu-item>
                    <el-submenu style="float: right;">
                        <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1" style="text-align: center;">个人资料</el-menu-item>
                            <el-menu-item index="2-2" style="text-align: center;">个人设置</el-menu-item>
                            <el-menu-item index="2-3" style="text-align: center;" @click="logOut">退出登录</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col>
                            <el-menu
                            :default-active="activeAside"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                                <el-menu-item index="0">
                                    <i class="el-icon-s-data"></i>
                                    <span slot="title">首页</span>
                                </el-menu-item>
                                <el-submenu v-for="item in menus" :key="item" :index="item.id">
                                    <template slot="title">
                                        <i :class="item.icon"></i>
                                        <span>{{ item.title }}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item :index="item.id">{{ item.text }}</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
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
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeAside: '0',
                // 左侧菜单
                menus:[
                    {id:"1", icon:"el-icon-user", title: "人员管理", text: "公司人员"},
                    {id:"2", icon:"el-icon-receiving", title: "运营管理", text: "活动一"},
                    {id:"3", icon:"el-icon-data-board", title: "内容管理", text: "文章列表"},
                    {id:"4", icon:"el-icon-setting", title: "设置", text: "站点设置"}
                ],

                // 不同模块数据量
                datas:[
                    {icon: 'el-icon-shopping-cart-full', title: '已注册司机', nums: '9999'},
                    {icon: 'el-icon-user', title: '已注册用户', nums: '9999'},
                    {icon: 'el-icon-pie-chart', title: '订单成交量', nums: '9999'},
                    {icon: 'el-icon-data-line', title: '活动参与数', nums: '99%'},
                ],
                activeTab: "0"
            }
        },

        methods:{
            logOut(){
                alert('已退出');
            }
        },
    }
</script>

<style lang="less" scoped>


</style>