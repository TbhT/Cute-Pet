import Framework7 from 'framework7/framework7.esm.bundle.js'

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
      t.likeCount += 1
    } else {
      t.liked = false
      t.likeCount -= 1
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
      // const data = await Framework7.request.promise.postJSON('/tweet', {
      //   page: state.tweetPage
      // })

      // if (data.iRet === 0) {
      //   commit('updateAllTweets', data.data)
      // }
      setTimeout(() => {
        console.log('加载 默认的 tweets', state.tweetPage)
        const tweets = [
          {
            tweetId: 1,
            userId: 10,
            nickname: 'Tom',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'yes aaaaaaaaaaaaaaaaaa',
            image: 'https://loremflickr.com/1000/700/nature?lock=5'
          },
          {
            tweetId: 2,
            userId: 11,
            nickname: 'Alice',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'lfakdjfklajdkflajldkjflkajdlfkjalkdjflkajdslfjald',
            image: 'https://loremflickr.com/1000/700/nature?lock=3'
          },
          {
            tweetId: 4,
            userId: 114,
            nickname: 'Hello',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'dklsjfaldjflkajdlfkjalkfjlakjflkajldfjaldjflkajfljalf',
            image: 'https://loremflickr.com/1000/700/nature?lock=7'
          },
          {
            tweetId: 5,
            userId: 90,
            nickname: 'James',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text:
              'lkdfjakldfa 发快递了放假啊看到法兰克都快疯了安居房卡房间里肯德基奥菲罗克的',
            image: 'https://loremflickr.com/1000/700/nature?lock=8'
          }
        ]

        commit('resetTweets', { tweets })
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  },
  async loadMoreTweets({ commit, state }) {
    try {
      if (state.tweetsIsLoadAll) {
        return
      }

      if (state.tweetPage === 4) {
        state.tweetsIsLoadAll = true
      }

      // TODO: 获取所有的信息流
      // 模拟ajax请求

      setTimeout(() => {
        console.log('加载 更多tweets')
        const tweets = [
          {
            tweetId: state.tweetPage * 10 + 1,
            userId: 10,
            nickname: 'Tom',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'yes aaaaaaaaaaaaaaaaaa',
            image: 'https://loremflickr.com/1000/700/nature?lock=5'
          },
          {
            tweetId: state.tweetPage * 10 + 2,
            userId: 11,
            nickname: 'Alice',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'lfakdjfklajdkflajldkjflkajdlfkjalkdjflkajdslfjald',
            image: 'https://loremflickr.com/1000/700/nature?lock=3'
          },
          {
            tweetId: state.tweetPage * 10 + 4,
            userId: 114,
            nickname: 'Hello',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text: 'dklsjfaldjflkajdlfkjalkfjlakjflkajldfjaldjflkajfljalf',
            image: 'https://loremflickr.com/1000/700/nature?lock=7'
          },
          {
            tweetId: state.tweetPage * 10 + 5,
            userId: 90,
            nickname: 'James',
            createTime: Date.now(),
            liked: false,
            likeCount: 10,
            commentCount: 20,
            text:
              'lkdfjakldfa 发快递了放假啊看到法兰克都快疯了安居房卡房间里肯德基奥菲罗克的',
            image: 'https://loremflickr.com/1000/700/nature?lock=8'
          }
        ]

        commit('addPageNum')
        commit('appendTweets', { tweets })
      }, 2000)

      // const data = await Framework7.request.promise.postJSON('/tweet', {
      //   page: state.tweetPage
      // })

      // if (data.iRet === 0) {
      //   commit('loadMoreTweets', data.data)
      //   state.tweetPage += 1

      //   if (data.data.length === 0) {
      //     state.tweetsIsLoadAll = true
      //   }
      // }
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
