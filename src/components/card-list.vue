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
      loadedEnd: false
    }
  },
  methods: {
    routeToCardDetail(data) {
      this.$f7router.navigate(`/tweet/${data.tweetId}`)
    }
  }
}
</script>

<style>
</style>
