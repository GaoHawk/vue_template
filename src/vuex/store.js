import Vue from 'vue'
import Vuex from 'vuex'
import  router  from '../router'

const debug = process.env.NODE_ENV !== 'production'
console.log(router);
Vue.use(Vuex)
Vue.config.debug = debug;

export default new Vuex.Store({

  state: {
    title: '',

  },
  actions: {
    setNewTitle ({commit}, msg) {
      commit('NEW_TITLE', msg)
    }
 
  },
  mutations: {
    NEW_TITLE (state, msg) {
      state.title = msg
    }
  },

  strict: debug

})