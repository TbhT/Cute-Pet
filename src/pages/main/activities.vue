<template>
  <banner-swiper :bannerImages="bannerImages"></banner-swiper>
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
