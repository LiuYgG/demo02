<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 左侧菜单
                menus: [
                    { id: "1", icon: "el-icon-user", title: "人员管理", text: "公司人员" },
                    { id: "2", icon: "el-icon-receiving", title: "运营管理", text: "活动一" },
                    { id: "3", icon: "el-icon-data-board", title: "内容管理", text: "文章列表" },
                    { id: "4", icon: "el-icon-setting", title: "设置", text: "站点设置" }
                ],
            }
        }
    }
</script>

<style lang="less" scoped>

</style>