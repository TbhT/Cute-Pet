<template>
  <f7-list media-list class="me-media-list me-market-list">
    <f7-list-item
      link="#"
      :key="market.marketId"
      v-for="market in marketList"
      media-item
      :title="market.name"
      @click="trigeClick(market)"
    >
      <img :src="market.imgUrl" slot="media" width="80" class="lazy lazy-fade-in">
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
    trigeClick() {
      // TODO: 点击市场
    }
  }
}
</script>
