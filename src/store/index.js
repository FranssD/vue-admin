import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './multation'
Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        version:'hello'
    },
    mutations
})

export default store