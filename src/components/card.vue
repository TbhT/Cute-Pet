<template>
  <f7-card class="me-post-card" @click="cardClick(data)">
    <f7-card-header>
      <div class="me-avatar">
        <img src="https://loremflickr.com/70/70/people?lock=1" alt class="lazy lazy-fade-in">
      </div>

      <div class="me-user">
        <div class="me-name">{{ data.nickname }}</div>
        <div class="me-create-time">{{ data.createTime }}</div>
      </div>
    </f7-card-header>

    <f7-card-content>
      <div class="text me-text">{{ data.text }}</div>
      <div class="me-image" v-if="data.image">
        <img :src="data.image" class="lazy lazy-fade-in">
      </div>
    </f7-card-content>

    <f7-card-footer class="me-flex-row" v-if="enableToolBar">
      <f7-link>
        <i class="iconfont icon-comment"></i>
        <span class="text me-comment"></span>
      </f7-link>
      <f7-link @click="likeClick(data.tweetId)">
        <i class="iconfont icon-like"></i>
        <span class="text me-like"></span>
      </f7-link>
    </f7-card-footer>
  </f7-card>
</template>

<style>
.me-post-card {
  margin: 10px 0;
}

.me-text.text {
  word-wrap: break-word;
  text-indent: 2em;
  font-size: 20px;
}
.me-user {
  font-size: 14px;
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
}
</style>


<script>
import { getRemoteAvatar } from '../utils/index.js'

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
  methods: {
    cardClick(data) {
      this.$emit('card:content-click', data)
    },
    formatTime(time) {},
    getAvatar(userId) {
      return getRemoteAvatar(userId)
    },
    likeClick(tweetId) {
      // TODO:
    }
  }
}
</script>
