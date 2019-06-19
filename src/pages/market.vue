<template>
  <f7-page id="marketView" tabs :page-content="false" @page:beforein="onPageBeforeIn">
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
import { getBanners, getMarketAll } from '../utils'
import { mapState } from 'vuex'
import { getMarket, getBannerImages } from '../store/mock'

export default {
  computed: {
    ...mapState(['user'])
  },
  components: {
    BannerSwiper,
    MarketList
  },
  data() {
    return {
      bannerImages: [],
      showMarketPreloader: true,
      allowInfinite: true,
      marketList: [],
      page: 1
    }
  },
  methods: {
    async onPageBeforeIn() {
      this.getIndexMarketList()
      const data = await getBannerImages()
      this.bannerImages = data
    },
    async onMarketPageRefresh(event, done) {
      try {
        // const data = await getMarketAll()
        const data = await getMarket()
        if (data.length < 6) {
          this.showMarketPreloader = false
        } else {
          console.error(data)
        }

        this.marketList = data
      } catch (error) {
        console.error(error)
      } finally {
        done()
      }
    },
    async onMarketLoadMore() {
      try {
        if (!this.allowInfinite) {
          return
        }

        this.allowInfinite = true

        // const data = await getMarketAll({ offset: this.page + 1 })
        const data = await getMarket()
        if (data.iRet === 0) {
          if (data.data.length === 0) {
            this.showMarketPreloader = false
            return
          }

          this.page += 1
          this.marketList = [...this.marketList, ...data.data]
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.allowInfinite = true
      }
    },
    async getIndexMarketList() {
      try {
        // const data = await getMarketAll({ offset: 1 })
        const data = await getMarket()

        if (data) {
          if (data.length < 6) {
            this.showMarketPreloader = false
          }
          this.marketList = data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>
