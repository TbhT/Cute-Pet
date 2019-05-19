<template>
  <f7-page id="homeView" ptr infinite @ptr:refresh="onRefresh" @inifinite="onInfiniteScroll">
    <banner-swiper :bannerImages="bannerImages"></banner-swiper>

    <f7-toolbar tabbar>
      <f7-link tab-link="#tab-tweets">精选</f7-link>
      <f7-link tab-link="#tab-topics">话题</f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="tab-tweets" tab-active>
        <card-list :loadCardData="tweets"></card-list>
      </f7-tab>
      <f7-tab id="tab-topics">
        <topics></topics>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import CardList from '../../components/card-list.vue'
import BannerSwiper from '../../components/banner-swiper.vue'
import Topics from '../../components/topics.vue'

export default {
  components: {
    CardList,
    BannerSwiper,
    Topics
  },
  data() {
    return {
      bannerImages: [],
      tweets: [],
      topics: []
    }
  },
  mounted() {
    this.getAllTweets()
    this.getBannerImages()
  },
  methods: {
    onRefresh() {
      // TODO: 
    },
    onInfiniteScroll() {
      // TODO: 
    },
    getAllTweets() {
      // TODO: 获取所有的信息流

      // 模拟ajax请求
      setTimeout(() => {
        this.comments = [
          {
            tweetId: 1,
            userId: 10,
            nickname: 'Tom',
            createTime: Date.now(),
            text: 'yes aaaaaaaaaaaaaaaaaa',
            image: 'https://loremflickr.com/1000/700/nature?lock=5'
          },
          {
            tweetId: 2,
            userId: 11,
            nickname: 'Alice',
            createTime: Date.now(),
            text: 'lfakdjfklajdkflajldkjflkajdlfkjalkdjflkajdslfjald',
            imgage: 'https://loremflickr.com/1000/700/nature?lock=3'
          },
          {
            tweetId: 4,
            userId: 114,
            nickname: 'Hello',
            createTime: Date.now(),
            text: 'dklsjfaldjflkajdlfkjalkfjlakjflkajldfjaldjflkajfljalf',
            image: 'https://loremflickr.com/1000/700/nature?lock=7'
          },
          {
            tweetId: 5,
            userId: 90,
            nickname: 'James',
            createTime: Date.now(),
            text:
              'lkdfjakldfa 发快递了放假啊看到法兰克都快疯了安居房卡房间里肯德基奥菲罗克的',
            image: 'https://loremflickr.com/1000/700/nature?lock=8'
          }
        ]
      }, 2000)
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
