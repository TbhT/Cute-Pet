<template>
  <f7-page no-toolbar>
    <f7-navbar title="我的赛事" back-link="返回"></f7-navbar>

    <f7-list media-list class="me-media-list me-acitivities" v-if="activities.length">
      <!-- <f7-list-item link="#" :key="activity.activityId" v-for="activity in activities" media-item></f7-list-item> -->

      <f7-list-item
        :key="activity.activityId"
        v-for="(activity) in activities"
        media-item
        :subtitle="formatSubtitle(activity)"
        :title="activity.name"
        :text="formatPlace(activity)"
      >
        <img :src="activity.image" slot="media" width="80" class="lazy lazy-fade-in">
      </f7-list-item>
    </f7-list>

    <f7-block v-else inset>
      <p>暂无赛事信息</p>
    </f7-block>
  </f7-page>
</template>

<script>
import { getCompeteActivities } from '../store/mock'

export default {
  methods: {
    formatSubtitle(data) {
      return `名额: ${data.totalCount} 人`
    },
    formatPlace(data) {
      return `活动地点: ${data.place}`
    }
  },
  data() {
    return {
      activities: []
    }
  },
  async mounted() {
    const data = await getCompeteActivities()
    this.activities = data
  }
}
</script>

<style>
</style>
