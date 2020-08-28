import http from "./http";
import base from "./base";
import {
	stringify
} from "qs";
// 用户
const user = {
	getList(params) {
		// 获所有用户信息
		return http.get(`${base.sq}/admin/user/GetList`, {
			params: params
		})
	},
	// 登录
	postLogin(params) {
		return http.post(`${base.sq}/admin/user/login`, {
			params: params
		})
	},
	// 注册
	postAddUser(params) {
		return http.post(`${base.sq}/admin/user/addUser`, {
			params: params
		})
	}
}
const router={
	//路由及权限
	getRouter(params){
		return http.get(`${base.sq}/admin/routes/GetList`, {
			params: params
		})
	}
}
export default {
	user,router
}
// stringify
