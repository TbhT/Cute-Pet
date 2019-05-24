<template>
  <f7-swiper :params="params" init pagination class="me-swiper">
    <f7-swiper-slide v-for="(bannerImage, index) in bannerImages" :key="index">
      <img :src="bannerImage.imgUrl" class="lazy">
    </f7-swiper-slide>
  </f7-swiper>
</template>

<style>
.me-swiper.swiper-container.swiper-container {
  margin-top: 45px;
}
.me-swiper img {
  width: 100%;
  height: 20%;
}
#homeView div.me-swiper.swiper-container {
  margin-top: 0px;
}
</style>


<script>
export default {
  props: {
    bannerImages: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted() {},
  data() {
    return {
      params: {
        speed: 400,
        spaceBetween: 10,
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>
