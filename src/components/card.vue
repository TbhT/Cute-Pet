<template>
  <div class="card me-post-card" @click="cardClick(data)">
    <div class="card-header">
      <div class="me-avatar">
        <img :src="getAvatar(data.userId)" alt="" class="lazy lazy-fade-in">
      </div>
      
      <div class="me-user">
        <div class="me-name">{{ data.nickname }}</div>
        <div class="me-create-time">{{ data.createTime }}</div>
      </div>

      <div class="card-content">
        <div class="text me-text">{{ data.text }}</div>
        <div class="me-image" v-if="data.image">
          <img :src="data.image" class="lazy lazy-fade-in">
        </div>
      </div>

      <div class="card-footer me-flex-row" v-if="enableToolBar">
        <f7-link>
          <i class="iconfont icon-comment"></i>
          <span class="text me-comment"></span>
        </f7-link>
        <f7-link @click="likeClick(data.tweetId)">
          <i class="iconfont icon-like"></i>
          <span class="text me-like"></span>
        </f7-link>
      </div>
    </div>
  </div>
</template>

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
    formatTime(time) {

    },
    getAvatar(userId) {
      return getRemoteAvatar(userId)
    },
    likeClick(tweetId) {
// TODO: 
    }
  }
}
</script>
