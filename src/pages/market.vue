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

  </f7-page>
</template>


<script>
import BannerSwiper from '../components/banner-swiper.vue'
import MarketList from '../components/market-list.vue'
import { getBanners, getMarketAll } from '../utils'
import { mapState } from 'vuex'

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
      page: 1,
      isFirstPageIn: false,
      isTabFirstIn: false
    }
  },
  methods: {
    onPageBeforeIn() {
      if (this.isFirstPageIn) {
        return
      }

      this.getIndexMarketList()
      this.isFirstPageIn = true
    },
    async onMarketPageRefresh(event, done) {
      try {
        const data = await getMarketAll({ offset: 1 })

        if (data.iRet === 0) {
          if (data.length < 6) {
            this.showMarketPreloader = false
          }

          this.marketList = data.data
        } else {
          console.error(error)
        }
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

        const data = await getMarketAll({ offset: this.page + 1 })

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
        const data = await getMarketAll({ offset: 1 })

        if (data.iRet === 0) {
          if (data.data.length < 6) {
            this.showMarketPreloader = false
          }
          this.marketList = data.data
        } else {
          console.error(data)
          this.showMarketPreloader = false
        }
      } catch (error) {
        console.error(error)
        this.showMarketPreloader = false
      }
    }
  }
}
</script>
