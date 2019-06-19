<template>
  <f7-list media-list class="me-media-list me-market-list">
    <f7-list-item
      :key="market.marketId"
      v-for="market in marketList"
      media-item
      :title="market.name"
      :subtitle="market.place"
      :link="getDetailLink(market)"
    >
      <img :src="market.image" slot="media" width="80" class="lazy lazy-fade-in">
    </f7-list-item>
  </f7-list>
</template>

<script>
export default {
  props: {
    marketList: {
      type: Array
    }
  },
  methods: {
    getDetailLink(market) {
      return `/market/detail/${market.marketId}`
    }
  }
}
</script>
