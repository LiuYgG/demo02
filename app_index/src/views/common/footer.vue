<template>
    <div>
        <footer>
            <div id="nav-bottom">
                <!-- 公司相关 -->
                <div class="nav-bottom-left">
                    <div class="company-content">
                        <ul>
                            <li>   
                                <p>
                                    <a class="index">首页</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">产品首页</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a class="about">关于</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">关于我们</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">加入我们</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">联系我们</a>
                                </p>

                            </li>
                            <li>
                                <p>
                                    <a class="help">帮助</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">常见问题</a>
                                </p>
                                <p>
                                    <a href="javascript:void(0);">意见反馈</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="company-link">
                        <ul class="company-link-content">
                            <li>
                                <p class="company-link-title">
                                    <a>友情链接</a>
                                </p>
                                <ul class="company-link-list">
                                    <li v-for="items in links" :key="items">
                                        <a href="javascript:void(0);">{{ items.name }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-bottom-right">
                    <ul>
                        <li>
                            <p class="follow">关注我们</p>
                            <p class="official-title">官方订阅号</p>
                            <div class="qrcode-1"></div>
                        </li>
                        <li>
                            <p class="official-title" style="margin-top: 26px;">APP下载</p>
                            <div class="qrcode-2"></div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 底部相关
                
                links:[
                    {name: '货拉拉安全应急响应中心'},
                    {name: '中华网汽车'},
                    {name: '中国加盟网'},
                    {name: '汽车之家'},
                    {name: '瓜子二手车'},
                    {name: '新能源汽车'},
                    {name: '汽车报价大全'},
                    {name: '汽车之家'},
                    {name: '瓜子二手车'},
                    {name: '新能源汽车'},
                    {name: '汽车报价大全'},
                    {name: '瓜子二手车'},
                    {name: '新能源汽车'},
                    {name: '汽车报价大全'},
                    {name: '货拉拉安全应急响应中心'},
                ]
            };
        },
        
    }
</script>

<style lang="less" scoped>
/**
    底部内容区域

*/
#nav-bottom{
    display: flex;
    justify-content: space-evenly;
    background-color: #2a2a2b;
    min-width: 1200px;
    height: 100%;
}
.nav-bottom-left{
    width: 800px;
    height: 100%;
}

.company-content{
    display: flex;
    justify-content: center;
    width: 800px;
    height: 180px;
    float: left;
}
.index,
.about,
.help{
    color: #fff !important;
    border-bottom: none !important;
}
.company-content ul li{
    float: left;
    width: 100px;
    margin: 22px 0px;
    text-align: center;
}
.company-content ul li p{
    margin-top: 10px;
}
.company-content ul li p a{
    color: #b1b0b0;
    transform: translateX(-100%);
    transition: transform 5s ease-in-out !important;
}
.company-content ul li p a:hover{
    padding-bottom: 3px;
    border-bottom: 1px solid #d1d0d0;
    transform: translateX(0);
}


// 友情链接
.company-link{

    width: 800px;
    height: auto;
    float: left;
    display: flex;
    justify-content: center;
    color: #fff;
}
.company-link-title{
    margin-top: 10px;
    width: 65px;
    height: 65px;
    float: left;
}
.company-link-content{
    height: auto;
    text-align: center;
    overflow: hidden;
}
.company-link-list li{
    float: left;
}
.company-link-list li a{
    color: #b1b0b0;
    font-size: 14px;
    margin: 5px 10px;
}
.company-link-list li a:hover{
    border-bottom: 1px solid #b1b0b0;
}

// 二维码区域
.nav-bottom-right{
    margin: 22px 0px;
    color: #fff;
}
.nav-bottom-right ul li{
    float: left;
    width: 130px;
    height: 180px;
}
.official-title{
    font-size: 15px;
    margin: 5px 0px;
}
.qrcode-1{
    background: url('https://www.huolala.cn/rs/img/Qrcode.png?v=20180703') no-repeat 0 -1px;
    width: 93px;
    height: 93px;
    float: right;
    margin-right: 45px
}
.qrcode-2{
    background: url('https://www.huolala.cn/rs/img/Qrcode.png?v=20180703') no-repeat -1px -106px;
    width: 93px;
    height: 93px;
    float: right;
    margin-right: 50px
}
</style>