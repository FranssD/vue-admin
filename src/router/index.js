import Vue from 'vue'
import Router from 'vue-router'

import menus from '@/router/menu-config'
import store from '@/store/'

Vue.use(Router)
let routes = []
let getRouter //用来获取后台拿到的路由

//需要后台传入数据

menus.forEach((item) => {
	routes.push({
		path: `/${item.componentName}`,
		name: item.componentName,
		component: () => import(`@/page/${item.componentName}.vue`),
		// redirect:item.componentName,
		meta: {
			title: item.meta.title,
			isLogin: item.meta.isLogin
		}
	})
	// item.children.forEach((children) => {
	// 	routes.push({
	// 		path: `/${children.componentName}`,
	// 		name: children.componentName,
	// 		component: () => import(`@/page/${children.componentName}`)
	// 	})
	// })
})
const rounter = new Router({
	mode: 'history',
	routes: routes,
	// 切换路由时，让页面滚动到顶部
	scrollBehavior: () => ({ y: 0 }),
})



// 解决vue-Router 在3.0上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

rounter.beforeEach((to, from, next) => {
	console.log(to)
	if (to.meta.title) {
		document.title = to.meta.title
	} else {
		document.title = '公共标题'
	}
	if (to.matched.length === 0) {
		next('/error404');
		console.log('error404')
	} else {
		if (to.meta.isLogin) {
			console.log(store.state.userInfo)
			let token = window.sessionStorage.getItem('token')
			if (token) {
				next()
				console.log('1')
			} else {
				next({
					path: '/login',
					// query:{
					// 	redirect:to.fullPath
					// }
				})
				console.log('2')
			}
		} else {
			next()
			console.log('3')
		}
	}
});
export default rounter


