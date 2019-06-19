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
          <f7-button tab-link="#me-activity-1" tab-link-active>宠物赛事</f7-button>
          <f7-button tab-link="#me-activity-2">宠物趴体</f7-button>
          <f7-button tab-link="#me-activity-3">带宠旅行</f7-button>
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
        <p>暂无宠物赛事~</p>
      </f7-block>
    </f7-page-content>

    <f7-page-content
      id="me-activity-2"
      tab
      inifite
      ptr
      :infinite-preloader="showPartyPre"
      @ptr:refresh="onPartyPageRefresh"
      @infinite="onPartyPageLoadMore"
    >
      <banner-swiper v-if="bannerImages.length" :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="partyActivities.length" :competeActivities="partyActivities"></compete-activity>
      <f7-block v-else inset>暂无宠物趴体~</f7-block>
    </f7-page-content>

    <f7-page-content
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
    </f7-page-content>

    <f7-fab position="right-bottom" slot="fixed" color="orange" href="/activities/add">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
import BannerSwiper from '../components/banner-swiper.vue'
import CompeteActivity from '../components/compete-activity.vue'
import { mapState } from 'vuex'
import { getBanners, getActivities } from '../utils/index.js'
import {
  getBannerImages,
  getCompeteActivities,
  getPartyActivities
} from '../store/mock'

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
      travelActivities: []
    }
  },
  mounted() {
    this.initActivities()
  },
  methods: {
    onPageBeforeIn() {
      this.getBannerImages()
    },
    async initActivities() {
      // const data1 = await getActivities(1)
      const data1 = await getCompeteActivities()
      if (data1.length < 6) {
        this.showCompetePre = false
      }

      this.competeActivities = data1

      // const data2 = await getActivities(2)
      // const data2 = await getPartyActivities()
      // if (data2.length < 6) {
      //   this.showPartyPre = false
      // }
      // this.partyActivities = data2

      // const data3 = await getActivities(3)
      // const data3 = await getPartyActivities()
      // if (data3.length < 6) {
      //   this.showTravelPre = false
      // }
      // this.travelActivities = data3
    },
    async onCompetePageRefresh(event, done) {
      try {
        // const data = await getActivities(1)
        const data = await getCompeteActivities()

        if (data) {
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
        // const data = await getActivities(2)
        const data = await getPartyActivities()

        if (data === 0) {
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
        // const data = await getActivities(3)
        const data = await getPartyActivities()

        if (data === 0) {
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

        // const data = await getActivities(1, this.competePage + 1)
        const data = await getCompeteActivities()

        if (data) {
          if (data.length === 0) {
            this.showCompetePre = false
            return
          }
          this.competePage += 1
          this.competeActivities = [...this.competeActivities, ...data.data]
        } else {
          console.error(data)
        }

        this.competeAllowInfinite = true
      } catch (error) {
        console.error(error)
      }
    },
    async onPartyPageLoadMore() {
      try {
        if (!this.partyAllowInfinite) {
          return
        }

        this.partyAllowInfinite = false

        // const data = await getActivities(2, this.partyPage + 1)
        const data = await getPartyActivities()

        if (data) {
          if (data.length === 0) {
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

        // const data = await getActivities(3, this.travelPage + 1)
        const data = await getPartyActivities()

        if (data) {
          if (data.length === 0) {
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
        // const data = await getBanners()
        const data = await getBannerImages()
        this.bannerImages = data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
