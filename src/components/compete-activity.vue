<template>
  <f7-list media-list class="me-media-list me-compete-activity">
    <f7-list-item
      :key="activity.activityId"
      v-for="(activity) in competeActivities"
      media-item
      :subtitle="formatSubtitle(activity)"
      :title="activity.name"
      :text="formatPlace(activity)"
      :link="getDetailLink(activity)"
    >
      <img :src="activity.image" slot="media" width="80" class="lazy lazy-fade-in">
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
    getDetailLink(activity) {
      return `/activities/detail/${activity.activityId}`
    },
    formatSubtitle(data) {
      return `总人数: ${data.totalCount} 人`
    },
    formatPlace(data) {
      return `活动地点: ${data.place}`
    }
  }
}
</script>
