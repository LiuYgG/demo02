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
                        <el-menu-item v-for="(item, index) in menus" :key="index" :index="index" :class="{ is_active: $route.path === item.href}">
                            <a :href="item.href">{{ item.name }}</a>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div v-if="type === 0">
                    <div class="users">
                            <a href="/reg"> 注册账号 </a>
                    </div>
                </div>
                <div v-if="type === 1">
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
            </div>
        </header>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                // 默认选中
                // activeIndex: 0,
                // menus的数据
                menus:[
                    {name:'首页', href:'/'}, 
                    {name:'服务保障', href:'/serves'}, 
                    {name:'收费标准', href:'/salary'}, 
                    {name:'关于我们', href: '/about'}, 
                    {name:'公司动态', href:'/dynamic'}
                ],

                // 显示用户模块
                type: 1,
            }
            
        }
    }
</script>

<style lang="less" scoped>
/**
    导航共用
*/
.nav-top,
.el-menu{
    background-color: #ffffff;
}
.nav-top{
    display: flex;
    align-items: center;
    justify-content: end;
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    min-width: 1200px;
    
}

.logo{
    line-height: 80px;
    margin-left: 150px;
    color: #409EFF;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 35px;
    position: absolute;
    cursor: pointer;
}
.el-menu .el-menu-item{
    color: #606266;
}
.nav-top .el-menu-item a{
    height: 80px;
    width: 60px;
    text-align: center;
    display: block;
}
.el-menu-item:hover{
    background-color: #fff;
    border-bottom: 2px solid #409EFF !important;
    height: 80px;
    // transition: 0.3s;
}
.el-menu-item:active,
.is_active{
    background-color: #fff;
    border-bottom: 2px solid #409EFF !important;
    height: 80px;
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
    margin-left: 10px;
    line-height: 53px;
    width: 95px !important;
    height: 79px !important;
    line-height: 76px;
    text-align: center;
    cursor: pointer;
    background-color: #9bd9e9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}
.users .el-dropdown span{
    display: inline-block;
    height: 85px !important;
    padding-bottom: 10px;
    color: #fff;
}
.users a{
    display: inline-block;
    position: relative; 
    color: #fff; 
    font-size: 14px;
    text-decoration: none;
    padding-bottom: 5px;
    height: 73px !important;
    text-align: center;
    width: 95px;
    line-height: 76px;
}
.users:hover{
    border-bottom: 2px solid #409EFF !important;
    color: #606266 !important;
    line-height: 76px;
    text-align: center;
    width: 95px !important;
    height: 79px !important;
    // transition: 0.3s;
}
.users a:hover{
    color: #606266;
    background-color: #fff;
    height: 73px !important;
    text-align: center;
    line-height: 75px;
    width: 95px;
}
</style>