import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import home from './modules/home.js'

Vue.use(Vuex)

const state = {
  user: {
    isLogin: false,
    userId: null,
    isGetInfo: false,
    userInfo: null
  },
  popup: {
    publisherOpened: false,
    commentOpened: false,
    editorText: ''
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home
  }
})
