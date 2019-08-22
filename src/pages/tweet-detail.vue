<template>
  <f7-page class="me-tweet-detail" no-toolbar :page-content="false" @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding></f7-navbar>

    <f7-page-content @ptr:refresh="onPageRefresh" ptr>
      <card :enableToolBar="false" :data="tweet"></card>

      <div class="me-comments">
        <div class="me-title">
          <span>评论</span>
        </div>

        <div class="me-comments-list" v-if="comments.length">
          <div class="me-comment" v-for="comment in comments" :key="comment.commentId">
            <img :src="comment.avatar" alt class="me-avatar lazy lazy-fade-in" />
            <div class="me-detail">
              <div class="me-nickname">{{ comment.nickname }}</div>
              <div class="me-time">{{ comment.createTime }}</div>
              <div class="me-text">{{ comment.text }}</div>
            </div>
          </div>
        </div>

        <div class="me-no-comment" v-else>
          <i class="iconfont icon-wujieguoyangshi"></i>
          <div class="me-text me-no-content">
            <span>暂无内容</span>
          </div>
        </div>
      </div>
    </f7-page-content>
    <f7-toolbar class="me-flex-row" position="bottom">
      <f7-link class="me-tool me-tool-border" @click="openCommentPopup">
        <span class="iconfont icon-comment"></span>
        <span class="text" v-text="tweet.commentCount ? tweet.commentCount : '评论'"></span>
      </f7-link>
      <f7-link class="me-tool me-tool-border" @click="triggerLike(tweet.tweetId, tweet.liked)">
        <span :class="likeStyle"></span>
        <span class="text" v-text="tweet.likeCount ? tweet.likeCount : '喜欢'"></span>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<style scoped>
.me-comments {
  border-top: 1px;
  background-color: #fff;
  margin-bottom: 15px;
}
.me-comments .me-title {
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  font-size: 13px;
}
.me-comments .me-comment {
  border-top: 1px solid #dadada;
  display: flex;
}
.me-comments .me-comment .me-avatar {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.me-comments .me-comment .me-nickname {
  font-size: 13px;
}
.me-comments .me-comment .me-time {
  color: #929292;
}
.me-comments .me-comment {
  padding: 10px;
}
.me-comments .me-detail {
  margin-left: 8px;
}
.me-comments .me-no-comment .iconfont {
  font-size: 80px;
  color: #929292;
}
.me-comments .me-no-comment {
  width: 100%;
  padding: 20px 0;
  text-align: center;
}
.me-comments .me-no-comment .me-text.me-no-content {
  font-size: 14px;
  color: #929292;
  margin-top: 6px;
}
.me-comments .me-tool .me-liked {
  /* color: #f7b452; */
  color: red;
}
</style>

<script>
import Card from '../components/card.vue'
import { mapMutations, mapState } from 'vuex'
import { likeTweet, getComment } from '../utils'

export default {
  components: {
    Card
  },
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backText: '返回',
      comments: [],
      isPageFirstIn: false
    }
  },
  computed: {
    ...mapState(['user']),
    likeStyle() {
      if (this.tweet.liked) {
        return 'iconfont icon-like1'
      } else {
        return 'iconfont icon-like'
      }
    }
  },
  methods: {
    async onPageRefresh(event, done) {
      await this.getAllComment()
      done()
    },
    onPageBeforeIn() {
      if (this.isPageFirstIn) {
        return
      }

      this['updateCommentTweetId']({ tweetId: this.tweet.tweetId })

      this.getAllComment()
    },
    ...mapMutations([
      'updatePopup',
      'home/updateTweetById',
      'updateCommentTweetId'
    ]),
    async getAllComment() {
      const tweetId = this.tweet.tweetId
      if (!tweetId) {
        return
      }

      try {
        const data = await getComment({ tweetId })

        if (data.iRet === 0) {
          this.comments = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async triggerLike(tweetId, liked) {
      try {
        if (this.user.isLogin === false) {
          return this.$f7router.navigate('/user/login')
        }

        let type = 1

        if (this.likeStyle !== 'iconfont icon-like') {
          type = 2
        }

        const data = await likeTweet({ tweetId, type })

        if (data.iRet === 0) {
          if (this.likeStyle === 'iconfont icon-like') {
            this.likeStyle = 'iconfont icon-like1'
            this['home/updateTweetById']({ tweetId, liked: false })
          } else {
            this['home/updateTweetById']({ tweetId, liked: true })
            this.likeStyle = 'iconfont icon-like'
          }
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    openCommentPopup() {
      if (this.user.isLogin === false) {
        return this.$f7router.navigate('/user/login')
      }

      this.updatePopup({
        key: 'commentOpened',
        value: true
      })
    }
  }
}
</script>

<style>
</style>
