<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.el-header {
    width: 100%;
    background-color: black;
}
.el-container .el-aside{
    background-color: aqua;
    height: 800px;
}
</style>