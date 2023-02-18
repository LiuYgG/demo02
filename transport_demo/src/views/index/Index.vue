<template>
    <div>
        <!-- 
            1. Logo
            2. 搜索框
            3. 菜单目录
            4. 用户中心
         -->
        <div class="top-nav">
            <div class="logo">
                <h5>Logo</h5>
            </div>
            <div class="search">
                <input type="text" name="" id="" placeholder="Search">
                <button>Go</button>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="item in menuItems" :key="item.id">{{ item.text }}</li>
                </ul>
            </div>
        </div>

        <!-- 
            1. 详细分类 / banner轮播图
            2. 空白区域-待商榷
            3. 推荐内容
            4. 城市导航
         -->
        <main>
            中心内容
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
            return {
                menuItems:[
                    { id: 1, text: 'Home' },
                    { id: 2, text: 'About US' },
                    { id: 3, text: 'Services' },
                    { id: 4, text: 'Contact Us' },
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
.top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    // width: 1200px;
}

</style>