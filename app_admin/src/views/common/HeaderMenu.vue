<template>
    <div>
        <el-header>
            <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <div class="titles">后台管理</div>
                <el-submenu style="float: right;">
                    <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1" style="text-align: center;">个人资料</el-menu-item>
                        <el-menu-item index="2-2" style="text-align: center;">个人设置</el-menu-item>
                        <el-menu-item index="2-3" style="text-align: center;" @click="logOut">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

</style>