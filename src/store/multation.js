const mutations = {
  login(state, v) {
    state.userInfo = v.userInfo;
    window.sessionStorage.setItem('token', v.toekn)
  }
}
export default mutations;
