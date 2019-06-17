<template>
  <f7-list media-list class="me-media-list me-compete-activity">
    <f7-list-item
      :key="activity.activityId"
      v-for="(activity) in competeActivities"
      media-item
      :subtitle="formatSubtitle(activity)"
      :title="activity.title"
      :text="formatPlace(activity)"
      @click="trigeClick(activity.activityId)"
    >
      <img :src="activity.imgUrl" slot="media" width="80" class="lazy lazy-fade-in">
    </f7-list-item>
  </f7-list>
</template>



<script>
export default {
  props: {
    competeActivities: {
      type: Array
    }
  },
  methods: {
    trigeClick() {
      // TODO: 点击活动
    },
    formatSubtitle(data) {
      return `名额: ${data.peopleCount}/${data.totalCount} 人`
    },
    formatPlace(data) {
      return `活动地点: ${data.place}`
    }
  }
}
</script>

<style>
</style>
