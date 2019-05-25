<template>
  <f7-page id="homeView" :page-content="false" tabs with-subnavbar>
    <!-- ptr infinite @ptr:refresh="onRefresh" @inifinite="onInfiniteScroll" -->
    <f7-navbar title="宠伢">
      <f7-nav-right>
        <f7-link class="icon iconfont icon-feedback3" @click="triggePublisherClick"></f7-link>
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
      :infinite="isIninite"
      @ptr:refresh="onRefresh"
      @infinite="loadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <card-list :loadCardData="tweets"></card-list>
    </f7-page-content>

    <f7-page-content id="tab-topics" class="page-content" tab>
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <topic-list></topic-list>
    </f7-page-content>
  </f7-page>
</template>

<style>
/* .me-home-subnavbar.subnavbar {
  margin-top: 70%;
} */
</style>

<script>
import CardList from '../components/card-list.vue'
import BannerSwiper from '../components/banner-swiper.vue'
import TopicList from '../components/topic-list.vue'
import $$ from 'dom7'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState, mapGetters } = createNamespacedHelpers('home')

export default {
  components: {
    CardList,
    BannerSwiper,
    TopicList
  },
  computed: {
    ...mapState(['tweets']),
    ...mapGetters(['isTweetLoadAll'])
  },
  data() {
    return {
      bannerImages: [],
      showPreloader: true,
      allowInfinite: true,
      isIninite: true
    }
  },
  created() {
    this.getBannerImages()
    this.getIndexTweets()
  },
  methods: {
    ...mapActions(['getIndexTweets', 'loadMoreTweets']),
    onRefresh(event, done) {
      // TODO: 重载数据
      setTimeout(() => {
        this.getIndexTweets()
        done()
      }, 500)
    },
    triggePublisherClick() {
      this.$f7router.navigate('/publisher')
    },
    loadMore(el, event) {
      // TODO: 加载更多
      if (!this.allowInfinite) {
        return
      }

      this.allowInfinite = false

      console.log(22222222222222222222)
      setTimeout(() => {
        this.loadMoreTweets()
        this.allowInfinite = true

        if (this.isTweetLoadAll) {
          // $$('.preloader.infinite-scroll-preloader').remove()
          this.isIninite = false
        }
      }, 1000)
    },
    getBannerImages() {
      // TODO: 获取轮播图图片信息

      setTimeout(() => {
        this.bannerImages = [
          {
            id: 1,
            imgUrl: 'https://loremflickr.com/1000/700/nature?lock=5'
          },
          {
            id: 2,
            imgUrl: 'https://loremflickr.com/1000/700/nature?lock=3'
          },
          {
            id: 3,
            imgUrl: 'https://loremflickr.com/1000/700/nature?lock=7'
          },
          {
            id: 4,
            imgUrl: 'https://loremflickr.com/1000/700/nature?lock=1'
          },
          {
            id: 5,
            imgUrl: 'https://loremflickr.com/1000/700/nature?lock=8'
          }
        ]
      }, 1000)
    }
  }
}
</script>
