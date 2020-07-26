import axios from 'axios';
import { Message } from "element-ui";
import store from '@/store';
const Tip = msg => {
    Message({
        showClose: true,
        message: msg,
        type: 'warning'
    })
}
// 请求超时
let serve = axios.create({
    timeout: 1000 * 10
})
// post 请求头json 类型接受
serve.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// 请求拦截器
serve.interceptors.request.use(
    config => {
        // 登录流程控制，判定是否存在token
        // 每次的请求会带token 也要过期到时候
        // 后台根据token判定状态
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => Promise.error(error)
)

const errorHandLe = status => {
    switch (status) {
        // 拒绝访问(401)
        case 401:
            Tip('拒绝访问');
            break;
        // token过期(403)
        // 清除token并跳转登录页
        case 403:
            Tip('没有权限');
            localStorage.removeItem('token');
            StorageEvent.commit('loginSuccess', null);
            setImmediate(() => {

            }, 1000)
            break;
        // 请求不存在
        case 404:
            Tip('请求的资源不存在');
            break;
        case 504:
            Tip('链接超时');
            break;
    }
}

// 响应拦截
serve.interceptors.response.use(
    res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
    error => {
        const {
            response
        } = error;
        if (response) {
            // 请求超时
            errorHandLe(response.status, response.data.message);
            return Promise.reject(response)
        }
    }
)
export default serve;
