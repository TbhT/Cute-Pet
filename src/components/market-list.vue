<template>
  <f7-list media-list class="me-media-list me-market-list">
    <f7-list-item
      :link="getDetailLink(market)"
      :key="market.marketId"
      v-for="market in marketList"
      media-item
      :title="market.name"
      :subtitle="market.place"
      :text="market.intro"
    >
      <img :src="market.image" slot="media" width="80" height="80" class="lazy lazy-fade-in">
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
