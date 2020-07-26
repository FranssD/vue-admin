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
				pwd: ""
			}
		};
	},
	created() {
		console.log("渲染模板之前");
	},
	mounted() {
		console.log("已完成模板渲染");
		this.$api.user.getList().then(res => {
			console.log(res);
		});
	},
	methods: {
		addUserObj() {
			let name = this.form.userName;
			let pwd = this.form.pwd;
			this.$api.user
				.postAddUser({
					username: name,
					pwd: pwd
				})
				.then(res => {
					if (res.data.code) {
						this.$message({
							message: res.data.msg,
							type: "success"
						});
					} else {
						this.$message.error(res.data.msg);
					}
				});
		},
		loginObj() {
			let name = this.form.userName;
			let pwd = this.form.pwd;

			this.$api.user
				.postLogin({
					username: name,
					pwd: pwd
				})
				.then(res => {
					if (res.data.code) {
						this.$message({
							message: res.data.msg,
							type: "success"
						});
						this.$store.commit("login", res.data.data);
						this.$router.push("/");
					} else {
						this.$message.error(res.data.msg);
					}
				});
		}
	}
};
</script>
<style scoped>
.fromBox{margin-top: 25px}
.login{text-align: center;padding: 5vh 0 0;}
.login .btnBox {
	margin-top: 15px;
}
</style>
