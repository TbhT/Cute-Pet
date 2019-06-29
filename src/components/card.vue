<template>
  <div class="me-post-card-container" @click="cardClick(data)">
    <f7-card class="me-post-card">
      <f7-card-header>
        <div class="me-avatar">
          <img :src="data.avatar" class="lazy lazy-fade-in">
        </div>

        <div class="me-user">
          <div class="me-name">{{ data.nickname }}</div>
          <div class="me-create-time">{{ data.createTime }}</div>
        </div>
      </f7-card-header>

      <f7-card-content class="me-card-content">
        <div class="text me-text">{{ data.text }}</div>
        <div class="me-image" v-if="data.image">
          <img :src="data.image" class="lazy">
        </div>
      </f7-card-content>

      <f7-card-footer class="me-flex-row" v-if="enableToolBar">
        <f7-link>
          <i class="iconfont icon-comment"></i>
          <span class="text me-comment">{{ data.commentCount }}</span>
        </f7-link>
        <f7-link @click.stop="likeClick(data.tweetId)">
          <i :class="likeStyle"></i>
          <span class="text me-like">{{ data.likeCount }}</span>
        </f7-link>
      </f7-card-footer>
    </f7-card>
  </div>
</template>

<style>
.me-post-card-container {
  margin: 0;
  border: 0;
}
.me-post-card {
  margin: 10px 0;
}
.me-post-card .card-header {
  justify-content: inherit;
  padding: 5px 10px 5px 10px;
}

.me-post-card .card-content {
  padding-top: 0;
}

.me-text.text {
  word-wrap: break-word;
  text-indent: 2em;
  font-size: 16px;
  padding: 4px;
}
.me-flex-row.card-footer {
  padding: 2px 10px 2px 10px;
}
.me-card-content {
  padding: 5px 10px;
}
.me-user {
  font-size: 14px;
  margin-left: 5px;
}
.me-user .me-name {
  color: #f7b453;
}
.me-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.me-image img {
  width: 100%;
  padding: 4px;
}
</style>


<script>
import { likeTweet } from '../utils/index.js'
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    enableToolBar: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    likeStyle() {
      if (this.data.liked) {
        return 'iconfont icon-like1'
      } else {
        return 'iconfont icon-like'
      }
    },
    ...mapState({
      userLogin: state => state.user.isLogin
    })
  },
  methods: {
    ...mapMutations(['home/updateTweetById']),
    cardClick(data) {
      if (this.userLogin === false) {
        return this.$f7router.navigate('/user/login')
      }

      this.$emit('card:content-click', data)
    },
    async likeClick(tweetId) {
      if (this.userLogin === false) {
        return this.$f7router.navigate('/user/login')
      }

      let type = 1

      if (this.likeStyle !== 'iconfont icon-like') {
        type = 2
      }

      try {
        const data = await likeTweet({ tweetId, type })

        if (data.iRet === 0) {
          if (this.likeStyle === 'iconfont icon-like') {
            this['home/updateTweetById']({ tweetId, liked: false })
          } else {
            this['home/updateTweetById']({ tweetId, liked: true })
          }
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
