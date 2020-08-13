import Vue from 'vue'
import router from './router'

import store from '@/store/'
const _import = require('./router/_import_production') // 获取组件的方法
import Layout from '@/page/layout' // Layout 是架构组件，不在后台返回，在文件里单独引入

let routes = []
let getRouter // 用来获取后台拿到的路由

// 需要后台传入数据
let fakeRouter = {
	router: [
		{
			path: "/login",
			component: "login",
			meta: {
				title: "登录",
				isLogin: false
			},
		},
		{
			path: "",
			component: "Layout",
			redirect: "dashboard",
			meta: {
				title: "首页",
				isLogin: true
			},
			children: [
				{
					path: "dashboard",
					component: "dashboard/index",
					meta: {
						title: "首页",
						isLogin: true,
					}
				}
			]
		},
		{
			path: "/setUp",
			component: "Layout",
			redirect: '/setUp/userManagement',
			name: "setUp",
			meta: {
				title: "配置",
				isLogin: true
			},
			children: [
				{
					path: "userManagement",
					name: "UserManagement",
					component: "userManagement/index",
					meta: {
						title: "用户管理",
						isLogin: true,
					}
				},
				{
					path: "changePassword",
					name: "ChangePassword",
					component: "changePassword/index",
					meta: {
						title: "修改密码",
						isLogin: true,
					}
				}
			]
		},
		{
			path: "/form",
			component: "Layout",
			meta: {
				title: "表单",
				isLogin: true
			},
			children: [{
				path: "index",
				name: "Form",
				component: "form/index",
				meta: {
					title: "表单",
					icon: "form"
				}
			}]
		},
		{
			path: "/error404",
			component: "error404",
			meta: {
				title: "404",
				isLogin: false
			},
		},
	]
}
router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	if (!getRouter) { // 不加这个判断，路由会陷入死循环
		if (!getObjArr('router')) {
			// easy-mock官网经常挂掉，所以就不请求了,你们可以替换成自己公司的接口去请求,把下方的axios请求打开即可
			// axios.get('https://www.easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example/antrouter').then(res => {
			console.log('beforeEach  getRouter')
			getRouter = fakeRouter.router // 假装模拟后台请求得到的路由数据
			saveObjArr('router', getRouter) // 存储路由到localStorage

			routerGo(to, next) // 执行路由跳转方法
			// })
		} else { // 从localStorage拿到了路由
			getRouter = getObjArr('router') // 拿到路由
			console.log(getRouter, '拿到路由')
			routerGo(to, next)
		}
	} else {
		if (to.meta.isLogin) {
			let token = window.sessionStorage.getItem('token')
			if (token) {
				next()
			} else {
				next({
					path: '/login',
					// query:{
					// 	redirect:to.fullPath
					// }
				})
			}
		} else {
			next()
		}
	}
})

function routerGo(to, next) {
	getRouter = filterAsyncRouter(getRouter) // 过滤路由
	router.addRoutes(getRouter) // 动态添加路由
	global.antRouter = getRouter // 将路由数据传递给全局变量，做侧边栏菜单渲染工作
	next({ ...to, replace: true })
}

function saveObjArr(name, data) { // localStorage 存储数组对象的方法
	localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { // localStorage 获取数组对象的方法
	return JSON.parse(window.localStorage.getItem(name));
}

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
	const accessedRouters = asyncRouterMap.filter(route => {
		if (route.component) {
			if (route.component === 'Layout') { //Layout组件特殊处理
				route.component = Layout
			} else {
				route.component = _import(route.component)
			}
		}
		if (route.children && route.children.length) {
			route.children = filterAsyncRouter(route.children)
		}
		return true
	})
	return accessedRouters
}

// // 解决vue-Router 在3.0上重复点菜单报错问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
// 	return originalPush.call(this, location).catch(err => err)
// }

// rounter.beforeEach((to, from, next) => {
// 	console.log(to)
// 	if (to.meta.title) {
// 		document.title = to.meta.title
// 	} else {
// 		document.title = '公共标题'
// 	}
// 	if (to.matched.length === 0) {
// 		next('/error404');
// 		console.log('error404')
// 	} else {
// 		if (to.meta.isLogin) {
// 			console.log(store.state.userInfo)
// 			let token = window.sessionStorage.getItem('token')
// 			if (token) {
// 				next()
// 				console.log('1')
// 			} else {
// 				next({
// 					path: '/login',
// 					// query:{
// 					// 	redirect:to.fullPath
// 					// }
// 				})
// 				console.log('2')
// 			}
// 		} else {
// 			next()
// 			console.log('3')
// 		}
// 	}
// });
// export default rounter


