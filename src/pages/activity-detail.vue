<template>
  <f7-page name="activityDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="活动信息"></f7-navbar>

    <f7-block-title>赛事信息</f7-block-title>
    <f7-list class="me-activity-detail-list" v-if="activityInfo">
      <f7-list-item header="活动名称" :title="activityInfo.name"></f7-list-item>
      <f7-list-item header="活动开始时间" :title="activityInfo.beginTime"></f7-list-item>
      <f7-list-item header="活动结束时间" :title="activityInfo.endTime"></f7-list-item>
      <f7-list-item header="报名总人数" :title="activityInfo.totalCount"></f7-list-item>
      <f7-list-item header="报名总费用" :title="activityInfo.totalCost"></f7-list-item>
      <f7-list-item header="报名开始时间" :title="activityInfo.joinBeginTime"></f7-list-item>
      <f7-list-item header="报名结束时间" :title="activityInfo.joinEndTime"></f7-list-item>
      <f7-list-item media-item header="主办方" :text="activityInfo.organizer"></f7-list-item>
      <f7-list-item media-item header="承办方" :text="activityInfo.coorganizer"></f7-list-item>
      <f7-list-item media-item header="活动地点" :text="activityInfo.place"></f7-list-item>
    </f7-list>

    <f7-block v-else inset>暂无赛事信息</f7-block>
  </f7-page>
</template>

<style scoped>
.me-activity-detail-list {
  word-break: break-all;
}
</style>


<script>
import { getActivityDetail } from '../utils'

export default {
  props: {
    activityId: null
  },
  data() {
    return {
      backText: '返回',
      activityInfo: null
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getActivityInfo()
    },
    async getActivityInfo() {
      try {
        const data = await getActivityDetail({ activityId: this.activityId })

        if (data.iRet === 0) {
          this.activityInfo = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>
