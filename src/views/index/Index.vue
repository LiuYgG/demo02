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
            1. banner轮播图
            2. 空白区域-待商榷
            3. 推荐内容
            4. 城市导航
         -->
        <main>
            <!-- banner轮播图 -->
            <div class="wrapper">
                <div class="content">
                    <el-carousel :interval="5000" arrow="always" height="700px">
                        <el-carousel-item v-for="item in carousel" :key="item.id">
                        <img :src="item.imgUrl" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

            <!-- 2.空白区域：待商榷 -->
            <div class="servers">
                <img src="@/assets/img/server_1.jpg" alt="" style="width: 100%;">
            </div>

            <!-- 
                3.服务类别
            -->

            <div class="serves">
                <div class="serve-title">
                    <p>我们的服务</p>
                </div>
                <el-row>
                    <el-col :span="6" v-for="cardData in cardList" :key="cardData">
                        <el-card shadow="hover">
                            <div class="serve-content">
                                <div class="serve-img">
                                    <img :src="cardData.imgURL" alt="">
                                </div>
                                <p class="serve-content">
                                    {{ cardData.content }}
                                </p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

                <div class="fullServe">
                    <div class="fullServe-left">
                        <img src="" alt="">
                    </div>
                </div>
            </div>

            <!-- 收费标准 -->
            <div class="salary-area">
                <div class="salary-title">
                    <p>收费标准</p>
                </div>
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
                carousel: [
                    {imgUrl:'https://15446763.s61i.faiusr.com/2/AD0I6_WuBxACGAAgm4zO0AUozs3oWzCADzi8BQ.jpg.webp'},
                    {imgUrl:'https://15446763.s61i.faiusr.com/2/AD0I6_WuBxACGAAguJHO0AUo6-DyogcwgA84vAU.jpg'}
                ],

                // card
                cardList:[
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgwKPO0AUomLTFrQEwUDhQ.png.webp', content: '居民搬家'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgoaTO0AUovr251gMwUDhQ.png.webp', content: 'VIP搬家'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAguqTO0AUowOWVCTBQOFA.png.webp', content: '仓储服务'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgsKTO0AUo2pPGjQYwUDhQ.png.webp', content: '效率准时'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgtaTO0AUo-8_9BzBQOFA.png.webp', content: '包装服务'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgq6TO0AUo8d3iogMwUDhQ.png.webp', content: '微搬家'},
                    {imgURL:'https://15446763.s61i.faiusr.com/4/AD0I6_WuBxAEGAAgm6TO0AUokLq4iQYwUDhQ.png.webp', content: '办公室搬迁'},
                    {imgURL:'https://15416486.s61i.faiusr.com/4/AD0IpvmsBxAEGAAgkb660AUo6bzHlwEwWjhS.png', content: '快运物流'},
                    
                    
                ],
                // errorMsg:'没有数据',

            };
        },

        mounted(){
            
            // 获取首页 sidebars 
            // this.$axios.get('/api/sidebars').then(response => {
            //     this.sidebars = response.data.data
            // })

            // 获取首页 carousel 图片数据
            // this.$axios.get('/api/banners').then(response => {
            //     this.carousel = response.data.data
            //     console.log(response.data)
            // })

            // 获取首页推荐 card 卡片数据
            // this.$axios.get('/api/news').then(response => {
            //    this.cardList = response.data.data;
            // //    console.log(response.data.data);
            // }).catch(error => {
            //     this.errorMsg = error.message
            // })
            
        },
    }
</script>

<style lang="less" scoped>
/**

main内容专区

*/
.wrapper {
    display: flex;
    height: auto;
    min-width: 1200px;
    justify-content: center;
    // margin: 10px auto 0px;
    overflow: hidden;
}

.content {
    flex: 1;
    height: auto;
    box-sizing: border-box;
}
.content img{
    width: 100%;
    height: 100%;
}

// 轮播图
.el-carousel__arrow{
    width: 100px !important;
    height: 100px !important;
    font-size: 36px !important;
}

// 2. 空白待商榷位置
.servers{
    display: flex;
    height: auto;
    min-width: 1200px;
    justify-content: center;
    margin: 0px auto 10px;
    overflow: hidden;
    // border-radius: 0px 0px 15px 15px;
    // background: url('../img/server_1.jpg');
}

// 服务类别
// 收费标准区域
.serves,
.salary-area{
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
.serve-content{
    padding: 5px;
}
.serve-content .serve-img{
    display: flex;
    justify-content: center;
}
.serve-content .serve-content{
    overflow: hidden;
    text-overflow: clip;
    display: flex;
    justify-content: center;
    font-weight: 500;
    // padding-bottom: 10px;
    // height: 100px;
    // border-bottom: 1px solid #EBEEF5;

}

.serves-more{
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
.serves-more a{
    width: 180px !important;
    height: 40px;
    text-decoration: none;
    color: #409EFF;
    line-height: 40px;
    
}



</style>