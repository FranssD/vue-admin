<template>
    <div class="login">
        <img src="../assets/images/logo.png" />
        <h1>{{ msg }}</h1>
        <el-row type="flex" class="row-bg fromBox" justify="center">
            <el-col :xs="20" :sm="10" :md="8" :lg="8" :xl="4">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="请输账号">
                        <el-input name="username" v-model="form.userName" placeholder="请输账号"></el-input>
                    </el-form-item>
                    <el-form-item label="请输密码">
                        <el-input name="pwd" v-model="form.pwd" placeholder="请输密码"></el-input>
                    </el-form-item>
                    <div class="btnBox">
                        <el-button @click="addUserObj">注册</el-button>
                        <el-button @click="loginObj">登录</el-button>
                    </div>
                </el-form>
            </el-col>
        </el-row>
        <div class="asd">{{$store.state.username}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            form: {
                userName: "",
                pwd: "",
            },
        };
    },
    created() {
        console.log("渲染模板之前");
    },
    mounted() {
        console.log("已完成模板渲染");
        this.$api.user.getList().then((res) => {
            console.log(res);
        });
    },
    methods: {
        addUserObj() {
            const that = this;
            let [name, pwd] = [that.form.userName, that.form.pwd];
            that.$api.user
                .postAddUser({
                    username: name,
                    pwd: pwd,
                })
                .then((res) => {
                    if (res.data.code) {
                        that.$message({
                            message: res.data.msg,
                            type: "success",
                        });
                    } else {
                        that.$message.error(res.data.msg);
                    }
                });
        },
        loginObj() {
            const that = this;
            let [name, pwd] = [that.form.userName, that.form.pwd];
            const paramsPostLogin = {
                username: name,
                pwd: pwd,
            };

            that.$api.user.postLogin(paramsPostLogin).then((res) => {
                if (res.data.code) {
                    that.$message({
                        message: res.data.msg,
                        type: "success",
                    });
                    that.$store.commit("login", res.data.data);

                    let grade = res.data.data.userInfo.grade;
                    const paramsGetRouter = {
                        grade: grade,
                    };
                    that.$api.router.getRouter(paramsGetRouter).then((res) => {
                        let allRouter = [
                            ...JSON.parse(window.localStorage.getItem('router')),
                            ...res.data.data,
                        ];
                        global.antRouter=allRouter
                        localStorage.setItem('router', JSON.stringify(allRouter))
                        that.$router.push("/dashboard");
                    });
                } else {
                    that.$message.error(res.data.msg);
                }
            });
        },
    },
};
</script>
<style scoped>
.fromBox {
    margin-top: 25px;
}
.login {
    text-align: center;
    padding: 5vh 0 0;
}
.login img {
    margin: 0 auto;
}
.login .btnBox {
    margin-top: 15px;
}
</style>
