<template>
    <div>
        <el-aside width="200px">
            <el-row class="tac" style="height: 100%;">
                <el-col style="height: 100%;">
                    <el-menu
                    :default-active="activeAside"
                    class="el-menu-vertical-demo"
                    :router="true"
                    @open="handleOpen"
                    @close="handleClose"
                    style="height: 100%;">
                    <template v-for="(item) in menus">
                        <!-- 有次级菜单的，则展开子选项 -->
                        <el-submenu v-if="item.children && item.children.length > 0 " :key="item.id" :index="item.id">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span>{{ item.title }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item 
                                v-for=" children in item.children" 
                                :key="children.id" 
                                :index="children.url"
                                :class="{is_active: $route.path === children.url}">
                                    <i :class="children.icon"></i>
                                    {{ children.title }}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <!-- 没有次级菜单的 -->
                        <el-menu-item v-if="!item.children" :key="item.id" :index="item.url">
                            <i :class="item.icon"></i>
                            <span slot="title" :class="[item.parentid == 0 ? 'is-active': '']"> {{ item.title }}</span>
                        </el-menu-item>
                    </template>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeAside: '/main',
                // 左侧菜单
                menus: [],
            }
        },
        mounted(){
        
            this.$axios.get('/api/leftmenus').then(response => {
                this.menus = response.data.menus
                console.log(response.data)
            })
        }
    }
</script>

<style lang="less" scoped>

</style>