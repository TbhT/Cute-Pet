<template>
  <div class="me-card-list">
    <card
      v-for="l in loadCardData"
      :key="l.tweetId"
      :data="l"
      @card:content-click="routeToCardDetail"
    ></card>
  </div>
</template>

<script>
import Card from './card.vue'

export default {
  components: {
    Card
  },
  props: {
    loadCardData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      refreshing: false,
      loadingMore: false,
      loadedEnd: false,
      loadCardData: []
    }
  },
  methods: {
    onRefresh() {
      if (this.refreshing) {
        return false
      }

      this.refreshing = true
      // TODO: 需要有刷新以后的回调
    },
    onInfiniteScroll() {
      if (this.loadingMore || this.loadedEnd) {
        return false
      }

      this.loadingMore = true
      // TODO: 需要有加载以后的回调
    },
    routeToCardDetail(data) {
      this.$f7router.navigate(`/comment/${data.commentId}`)
    }
  }
}
</script>

<style>
</style>
