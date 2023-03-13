<template>
    <div>
        <HeaderMenu></HeaderMenu>
        <el-container>
            <el-container>
                
                <AsideMenu></AsideMenu>
                
                <router-view></router-view>
                
            </el-container>
        </el-container>
    </div>
</template>

<script>
import HeaderMenu from '../common/HeaderMenu.vue';
import AsideMenu from '../common/AsideMenu.vue';



    export default {
        components: { HeaderMenu, AsideMenu },
    
    }
</script>

<style lang="less" scoped>


</style>