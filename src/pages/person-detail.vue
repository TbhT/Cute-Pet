<template>
  <f7-page name="personDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding title="个人信息"></f7-navbar>

    <f7-block-title>用户信息</f7-block-title>
    <f7-list class="me-person-detail-list">
      <f7-list-item header="姓名" :title="userInfo.name"></f7-list-item>
      <f7-list-item header="昵称" :title="userInfo.nickname"></f7-list-item>
      <f7-list-item header="性别" :title="userInfo.gender"></f7-list-item>
      <f7-list-item header="年龄" :title="userInfo.age"></f7-list-item>
      <f7-list-item media-item header="家庭住址" :text="userInfo.homeAddress"></f7-list-item>
      <f7-list-item media-item header="工作地址" :text="userInfo.workAddress"></f7-list-item>
    </f7-list>

    <f7-block-title>宠物信息</f7-block-title>
    <f7-list class="me-pet-detail-list">
      <f7-list-item header="宠物昵称" :title="petInfo.nickname"></f7-list-item>
      <f7-list-item header="宠物性别" :title="petInfo.gender"></f7-list-item>
      <f7-list-item header="年龄" :title="petInfo.age"></f7-list-item>
      <f7-list-item header="疫苗状况" :title="petInfo.vaccineStatus"></f7-list-item>
      <f7-list-item header="宠物类型" :title="petInfo.petType"></f7-list-item>
      <f7-list-item header="品种" :title="petInfo.type"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    petInfo: {
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

<style scoped>
.me-person-detail-list {
  word-break: break-all;
}
</style>
