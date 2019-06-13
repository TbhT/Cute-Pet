<template>
  <f7-page class="me-add-market" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加商家"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="商家名称"
        type="text"
        :value="name"
        placeholder="商家名称"
        error-message="商家名称不能为空"
        :error-message-force="showNameErrorMsg"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系人"
        type="text"
        :value="contact"
        placeholder="联系人"
        error-message="联系人不能为空"
        :error-messsage-force="showContactErrorMsg"
        @input="contact = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系方式"
        type="text"
        :value="phoneNumber"
        placeholder="联系方式"
        error-message="联系方式不能为空"
        :error-message-force="showPhoneNumberErrorMsg"
        @input="phoneNumber = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="商家地址"
        type="text"
        :value="place"
        placeholder="商家地址"
        error-message="商家地址不能为空"
        :error-message-force="showPlaceErrorMsg"
        @input="place = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="服务类型"
        type="select"
        :value="serveType"
        error-message="服务类型不能为空"
        :error-message-force="showServeTypeErrorMsg"
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
        type="textarea"
        resizable
        :value="workTime"
        @input="workTime = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="简介"
        type="textarea"
        resizable
        :value="intro"
        @input="intro = $event.target.value"
      ></f7-list-input>
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
      picture: '',
      showNameErrorMsg: false,
      showContactErrorMsg: false,
      showPhoneNumberErrorMsg: false,
      showPlaceErrorMsg: false,
      showPictureErrorMsg: false,
      showServeTypeErrorMsg: false
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
        setTimeout(() => {
          this.showNameErrorMsg = false
          this.showContactErrorMsg = false
          this.showPhoneNumberErrorMsg = false
          this.showPlaceErrorMsg = false
          this.showServeTypeErrorMsg = false
        }, 2000)
        if (!this.name) {
          return (this.showNameErrorMsg = true)
        }

        if (!this.contact) {
          return (this.showContactErrorMsg = true)
        }

        if (!this.phoneNumber) {
          return (this.showPhoneNumberErrorMsg = true)
        }

        if (!this.place) {
          return (this.showPlaceErrorMsg = true)
        }

        if (!this.serveType < 0) {
          return (this.showServeTypeErrorMsg = true)
        }

        const data = await createMarket({
          name: this.name,
          contact: this.contact,
          phoneNumber: this.phoneNumber,
          place: this.place,
          serveType: this.serveType,
          workTime: this.workTime,
          intro: this.intro
        })

        if (data.iRet === 0) {
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
