<template>
  <f7-page id="marketView" tabs :page-content="false">
    <f7-navbar title="市场"></f7-navbar>

    <f7-page-content
      class="me-market-page-content"
      tab
      tab-active
      ptr
      infinite
      :infinite-preloader="showMarketPreloader"
      @ptr:refresh="onMarketPageRefresh"
      @infinite="onMarketLoadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <market-list :marketList="marketList" v-if="marketList.length"></market-list>
      <f7-block v-else inset strong>
        <p>暂无相关市场信息</p>
      </f7-block>
    </f7-page-content>

    <f7-fab position="right-bottom" slot="fixed" color="orange" href="/market/add">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<style scoped>
/* .me-market-page-content {
  padding: 0;
} */
</style>


<script>
import BannerSwiper from '../components/banner-swiper.vue'
import MarketList from '../components/market-list.vue'
import { getBanners } from '../utils'

export default {
  components: {
    BannerSwiper,
    MarketList
  },
  data() {
    return {
      bannerImages: [],
      showMarketPreloader: true,
      marketList: []
    }
  },
  async mounted() {
    const data = await getBanners()

    if (data.length < 6) {
      this.showMarketPreloader = false
    }

    this.bannerImages = data
  },
  methods: {
    async onMarketPageRefresh() {},
    async onMarketLoadMore() {},
    async getIndexMarketList() {}
  }
}
</script>

<style>
</style>
