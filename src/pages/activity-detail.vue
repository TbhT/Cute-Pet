<template>
  <f7-page name="activityDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding :title="activityDetail.name"></f7-navbar>

    <f7-block-title>赛事信息</f7-block-title>
    <f7-list class="me-activity-detail-list">
      <f7-list-item header="活动开始时间" :title="activityDetail.beginTime"></f7-list-item>
      <f7-list-item header="活动结束时间" :title="activityDetail.endTime"></f7-list-item>
      <f7-list-item header="报名总人数" :title="activityDetail.totalCount"></f7-list-item>
      <f7-list-item header="报名总费用" :title="activityDetail.totalCost"></f7-list-item>
      <f7-list-item header="报名开始时间" :title="activityDetail.joinBeginTime"></f7-list-item>
      <f7-list-item header="报名结束时间" :title="activityDetail.joinEndTime"></f7-list-item>
      <f7-list-item media-item header="主办方" :text="activityDetail.organizer"></f7-list-item>
      <f7-list-item media-item header="承办方" :text="activityDetail.coorganizer"></f7-list-item>
      <f7-list-item media-item header="活动地点" :text="activityDetail.place"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style scoped>
.me-activity-detail-list {
  word-break: break-all;
}
</style>


<script>
export default {
  props: {
    activityDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backText: '返回'
    }
  },
  computed: {
    style() {
      return `background-image:url(${activityDetail.image})`
    }
  }
}
</script>

<style>
</style>
