<template>
  <f7-page no-toolbar>
    <f7-navbar title="我的赛事" back-link="返回"></f7-navbar>

    <f7-list media-list class="me-media-list me-acitivities" v-if="activities.length">
      <f7-list-item link="#" :key="activity.activityId" v-for="activity in activities" media-item></f7-list-item>
    </f7-list>

    <f7-block v-else inset>
      <p>暂无赛事信息</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      activities: []
    }
  }
}
</script>

<style>
</style>
