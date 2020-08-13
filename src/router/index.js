import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var constantRouterMap = []

export default new Router({
	mode: 'history',
	routes: constantRouterMap,
	// 切换路由时，让页面滚动到顶部
	scrollBehavior: () => ({ y: 0 }),
})
