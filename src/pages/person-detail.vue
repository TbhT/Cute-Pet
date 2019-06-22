<template>
  <f7-page name="personDetail" no-toolbar @page:afterin="onPageAfterIn">
    <f7-navbar :back-link="backText" sliding title="个人信息"></f7-navbar>

    <f7-block-title>用户信息</f7-block-title>
    <f7-list class="me-person-detail-list" v-if="userInfo">
      <f7-list-item header="姓名" :title="userInfo.name"></f7-list-item>
      <f7-list-item header="昵称" :title="userInfo.nickname"></f7-list-item>
      <f7-list-item header="性别" :title="userInfo.gender"></f7-list-item>
      <f7-list-item header="年龄" :title="userInfo.age"></f7-list-item>
      <f7-list-item media-item header="家庭住址" :text="userInfo.homeAddress"></f7-list-item>
      <f7-list-item media-item header="工作地址" :text="userInfo.workAddress"></f7-list-item>
    </f7-list>

    <f7-block v-else inset>暂无相关信息</f7-block>
  </f7-page>
</template>

<script>
import { getUserInfo } from '../utils'

export default {
  data() {
    return {
      backText: '返回',
      userInfo: null
    }
  },
  methods: {
    async onPageAfterIn() {
      try {
        const {iRet, data} = await getUserInfo()

        if (iRet === 0) {
          this.userInfo = data.userInfo
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

<style scoped>
.me-person-detail-list {
  word-break: break-all;
}
</style>
