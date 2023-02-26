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
                        <li v-for="(item, index) in sidebars" :key="index.id"> 
                            {{ item.titles }}
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <el-carousel :interval="5000" arrow="always">
                        <el-carousel-item v-for="(item, index) in carousel" :key="index.id">
                        <img :src="item.imgUrl" alt="">
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
                    <el-col :span="8" v-for="cardData in cardList" :key="cardData.id">
                        <el-card shadow="hover">
                            <div slot="header">
                                <span>{{ cardData.title }}</span>
                            </div>
                            <div class="rec-content">
                                <p class="rec-desc">
                                    {{ cardData.desc }}
                                </p>
                            </div>
                            
                            <div class="rec-author">{{ cardData.author }}</div>
                            <div class="rec-time">{{ cardData.time }}</div>
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
    import Footer from "@/views/common/footer.vue";

    export default {
        components:{
            Header,
            Footer
        },

        


        data(){
            return{

                // main：左侧菜单
                sidebarIndex: 0,
                sidebars:[],

                // main: 轮播图
                carousel: [],

                // card
                cardList:[],
                errorMsg:'没有数据',

            };
        },

        mounted(){
            
            // 获取首页 sidebars 
            this.$axios.get('/api/sidebars').then(response => {
                this.sidebars = response.data.data
            })

            // 获取首页 carousel 图片数据
            this.$axios.get('/api/banners').then(response => {
                this.carousel = response.data.data
                console.log(response.data)
            })

            // 获取首页推荐 card 卡片数据
            this.$axios.get('/api/news').then(response => {
               this.cardList = response.data.data;
            //    console.log(response.data.data);
            }).catch(error => {
                this.errorMsg = error.message
            })
            
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
    box-shadow: 1px 1px 1px #c6c9c7;
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
    text-overflow: clip;
    overflow: hidden;
    // width: 200px;
    height: 14px;
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
.rec-content .rec-desc{
    overflow: hidden;
    text-overflow: clip;
    // margin: 5px 0px;
    padding-bottom: 10px;
    height: 100px;
    border-bottom: 1px solid #EBEEF5;

}
.rec-author{
    float: left;
    width: 169px;
    border-right: 1px solid #EBEEF5;
    padding: 10px;
}
.rec-time{
    float: right;
    padding: 10px;
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