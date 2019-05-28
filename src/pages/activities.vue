<template>
  <f7-page id="activitiesView" :page-content="false" tabs with-subnavbar>
    <f7-navbar title="宠伢">
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
      inifite
      ptr
      infinite
      @ptr:refresh="onRefresh"
      @infinite="loadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="competeActivities.length" :competeActivities="competeActivities"></compete-activity>
      <f7-block v-else>暂无宠物赛事~</f7-block>
    </f7-page-content>

    <f7-page-content
      id="me-activity-2"
      tab
      inifite
      ptr
      infinite
      @ptr:refresh="onRefresh"
      @infinite="loadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="competeActivities.length" :competeActivities="competeActivities"></compete-activity>
      <f7-block v-else>暂无宠物赛事~</f7-block>
    </f7-page-content>

    <f7-page-content
      id="me-activity-3"
      tab
      inifite
      ptr
      infinite
      @ptr:refresh="onRefresh"
      @infinite="loadMore"
    >
      <banner-swiper :bannerImages="bannerImages"></banner-swiper>
      <compete-activity v-if="competeActivities.length" :competeActivities="competeActivities"></compete-activity>
      <f7-block v-else>暂无宠物赛事~</f7-block>
    </f7-page-content>

    <f7-fab position="right-bottom" slot="fixed" color="orange" href="/activities/add">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
import BannerSwiper from '../components/banner-swiper.vue'
import CompeteActivity from '../components/competeActivity.vue'

export default {
  components: {
    BannerSwiper,
    CompeteActivity
  },
  data() {
    return {
      bannerImages: [],
      competeActivities: [
        {
          activityId: 1,
          imgUrl: 'https://loremflickr.com/1000/700/nature?lock=5',
          peopleCount: 10,
          totalCount: 100,
          petCost: 200,
          peopleCose: 250,
          place: '江夏区',
          title: '活动1 哈哈哈哈哈'
        },
        {
          activityId: 116,
          imgUrl: 'https://loremflickr.com/1000/700/nature?lock=8',
          peopleCount: 10,
          totalCount: 100,
          petCost: 200,
          peopleCose: 250,
          place: '江夏区',
          title: '活动2 啊啊啊啊啊啊'
        },
        {
          activityId: 136,
          imgUrl: 'https://loremflickr.com/1000/700/nature?lock=4',
          peopleCount: 10,
          totalCount: 100,
          petCost: 200,
          peopleCose: 250,
          place: '江夏区',
          title: '活动3 iiiiiiiiii'
        }
      ],
      partyActivities: [],
      travelActivities: []
    }
  },
  created() {
    this.getBannerImages()
  },
  methods: {
    onRefresh() {},
    loadMore() {},
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
