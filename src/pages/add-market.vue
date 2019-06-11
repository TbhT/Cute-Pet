<template>
  <f7-page class="me-add-market" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加商家"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="商家名称"
        type="text"
        :value="name"
        placeholder="商家名称"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系人"
        type="text"
        :value="contact"
        placeholder="联系人"
        @input="contact = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系方式"
        type="text"
        :value="phoneNumber"
        placeholder="联系方式"
        @input="phoneNumber = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="商家地址"
        type="text"
        :value="place"
        placeholder="商家地址"
        @input="place = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="服务类型"
        type="select"
        :value="serveType"
        @input="serveType = $event.target.value"
      >
        <option value="1">医疗</option>
        <option value="2">美容</option>
        <option value="3">训练</option>
        <option value="4">拍照</option>
        <option value="5">寄养</option>
      </f7-list-input>

      <f7-list-input
        label="工作时间"
        type="text"
        :value="workTime"
        @input="workTime = $event.target.value"
      ></f7-list-input>

      <f7-list-input label="简介" type="text" :value="intro" @input="intro = $event.target.value"></f7-list-input>
    </f7-list>

    <f7-block>
      <f7-row>
        <f7-button class="col" raised @click="back">取消</f7-button>
        <f7-button class="col" fill raised color="green" @click="submitMarketData">确认</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import { createMarket } from '../utils'
export default {
  data() {
    return {
      name: '',
      contact: '',
      phoneNumber: '',
      place: '',
      serveType: -1,
      workTime: '',
      intro: '',
      picture: ''
    }
  },
  methods: {
    toast(msg, open = true) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center',
        on: {
          close: () => {
            if (open) {
              this.back()
            }
          }
        }
      })
      toast.open()
    },
    back() {
      this.$f7router.back()
    },
    resetAllProps() {
      this.name = ''
      this.contact = ''
      this.phoneNumber = ''
      this.place = ''
      this.serveType = -1
      this.workTime = ''
      this.intro = ''
      this.picture = ''
    },
    async submitMarketData() {
      try {
        const data = await createMarket({
          name: this.name,
          contact: this.contact,
          phoneNumber: this.phoneNumber,
          place: this.place,
          serveType: this.serveType,
          workTime: this.workTime,
          intro: this.intro,
          picture: this.picture
        })

        if (data) {
          this.toast('创建活动成功')
        } else {
          this.toast('创建活动失败', false)
          console.error(data)
        }
        this.resetAllProps()
      } catch (error) {
        console.error(error)
        this.$f7.preloader.hide()
        this.toast('创建活动失败', false)
      }
    }
  }
}
</script>

<style>
</style>
