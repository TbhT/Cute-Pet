import Vue from 'vue'

const LOAD_INDEX_TWEETS = 'LOAD_ALL_TWEETS'
const LOAD_MORE_TWEETS = 'LOAD_MORE_TWEETS'
const UPDATE_TWEETS = 'UPDATE_TWEETS'
const UPDATE_POPUP = 'UPDATE_POPUP'

export default {
  [LOAD_INDEX_TWEETS](state, { tweets }) {
    Vue.set(state, 'tweets', tweets)
  },
  [UPDATE_TWEETS](state, { tweetId, type }) {
    const t = state.tweets.filter(t => t.tweetId === tweetId)

    if (type === 'like') {
      t.likeCount += 1
      t.liked = true
    } else if (type === 'unlike') {
      t.likeCount -= 1
      t.liked = false
    }
  },
  [UPDATE_POPUP](state, {}) {
    // TODO:
  },
  [LOAD_MORE_TWEETS](state, {}) {
    // TODO:
  }
}
