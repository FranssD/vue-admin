const mutations = {
	login(state, v) {
		console.log(v.userInfo.token, 'login')
		state.userInfo = v.userInfo;
		// state.token=v.userInfo.toekn;
		window.sessionStorage.setItem('token', v.userInfo.token)
		window.sessionStorage.setItem('userInfo', JSON.stringify(v.userInfo))
	},
	routerList(state, v) {
		
	}
}
export default mutations;
