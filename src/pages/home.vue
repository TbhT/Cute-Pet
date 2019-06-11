<template>
  <f7-page id="homeView" :page-content="false" tabs with-subnavbar>
    <f7-navbar title="宠伢">
      <f7-nav-right>
        <f7-link class="icon iconfont icon-feedback3" @click="openPublisherPopup"></f7-link>
      </f7-nav-right>
      <f7-subnavbar class="me-home-subnavbar">
        <f7-segmented raised>
          <f7-button tab-link="#tab-tweets" tab-link-active>精选</f7-button>
          <f7-button tab-link="#tab-topics">话题</f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>

    <f7-page-content
      id="tab-tweets"
      class="page-content"
      tab-active
      tab
      ptr
      :infinite-preloader="showPreloader"
      @ptr:refresh="onRefresh"
      @infinite="loadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <card-list :loadCardData="tweets"></card-list>
    </f7-page-content>

    <f7-page-content id="tab-topics" class="page-content" tab>
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <topic-list :topics="topics"></topic-list>
    </f7-page-content>
  </f7-page>
</template>

<script>
import CardList from '../components/card-list.vue'
import BannerSwiper from '../components/banner-swiper.vue'
import TopicList from '../components/topic-list.vue'
import $$ from 'dom7'
import F7 from 'framework7'
import {
  createNamespacedHelpers,
  mapMutations as globalMapMutations,
  mapActions as globalMapActions,
  mapState as globalMapState
} from 'vuex'
const { mapActions, mapState, mapGetters } = createNamespacedHelpers('home')
import { GET_BANNERS, GET_ALL_TWEETS } from '../store/api.js'
import { getBanners, getTopicAll } from '../utils/index.js'

export default {
  components: {
    CardList,
    BannerSwiper,
    TopicList
  },
  computed: {
    ...mapState(['tweets']),
    ...mapGetters(['isTweetLoadAll']),
    ...globalMapState(['user'])
  },
  data: function() {
    return {
      bannerImages: [],
      showPreloader: true,
      allowInfinite: true,
      isInfinite: true,
      topics: []
    }
  },
  async mounted() {
    this.$f7.preloader.show()
    await this.getUserStatus()
    if (this.user.isLogin === true) {
      await this.getBannerImages()
      await this.getIndexTweets()

      if (this.tweets.length < 6) {
        this.showPreloader = false
      }

      this.$f7.preloader.hide()
    } else {
      this.$f7.preloader.hide()
      this.$f7router.back('/user/login')
    }
  },
  methods: {
    ...mapActions(['getIndexTweets', 'loadMoreTweets']),
    ...globalMapMutations(['updatePopup']),
    ...globalMapActions(['getUserStatus']),
    async onRefresh(event, done) {
      await this.getIndexTweets()
      done()
    },
    openPublisherPopup() {
      this.updatePopup({
        key: 'publisherOpened',
        value: true
      })
    },
    async loadMore(el, event) {
      if (!this.allowInfinite) {
        return
      }

      this.allowInfinite = false

      try {
        await this.loadMoreTweets()
        this.allowInfinite = true

        if (this.isTweetLoadAll) {
          this.isInfinite = false
          this.showPreloader = false
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getBannerImages() {
      try {
        const data = await getBanners()
        this.bannerImages = data
      } catch (error) {
        console.error(error)
      }
    },
    async getAllTopics() {
      try {
        if (this.user.isLogin !== true) {
          return
        }

        const data = await getTopicAll()

        if (data) {
          this.topics = data.data
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
