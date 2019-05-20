<template>
  <f7-page id="activitiesView" ptr infinite>
    <banner-swiper :bannerImages="bannerImages"></banner-swiper>
  </f7-page>
</template>

<script>
import BannerSwiper from '../../components/banner-swiper.vue'

export default {
  components: {
    BannerSwiper
  },
  data() {
    return {
      bannerImages: []
    }
  }
}
</script>
