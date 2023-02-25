<template>
    <div>
        <!-- 
            1. Logo
            2. 搜索框
            3. 菜单目录
            4. 用户中心
         -->
        <Header></Header>

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
                        <li v-for="(item, index) in sidebars" :key="index"> 
                            {{ item.title }}
                            <span>{{ item.time }}</span>
                        </li>
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

            <!-- 
                3.推荐内容
                    - 相关标题
                    - 描述
                    - 发布人 / 发布时间
            -->
            <div class="recommend">
                <el-row>
                    <el-col :span="8" v-for="(card, index) in cards" :key="index">
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>{{ card.title}}</span>
                            </div>
                            <div class="rec-content">
                                <p class="rec-desc">
                                    {{ card.desc}}
                                </p>
                            </div>
                            
                            <div class="rec-author">{{ card.author}}</div>
                            <div class="rec-time">{{ card.time}}</div>
                        </el-card>
                    </el-col>
                </el-row>
                <div class="recommend-more"><a href="#">查看更多</a></div>
            </div>
        </main>

        <!-- 
            1.关于我们
            2.产品与服务
            3.联系方式
            4.二维码(APP下载)
            5.备案信息
         -->
        <Footer></Footer>
    </div>
</template>

<script>
// 引入header.vue
    import Header  from "@/views/common/header.vue";
    import Footer from "@/views/common/footer.vue"

    export default {
        components:{
            Header,
            Footer
        },

        data(){
            return{

                // main：左侧菜单
                sidebarIndex: 0,
                sidebars:[
                    {title:'《小花仙》新春回归活动今日上线 微信红包封面明日开抢', time:'2023-2-19' },
                    {title:'《小花仙》新春回归活动今日上线 微信红包封面明日开抢', time:'2023-2-19' },
                    {title:'《小花仙》新春回归活动今日上线 微信红包封面明日开抢', time:'2023-2-19' },
                    {title:'《小花仙》新春回归活动今日上线 微信红包封面明日开抢', time:'2023-2-19' },
                    {title:'《小花仙》新春回归活动今日上线 微信红包封面明日开抢', time:'2023-2-19' },
                ],
                // main: 轮播图
                carousel: [
                    { image: 'https://img0.baidu.com/it/u=3957758939,1600769248&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' },
                    { image: 'https://img2.baidu.com/it/u=3867960631,2923014190&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
                    { image: 'https://img0.baidu.com/it/u=2171411284,1924893541&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' },
                    { image: 'https://img0.baidu.com/it/u=3822016102,3026244821&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281' }
                ],

                // card
                cards:[
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                    { id:0, title:' 标题', desc:'描述', author:'创建人', time:'2023年2月18日'},
                ],

                // 底部相关
                companys:['1.关于我们', '2.产品与服务', '3.联系方式']
            };
        },
    }
</script>

<style lang="less" scoped>
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
    width: 510px;
    background-color: #F1F2F3;
    border: 1px solid #EBEEF5;
    box-shadow: #409EFF;
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
    border-bottom: 1px solid #118de0;
}
.sidebar li:hover {
  background-color: #e6f7ff;
  width: 100%;
}
.sidebar li::after{
    border-bottom: none;
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
    display: flex;
    height: 100px;
    width: 1200px;
    justify-content: center;
    margin: 10px auto;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 15px;
    background: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK?w=327&h=184&c=7&r=0&o=5&pid=1.7');
}

// 3.推荐内容
.recommend{
    display: block;
    height: auto;
    width: 1200px;
    // justify-content: center;
    margin: 10px auto;
    overflow: hidden;
}
.el-card{
    margin: 10px;
    border-radius: 15px;
    cursor: pointer;
    
}
.recommend-more{
    border: 1px solid #ebeef5;
    border-radius: 15px;
    width: 180px;
    height: 40px;
    // padding: 10px;
    // display: flex;
    // justify-content: center;
    text-align: center;
    margin: 0px auto;
    cursor: pointer;
}
.recommend-more a{
    width: 180px !important;
    height: 40px;
    text-decoration: none;
    color: #409EFF;
    line-height: 40px;
    
}


</style>