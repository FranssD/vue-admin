// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import QS from 'qs';
import api from '@/request/api'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/style/main.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(QS)
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
