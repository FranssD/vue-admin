
const constantRouterMap=[
	{
		path: '/login',
		name: 'login',
		componentName: 'login',
		meta: {
			title: '登录',
			isLogin: false
		}
	},
	{
		path: '/',
		name: 'index',
		componentName: 'index',
		meta: {
			title: '首页',
			isLogin: true
		}
	},
	{
		path: '*',
		name: 'error',
		componentName: 'error',
		meta: {
			isLogin: false
		}
	},
	{
		path: '/layout/setUp/',
		name: 'user',
		componentName: 'user',
		redirect: '/layout/setUp/user',
		meta: {
			title: '配置',
			isLogin: true,
		},
		children: [{
			path: 'user',
			name: 'user',
			componentName: 'user',
			meta: {
				title: '用户管理',
				icon: 'table'
			}
		}, {
			path: 'changePassword',
			name: 'changePassword',
			componentName: 'changePassword',
			meta: {
				title: '修改密码',
				icon: 'table'
			}
		}]
	},
]
export default constantRouterMap