import Framework7 from 'framework7/framework7.esm.bundle.js'

const state = {
  tweets: [],
  bannerImages: [],
  tweetPage: 1
}

const getters = {
  updateTweetsById: state => ({ id, liked }) => {
    const tweet = state.tweets.find(t => t.tweetId === id)
    tweet.liked = liked
    return tweet
  }
}

const mutations = {
  appendTweets(state, { tweets }) {
    state.tweets = [...state.tweets, ...tweets]
  },
  prependTweets(state, { tweets }) {
    state.tweets = [...tweets, ...state.tweets]
  },
  updateTweetById(state, { tweet }) {
    const t = state.tweets.find(t => t.tweetId === tweet.tweetId)
    t.liked = tweet.liked
    t.likeCount = tweet.likeCount
  }
}

const actions = {
  async getIndexTweets({ commit }) {
    try {
      const data = await Framework7.request.promise.postJSON('/tweet', {
        page: state.tweetPage
      })

      if (data.iRet === 0) {
        commit('updateAllTweets')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
