<template>
    <div>
        <!-- 
            1. Logo
            2. 搜索框
            3. 菜单目录
            4. 用户中心
         -->
        <header>
            <div class="nav-top">
                <div class="logo">
                    <h3>Logo</h3>
                </div>
                <div class="search">
                    <el-input type="text" style="width: 220px;" placeholder="请输入搜索内容"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </div>
                <div class="menu">
                    <el-menu mode="horizontal" :default-active="activeIndex">
                        <el-menu-item v-for="(item, index) in menus" :key="index" :index="index">{{ item }}</el-menu-item>
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

        <!-- 
            1. 详细分类 / banner轮播图
            2. 空白区域-待商榷
            3. 推荐内容
            4. 城市导航
         -->
        <main>
            <!-- 详细分类 / banner轮播图 -->
            <div class="wrapper">
                <div class="sidebar">
                    <ul :default-active="sidebarIndex">
                        <li v-for="(item, index) in sidebars" :key="index"> {{ item }}</li>
                    </ul>
                </div>
                <div class="content">
                    <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="(item, index) in carousel" :key="index">
                        <img :src="item.image" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

            <!-- 2.空白区域：待商榷 -->
            <div class="nones"></div>
        </main>

        <!-- 
            1.关于我们
            2.产品与服务
            3.联系方式
            4.二维码(APP下载)
            5.备案信息
         -->
        <footer>
            底部内容
        </footer>
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

                // main：左侧菜单
                sidebarIndex: 0,
                sidebars:['菜单一', '菜单二', '菜单三', '菜单四'],
                // main: 轮播图
                carousel: [
                    { image: 'https://img1.baidu.com/it/u=95046244,3436270039&fm=253&fmt=auto&app=138&f=JPEG?w=843&h=500' },
                    { image: 'https://img1.baidu.com/it/u=3180272130,671725760&fm=253&fmt=auto&app=120&f=JPEG?w=506&h=300' },
                    { image: 'https://img2.baidu.com/it/u=181125032,1070588788&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=336' },
                    { image: 'https://img0.baidu.com/it/u=3321194228,2911128357&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500' }
                ]
            };
        },
    }
</script>

<style lang="less" scoped>
.nav-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    min-width: 1200px;
    
}
.logo{
    margin-left: 50px;
    color: #409EFF;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 35px;
}
.el-menu-item:hover{
    background-color: #fff;
    border-bottom: 2px solid #409EFF !important;
    transition: 0.3s;
}
.users{
    margin-right: 50px;
}

/**

main内容专区

*/
.wrapper {
    display: flex;
    height: 300px;
    width: 1200px;
    justify-content: center;
    margin: 10px auto;
    overflow: hidden;
}
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    border-right: 1px solid #ddd;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 20px;
}
.sidebar ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.sidebar li {
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
}
li:hover {
  background-color: #e6f7ff;
}
.content {
    flex: 1;
    height: 100%;
    //   padding: 20px;
    box-sizing: border-box;
}
.content .el-carousel{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.content img{
    width: 100%;
    height: 300px;
}

// 2. 空白待商榷位置
.nones{
    width: 100%;
    min-width: 1200px;
    height: 60px;
    background-color: #409EFF;
}

</style>