import http from "./http";
import base from "./base";
import {
  stringify
} from "qs";
// 用户
const user = {
  getList(params) {
    // 获所有用户信息
    return http.get(`${base.sq}/admin/auth/GetList`, {
      params: params
    })
  },
  // 登录
  postLogin(params) {
    return http.post(`${base.sq}/admin/auth/login?${stringify(params)}`, {
      params: params
    })
  },
  // 注册
  postAddUser(params) {
    return http.post(`${base.sq}/admin/auth/addUser?${stringify(params)}`, {
      params: params
    })
  }

}
export default {
  user
}
// stringify
