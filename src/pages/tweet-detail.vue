<template>
  <f7-page class="me-tweet-detail">
    <f7-navbar :back-link="backText" sliding></f7-navbar>

    <card :enableToolbar="false" :data="tweet"></card>

    <div class="me-comments">
      <div class="me-title">
        <span>评论</span>
      </div>

      <div class="me-comments-list" v-if="comments.length">
        <div class="me-comment" v-for="comment in comments" :key="comment.commentId">
          <img
            src="https://loremflickr.com/70/70/people?lock=1"
            alt
            class="me-avatar lazy lazy-fade-in"
          >
          <div class="me-detail">
            <div class="me-nickname">{{ comment.nickname }}</div>
            <div class="me-time">{{ comment.time }}</div>
            <div class="me-text">{{ comment.text }}</div>
          </div>
        </div>
      </div>

      <div class="me-no-comment" v-else>
        <i class="iconfont icon-wujieguoyangshi"></i>
        <div class="me-text">
          <span>暂无内容</span>
        </div>
      </div>
    </div>

    <f7-toolbar class="me-flex-row" position="bottom">
      <f7-link class="me-tool me-tool-border" @click="openCommentPopup">
        <span class="iconfont icon-comment"></span>
        <span class="text" v-text="tweet.commentCount ? tweet.commentCount : '评论'"></span>
      </f7-link>
      <f7-link
        class="me-tool me-tool-border"
        :class="{ liked: tweet.liked }"
        @click="triggeLike(tweet.tweetId, tweet.liked)"
      >
        <span class="iconfont icon-like"></span>
        <span class="text" v-text="tweet.likeCount ? tweet.likeCount : '喜欢'"></span>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
import Card from '../components/card.vue'

export default {
  components: {
    Card
  },
  props: {
    tweet: {},
    comments: []
  },
  data() {
    return {
      backText: '返回'
    }
  },
  methods: {
    triggeLike() {
      // TODO: 触发喜欢还是不喜欢
    },
    openCommentPopup() {
      // TODO: 打开评论页面
    }
  }
}
</script>

<style>
</style>
