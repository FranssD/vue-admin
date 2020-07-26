<template>
	<el-menu
		mode="vertical"
		unique-opened
		:default-active="$route.path"
		background-color="#304156"
		text-color="#fff"
		active-text-color="#409EFF"
	>
		<Sidebar :routes="routes" />
	</el-menu>
</template>

<script>
import Sidebar from "../Aside/Aside";
export default {
	name: "asideIndex",
	components: {
		Sidebar,
	},
	data() {
		return {
			routes: [
				{
					path: "/login",
					name: "login",
					component: 'login',
					meta: {
						title: "登录",
						isLogin: false,
					},
				},
				{
					path: "/",
					name: "index",
					component: 'index',
					meta: {
						title: "首页",
						isLogin: true,
					},
				},
				{
					path: "/layout/setUp/",
					name: "user",
					component: 'user',
					redirect: "/layout/setUp/user",
					meta: {
						title: "配置",
						isLogin: true,
					},
					children: [
						{
							path: "user",
							name: "user",
							component: 'user',
							meta: {
								title: "用户管理",
								icon: "table",
							},
						},
						{
							path: "changePassword",
							name: "changePassword",
							component: 'changePassword',
							meta: {
								title: "修改密码",
								icon: "table",
							},
						},
					],
				},
				{
					path: "*",
					name: "error",
					component: 'error',
					meta: {
						isLogin: false,
					},
				},
			],
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style>
</style>