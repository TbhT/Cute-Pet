<template>
  <f7-page id="marketView" :page-content="false" tabs with-subnavbar>
    <f7-navbar title="宠伢">
      <f7-subnavbar class="me-market-subnavbar">
        <f7-segmented raised>
          <f7-button tab-link="#me-market" tab-link-active>市场</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>

    <f7-page-content 
      id="me-market"
      tab
      tab-active
      ptr
      infinite
      :infinite-preloader="showMarketPreloader"
      @ptr:refresh="onMarketPageRefresh"
      @infinite="onMarketLoadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <market-list :marketList="marketList"></market-list>
    </f7-page-content>
  </f7-page>
</template>

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
    this.bannerImages = data
  },
  methods: {
    async onMarketPageRefresh() {},
    async onMarketLoadMore() {},
    async getIndexMarketList() {

    }
  }
}
</script>

<style>
</style>
