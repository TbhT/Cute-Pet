import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  user: {
    isLogin: false,
    userId: null,
    isGetInfo: false
  },
  tweets: [],
  popup: {
    editTweet: false,
    editComment: false
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
