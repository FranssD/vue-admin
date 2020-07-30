
module.exports = [
	{
		path: '/login',
		name: 'login',
		//component: () => import('@/page/login'),
		componentName:'login',
		meta: {
			title: '登录',
			isLogin: false
		}
	},
	{
		path: '/index',
		name: 'index',
		//component: () => import('@/page/index'),
		componentName:'index',
		meta: {
			title: '首页',
			isLogin: true
		}
	},
	{
		path: '*',
		name: 'error404',
		//component: () => import('@/page/error404'),
		componentName:'error404',
		meta: {
			title: '404',
			isLogin: false
		}
	},
	// {
	// 	path: '/layout/setUp/',
	// 	name: 'user',
	// 	component: user,
	// 	redirect: '/layout/setUp/user',
	// 	meta: {
	// 		title: '配置',
	// 		isLogin: true,
	// 	},
	// 	children: [{
	// 		path: 'user',
	// 		name: 'user',
	// 		component: user,
	// 		meta: {
	// 			title: '用户管理',
	// 			icon: 'table'
	// 		}
	// 	}, {
	// 		path: 'changePassword',
	// 		name: 'changePassword',
	// 		component: changePassword,
	// 		meta: {
	// 			title: '修改密码',
	// 			icon: 'table'
	// 		}
	// 	}]
	// },
]