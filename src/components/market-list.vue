<template>
  <f7-list media-list class="me-media-list me-market-list">
    <f7-list-item
      :link="getDetailLink(market)"
      :key="market.marketId"
      v-for="market in marketList"
      media-item
      :title="market.name"
      :subtitle="market.contact"
      :text="market.place"
    >
      <img :src="market.image" slot="media" width="80" height="80" class="lazy lazy-fade-in">
    </f7-list-item>
  </f7-list>
</template>

<script>
import { mapState } from 'vuex'

export default {
  ...mapState({
    userLogin: state => state.user.isLogin
  }),
  props: {
    marketList: {
      type: Array
    }
  },
  methods: {
    getDetailLink(market) {
      if (this.userLogin === false) {
        return this.$f7router.navigate('/user/login')
      }

      return `/market/detail/${market.marketId}`
    }
  }
}
</script>
