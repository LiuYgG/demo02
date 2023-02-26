<template>
    <div>
        <div class="regFormContent">
            
            <el-form class="regForm" :model="regForm" :rules="rules" ref="regForm" label-width="80px">
                <h3 class="regTitle">用户注册</h3>
                <el-form-item label="登录名" prop="username">
                    <el-input v-model="regForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="regForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passwordConfirm">
                    <el-input v-model="regForm.passwordConfirm"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="regSubmit" type="primary" @click="submitReg('regForm')">注册</el-button>
                    <el-button class="regSubmit" @click="resetForm('regForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                regForm: {
                    username: '',
                    password: '',
                    passwordConfirm: ''
                },
                rules:{
                    username: [
                        { required: true, message:'用户名为空', trigger: 'blur'},
                        { min: 4, max: 8, message:'长度在4到8个字符', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message:'密码为空', trigger: 'blur'},
                        { min: 6, max: 12, message:'长度在6到12个字符', trigger: 'blur'}
                    ],
                    passwordConfirm: [
                        { required: true, message: '请再次确认密码', trigger: 'blur'},
                        {
                            validator: (rules, value, callback) => {
                                if(value !== this.regForm.password){
                                    callback(new Error('两次密码不一致'));
                                }else{
                                    callback();
                                }
                            },

                            trigger: 'blur'
                        }
                    ]
                },   
            };
        },
        
        // 表单操作
        methods: {
            // 提交表单操作
            submitReg(regForm){
                this.$refs[regForm].validate((valid) =>{
                    if(valid){
                        alert('success');
                    }else{
                        console.log('数据校验失败');
                        return false;
                    }
                });
            },

            //重置表单操作
            resetForm(regForm){
                this.$refs[regForm].resetFields();
            },
        }
    }
</script>

<style lang="less" scoped>
.regFormContent{
    // width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.regTitle{
    font-size: 24px;
    text-align: center;
    margin-bottom: 30px;
}
.regForm{
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 15px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 10px;
}
.regSubmit{
   width: 30%;
}
</style>