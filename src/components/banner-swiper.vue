<template>
  <f7-swiper :params="params" init pagination class="me-swiper">
    <f7-swiper-slide v-for="(bannerImage, index) in bannerImages" :key="index">
      <img :src="bannerImage.imgUrl" class="lazy">
    </f7-swiper-slide>
  </f7-swiper>
</template>

<style scoped>
.me-swiper img {
  width: 100%;
  height: 20%;
}
div.me-swiper.swiper-container {
  margin-top: 0px;
}
</style>


<script>
export default {
  props: {
    bannerImages: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  mounted() {},
  data() {
    return {
      loop: true,
      params: {
        speed: 400,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
