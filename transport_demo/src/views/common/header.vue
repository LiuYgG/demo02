<template>
    <div>
        
        <header>
            <div class="logo">
                <h3>Logo</h3>
            </div>
            <div class="nav-top">
                <!-- <div class="search">
                    <el-input type="text" style="width: 220px;" placeholder="请输入搜索内容"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </div> -->
                <div class="menu">
                    <el-menu mode="horizontal" :default-active="activeIndex">
                        <el-menu-item v-for="(item, index) in menus" :key="index" :index="index">
                            {{ item }}
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="users">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-user"></i> 用户名<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </header>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 默认选中
                activeIndex: 0,
                // menus的数据
                menus:['首页', '全部工作', '关于我们'],
            }
        }
    }
</script>

<style lang="less" scoped>
.nav-top{
    display: flex;
    align-items: center;
    justify-content: end;
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    min-width: 1200px;
    
}
.logo{
    line-height: 80px;
    margin-left: 150px;
    color: #409EFF;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 35px;
    position: absolute;
}
.el-menu-item:hover{
    background-color: #fff;
    border-bottom: 2px solid #409EFF !important;
    height: 80px;
    transition: 0.3s;
}
.el-menu.el-menu--horizontal{
    border-bottom: none;
}
.el-menu--horizontal>.el-menu-item{
    height: 80px;
    line-height: 80px;
}
.users{
    margin-right: 50px;
}
</style>