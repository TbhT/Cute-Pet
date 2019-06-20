<template>
  <div class="me-card-list">
    <card
      v-for="l in loadCardData"
      :key="l.tweetId"
      :data="l"
      @card:content-click="routeToCardDetail(l)"
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
      loadedEnd: false
    }
  },
  updated() {
    console.log('tweet 信息更新了')
  },
  methods: {
    routeToCardDetail(data) {
      if (!data) {
        return
      }

      this.$f7router.navigate(`/tweet/${data.tweetId}`, {
        props: {
          tweet: data
        }
      })
    }
  }
}
</script>

<style>
</style>
