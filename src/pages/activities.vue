<template>
  <f7-page
    id="activitiesView"
    :page-content="false"
    tabs
    with-subnavbar
    @page:beforein="onPageBeforeIn"
  >
    <f7-navbar title="活动">
      <f7-subnavbar class="me-activity-subnavbar">
        <f7-segmented raised>
          <f7-button tab-link="#me-activity-1" tab-link-active>赛事类</f7-button>
          <f7-button tab-link="#me-activity-2">非赛事类</f7-button>
          <!-- <f7-button tab-link="#me-activity-3">带宠旅行</f7-button> -->
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>

    <f7-page-content
      id="me-activity-1"
      tab
      tab-active
      ptr
      infinite
      :infinite-preloader="showCompetePre"
      @ptr:refresh="onCompetePageRefresh"
      @infinite="onCompetePageLoadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="competeActivities.length" :competeActivities="competeActivities"></compete-activity>
      <f7-block v-else inset>
        <p>暂无赛事类活动~</p>
      </f7-block>
    </f7-page-content>

    <f7-page-content
      id="me-activity-2"
      tab
      infinite
      ptr
      :infinite-preloader="showPartyPre"
      @ptr:refresh="onPartyPageRefresh"
      @infinite="onPartyPageLoadMore"
    >
      <banner-swiper v-if="bannerImages.length" :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="partyActivities.length" :competeActivities="partyActivities"></compete-activity>
      <f7-block v-else inset>暂无非赛事类活动~</f7-block>
    </f7-page-content>

    <!-- <f7-page-content
      id="me-activity-3"
      tab
      ptr
      :infinite-preloader="showTravelPre"
      infinite
      @ptr:refresh="onTravelPageRefresh"
      @infinite="onTravelPageLoadMore"
    >
      <banner-swiper v-if="bannerImages.length" :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="travelActivities.length" :competeActivities="travelActivities"></compete-activity>
      <f7-block v-else inset>暂无带宠旅行~</f7-block>
    </f7-page-content> -->

  </f7-page>
</template>

<script>
import BannerSwiper from '../components/banner-swiper.vue'
import CompeteActivity from '../components/compete-activity.vue'
import { mapState } from 'vuex'
import { getBanners, getActivities } from '../utils/index.js'

export default {
  components: {
    BannerSwiper,
    CompeteActivity
  },
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      competePage: 1,
      partyPage: 1,
      travelPage: 1,
      competeAllowInfinite: true,
      partyAllowInfinite: true,
      travelAllowInfinite: true,
      showCompetePre: true,
      showPartyPre: true,
      showTravelPre: true,
      bannerImages: [],
      competeActivities: [],
      partyActivities: [],
      travelActivities: [],
      isTabFirstShow: false,
      isPageFirstIn: false
    }
  },
  methods: {
    onPageBeforeIn() {
      if (this.isPageFirstIn) {
        return
      }

      this.getBannerImages()
      this.initActivities()
      this.isPageFirstIn = true
    },
    async initActivities() {
      try {
        const data1 = await getActivities(1)
        console.log('1111', data1)
        if (data1.iRet === 0) {
          if (data1.data.length < 6) {
            this.showCompetePre = false
          }
          this.competeActivities = data1.data
        } else {
          console.error(data1)
          this.showCompetePre = false
        }

        const data2 = await getActivities(2)
        if (data2.iRet === 0) {
          if (data2.data.length < 6) {
            this.showPartyPre = false
          }
          this.partyActivities = data2.data
        } else {
          console.error(data2)
          this.showPartyPre = false
        }

        // const data3 = await getActivities(3)
        // if (data3.iRet === 0) {
        //   if (data3.data.length < 6) {
        //     this.showTravelPre = false
        //   }
        //   this.travelActivities = data3.data
        // } else {
        //   console.error(data3)
        //   this.showTravelPre = false
        // }
      } catch (error) {
        console.log(error)
      }
    },
    async onCompetePageRefresh(event, done) {
      try {
        const data = await getActivities(1)
        if (data.iRet === 0) {
          this.competeActivities = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        done()
      }
    },
    async onPartyPageRefresh(event, done) {
      try {
        const data = await getActivities(2)
        if (data.iRet === 0) {
          this.partyActivities = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        done()
      }
    },
    async onTravelPageRefresh(event, done) {
      try {
        const data = await getActivities(3)
        if (data.iRet === 0) {
          this.travelActivities = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        done()
      }
    },
    async onCompetePageLoadMore() {
      try {
        if (!this.competeAllowInfinite) {
          return
        }

        this.competeAllowInfinite = false

        const data = await getActivities(1, this.competePage + 1)

        if (data.iRet === 0) {
          if (data.data.length === 0) {
            this.showCompetePre = false
            return
          }
          this.competePage += 1
          this.competeActivities = [...this.competeActivities, ...data.data]
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.competeAllowInfinite = true
      }
    },
    async onPartyPageLoadMore() {
      try {
        if (!this.partyAllowInfinite) {
          return
        }

        this.partyAllowInfinite = false

        const data = await getActivities(2, this.partyPage + 1)

        if (data.iRet === 0) {
          if (data.data.length === 0) {
            this.showPartyPre = false
            return
          }

          this.partyPage += 1
          this.partyActivities = [...this.partyActivities, ...data.data]
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.partyAllowInfinite = true
      }
    },
    async onTravelPageLoadMore() {
      try {
        if (!this.travelAllowInfinite) {
          return
        }

        this.travelAllowInfinite = false

        const data = await getActivities(3, this.travelPage + 1)

        if (data.iRet === 0) {
          if (data.data.length === 0) {
            this.showTravelPre = false
            return
          }

          this.travelPage += 1
          this.travelActivities = [...this.travelActivities, ...data.data]
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.travelAllowInfinite = true
      }
    },
    async getBannerImages() {
      try {
        const data = await getBanners()
        if (data.iRet === 0) {
          this.bannerImages = data.data
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
