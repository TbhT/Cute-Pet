<template>
  <f7-page name="marketDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="商家信息"></f7-navbar>

    <f7-block-title>商家信息</f7-block-title>

    <f7-list class="me-market-detail-list" v-if="marketInfo">
      <f7-list-item header="商家名称" :title="marketInfo.name"></f7-list-item>
      <f7-list-item header="联系人" :title="marketInfo.contact"></f7-list-item>
      <f7-list-item header="联系方式" :title="marketInfo.phoneNumber"></f7-list-item>
      <f7-list-item media-item header="地点" :text="marketInfo.place"></f7-list-item>
      <f7-list-item header="工作时间" :text="marketInfo.workTime"></f7-list-item>
      <f7-list-item header="简介" :text="marketInfo.intro"></f7-list-item>
    </f7-list>

    <f7-block v-else inset>暂无商家信息</f7-block>
  </f7-page>
</template>

<style scoped>
.me-market-detail-list {
  word-break: break-all;
}
</style>


<script>
import { getMarketDetail } from '../utils'
export default {
  props: {
    marketId: null
  },
  data() {
    return {
      backText: '返回',
      marketInfo: null
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getMarketInfo()
    },
    async getMarketInfo() {
      try {
        const data = await getMarketDetail({ marketId: this.marketId })
        if (data.iRet === 0) {
          this.marketInfo = data.data
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

