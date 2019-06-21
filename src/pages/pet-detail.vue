<template>
  <f7-page name="petDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="宠物信息"></f7-navbar>

    <f7-block-title>宠物信息</f7-block-title>
    <f7-list class="me-pet-detail-list" v-if="petInfo">
      <f7-list-item header="宠物昵称" :title="petDetail.nickname"></f7-list-item>
      <f7-list-item header="宠物性别" :title="petDetail.gender"></f7-list-item>
      <f7-list-item header="年龄" :title="petDetail.age"></f7-list-item>
      <f7-list-item header="疫苗状况" :title="petDetail.vaccineStatus"></f7-list-item>
      <f7-list-item header="宠物类型" :title="petDetail.petType"></f7-list-item>
      <f7-list-item header="品种" :title="petDetail.type"></f7-list-item>
    </f7-list>

    <f7-block v-else inset>暂无宠物信息</f7-block>
  </f7-page>
</template>

<script>
import { getPetDetail } from '../utils'

export default {
  props: {
    petId: null
  },
  data() {
    return {
      backText: '返回',
      petInfo: null
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getPetDetail()
    },
    async getPetDetail() {
      try {
        const data = await getPetDetail({ petId: this.petId })

        if (data.iRet === 0) {
          this.petInfo = data.data
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
