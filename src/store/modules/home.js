import Framework7 from 'framework7/framework7.esm.bundle.js'
const { postJSON } = Framework7.request.promise
import { GET_ALL_TWEETS, GET_BANNERS } from '../api.js'

const state = {
  tweets: [],
  bannerImages: [],
  tweetPage: 1,
  tweetsIsLoadAll: false
}

const getters = {
  isTweetLoadAll: state => state.tweetsIsLoadAll,
  getTweetById: state => ({ tweetId }) =>
    state.tweets.find(t => t.tweetId === tweetId)
}

const mutations = {
  appendTweets(state, { tweets }) {
    state.tweets = [...state.tweets, ...tweets]
  },
  prependTweets(state, { tweets }) {
    state.tweets = [...tweets, ...state.tweets]
  },
  updateTweetById(state, { liked, tweetId }) {
    const t = state.tweets.find(t => t.tweetId === tweetId)

    if (liked === false) {
      t.liked = true
      t.likeCount = Number(t.likeCount) + 1
    } else {
      t.liked = false
      t.likeCount = Number(t.likeCount) - 1
    }
  },
  resetTweets(state, { tweets }) {
    state.tweets = tweets
  },
  addPageNum(state) {
    state.tweetPage += 1
  }
}

const actions = {
  async getIndexTweets({ commit, state }) {
    try {
      const data = await postJSON(GET_ALL_TWEETS, {
        offset: state.tweetPage
      })

      console.log('获取首页tweets信息流', data)

      if (data.iRet === 0) {
        commit('resetTweets', { tweets: data.data })
      } else {
        console.error(data)
      }
    } catch (error) {
      console.log(error)
    }
  },
  async loadMoreTweets({ commit, state }) {
    try {
      if (state.tweetsIsLoadAll) {
        return
      }

      const data = await postJSON(GET_ALL_TWEETS, {
        offset: state.tweetPage + 1
      })

      if (data.iRet === 0) {
        if (data.data.length === 0) {
          state.tweetsIsLoadAll = true
        } else {
          commit('addPageNum')
          commit('appendTweets', { tweets: data.data })
        }
      } else {
        console.error(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
