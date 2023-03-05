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
            <div class="nones">
                <img src="@/assets/img/server_1.jpg" alt="" style="width: 100%;">
            </div>

            <!-- 
                3.服务类别
            -->

            <div class="serves">
                <div class="serve-title">
                    <p>主要服务</p>
                    <span></span>
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
            </div>
            <!-- 简要 -->
            <div class="fullServe">
                <div class="fullServe-left"></div>
                <div class="fullServe-right">
                    <div class="fullServe-right-card">
                        <div class="fullServe-right-icon">
                            <img src="https://11912270.s61i.faiusr.com/4/AD0IzojXBRAEGAAgqaylwQUo28aP5QMwTjhF.png.webp" alt="">
                        </div>
                        <div class="fullServe-right-title">
                            <h2>透明价格</h2>
                            <span>我们是行业标准的先行者，不希望我们掌握报价的权利，而是提供标准，让您自己能够计算自己的搬家费用。</span>
                        </div>
                    </div>
                    <div class="fullServe-right-card">
                        <div class="fullServe-right-icon">
                            <img src="https://11912270.s61i.faiusr.com/4/AD0IzojXBRAEGAAgqqylwQUo68a5KjA2OEE.png.webp" alt="">
                        </div>
                        <div class="fullServe-right-title">
                            <h2>准时上门</h2>
                            <span>我们坚持把搬家时间精确到时刻，而不是日子，我们会在您希望的搬家时间准时到达。</span>
                        </div>
                    </div>
                    <div class="fullServe-right-card">
                        <div class="fullServe-right-icon">
                            <img src="https://11912270.s61i.faiusr.com/4/AD0IzojXBRAEGAAgrKylwQUoor2DoAQwQTgv.png.webp" alt="">
                        </div>
                        <div class="fullServe-right-title">
                            <h2>清洁闪亮的卡车</h2>
                            <span>我们极端重视对细节的关注，所以我们的卡车和制服一尘不染，工人的举动是经过精心培训养成的。</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 我们的承诺 -->
            <div class="we-promise">
                <div class="promise-title">
                    <p>我们承诺</p>
                </div>
                <div class="promise-title-en">
                    <span>SERVICE PROMISE</span>
                </div>
                <div class="promise-wrap">
                    <div class="promise-card" v-for=" card in promises " :key="card">
                        <div class="promise-card-icon">
                            <span>{{ card.num }}</span>
                        </div>
                        <div class="promise-card-content">
                            <h3>{{ card.title }}</h3>
                            <span>{{ card.desc }}</span>
                        </div>
                    </div>
                </div>  
            </div>


            <!-- 车型 -->
            <div class="myCar">
                <div class="car-info-title">
                    <p>车型详情</p>
                </div>
                <div class="car-info-content">
                    <el-carousel :interval="4000" type="card" height="400px" arrow="always">
                        <el-carousel-item v-for="item in cars" :key="item">
                            <img :src="item.imgUrl" alt="" style="border: 1px solid #ccc; background-color: aliceblue;">
                        </el-carousel-item>
                    </el-carousel>
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


                // promise
                promises:[
                    { num: 'A', title: '先服务后付款', desc: '保证先服务后付款，中间无任何隐形收费'},
                    { num: 'B', title: '安全', desc: '保证客户指定时间内安全完成服务'},
                    { num: 'C', title: '先服务后付款不甩单', desc: '保证接单后不无缘无故取消订单，不会甩单'},
                    { num: 'D', title: '费用低', desc: '保证收费标准不比同行高'},
                    { num: 'E', title: '款损坏率低', desc: '搬迁过程中零投诉、零损坏率、零丢失率'},
                    { num: 'F', title: '时间：延时赔款', desc: '搬家延误1小时赔偿客户50元，延误2小时赔偿客户100元'},
                ],

                // 车型
                cars:[
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/4b314eaa-894d-6322-2838-8de34681f5da.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/257e4a11-fcbd-580c-3d8f-faa58d14645f.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/4cac921e-863f-9f6c-f420-3062087b6daa.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/1b56d000-3e80-f168-0afc-83ff755d6122.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/993bc0f0-480a-fbf2-0d87-5a0fb2958eb7.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/cf317e66-036e-ad83-e636-016b3db0ee07.png'},
                    {imgUrl: 'https://oimg.huolala.cn/ops/prd/2021-04-15/a455ef85-e888-71ec-d3d0-7d6b7b366b74.png'},
                ]
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




</style>