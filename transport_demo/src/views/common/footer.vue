<template>
    <div>
        <footer>
            <div id="nav-bottom">
                <div class="about-us">
                    <ul>
                        <li v-for="item in companys" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="qr-code">
                    <div class="qr-code-APP">
                        <img src="@/assets/img/test.png" alt="" sizes="" srcset="">
                    </div>
                </div>
            </div>
            <div class="about-record">
                <h4><a href="#">备案:123456789-123</a></h4>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 底部相关
                companys:['1.关于我们', '2.产品与服务', '3.联系方式']
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
    background-color: #118de0;
    min-width: 1200px;
}
.about-us{
    width: 200px;
    height: 80px;
    // border: 1px solid #ddd;
    display: inline-block;
    padding: 10px;
    position: relative;
    top: 2px;
}
.about-us li{
    position: relative;
    margin: 10px 0px 0px 0px;
}

.qr-code .qr-code-APP img{
    position: relative;
    top: 2px;
    width: 180px;
    height: 180px;
}

.about-record{
    display: flex;
    justify-content: center;
}
.about-record a{
    text-decoration: none;
    color: #118de0;
    cursor: pointer;
}
</style>