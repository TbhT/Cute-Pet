<template>
  <f7-page name="marketDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding :title="marketDetail.name"></f7-navbar>

    <f7-block-title>商家信息</f7-block-title>
    <f7-list class="me-market-detail-list">
      <f7-list-item header="商家名称" :title="marketDetail.name"></f7-list-item>
      <f7-list-item header="联系人" :title="marketDetail.contact"></f7-list-item>
      <f7-list-item header="联系方式" :title="marketDetail.phoneNumber"></f7-list-item>
      <f7-list-item media-item header="地点" :text="marketDetail.place"></f7-list-item>
      <f7-list-item header="工作时间" :text="marketDetail.workTime"></f7-list-item>
      <f7-list-item header="简介" :text="marketDetail.intro"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style scoped>
.me-market-detail-list {
  word-break: break-all;
}
</style>


<script>
export default {
  props: {
    marketDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backText: '返回'
    }
  }
}
</script>

