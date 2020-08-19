const mutations = {
  login(state, v) {
    state.userInfo = v.userInfo;
    window.sessionStorage.setItem('token', v.toekn)
    window.sessionStorage.setItem('userInfo', JSON.stringify(v.userInfo))
  }
}
export default mutations;
