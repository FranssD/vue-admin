import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import index from '@/page/index'
import user from '@/page/layout/setUp/user'
import changePassword from '@/page/layout/setUp/changePassword'
import error from '@/components/error404'

import menus from '@/router/menu-config'
import store from '@/store/'
console.log(menus)
//需要后台传入数据
menus.forEach((item) => {
	// item.children.forEach((children) => {
	//   routes.push({
	// 	path: `/${children.componentName}`,
	// 	name: children.componentName,
	// 	component: () => import(`@/components/${children.componentName}`)
	//   })
	// })
  })
const rounter = new Router({
	mode: 'history',
	routes: menus,
	// 切换路由时，让页面滚动到顶部
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
// 解决vue-Router 在3.0上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

rounter.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	} else {
		document.title = '公共标题'
	}
	if (to.matched.length === 0) {
		next('/error');
		console.log('error')
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


