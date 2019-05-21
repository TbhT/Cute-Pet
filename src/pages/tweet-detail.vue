<template>
  <f7-page class="me-tweet-detail">
    <f7-navbar :back-link="backText" sliding></f7-navbar>
  
    <card :enableToolbar="false" :data="post"></card>

    <div class="me-comments">
      <div class="me-title">
        <span>评论</span>
      </div>

      <div class="me-comments-list" v-if="comments.length">

      </div>

      <div class="me-no-comment" v-else>
        <i class="iconfont icon-wujieguoyangshi"></i>
        <div class="me-text">
          <span>暂无内容</span>
        </div>
      </div>
    </div>

    <f7-toolbar class="me-flex-row" position="bottom">
      
    </f7-toolbar>
  </f7-page>
</template>

<script>
import Card from '../pages/card.vue'


export default {
  components: {
    Card
  },
  props: {
    post: {}
  },
  data() {
    return {
      backText: '返回'
    }
  }
}
</script>

<style>

</style>
