<template>
  <f7-swiper :params="params">
    <f7-swiper-slide v-for="(bannerImage, index) in bannerImages" :key="index">
      <img data-src="bannerImage.imgUrl" class="swiper-lazy">
      <div class="swiper-lazy-preloader"></div>
    </f7-swiper-slide>
  </f7-swiper>
</template>

<script>
export default {
  props: {
    bannerImages: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      params: {}
    }
  }
}
</script>
