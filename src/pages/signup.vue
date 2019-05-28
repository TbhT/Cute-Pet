<template>
  <f7-page class="me-sign-up" no-toolbar>
    <f7-navbar back-link="返回" sliding title="注册"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input label="姓名" type="text" placeholder="姓名"></f7-list-input>

      <f7-list-input label="邮箱" type="email" placeholder="example@example.com"></f7-list-input>

      <f7-list-input label="昵称" type="text" placeholder="昵称"></f7-list-input>

      <f7-list-input label="手机号" type="tel" placeholder="手机号"></f7-list-input>

      <f7-list-input label="密码" type="password" placeholder="密码"></f7-list-input>

      <f7-list-input label="性别" type="select">
        <option value="1">男</option>
        <option value="2">女</option>
        <option value="3">待定</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range label slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input label="居住地址" type="textarea" placeholder="居住地址" resizable></f7-list-input>

      <f7-list-input label="工作单位" type="textarea" placeholder="工作单位" resizable></f7-list-input>
    </f7-list>

    <f7-block>
      <f7-row>
        <f7-button class="col" @click="back" raised>取消</f7-button>
        <f7-button class="col" @click="submitSignupData" fill raised color="green">注册</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import DateTime from '../components/date-time.vue'

export default {
  components: {
    DateTime
  },
  data() {
    return {
      name: '',
      email: '',
      nickname: '',
      phoneNumber: '',
      password: '',
      gender: '',
      age: '',
      homeAddress: '',
      workAddress: ''
    }
  },
  methods: {
    submitSignupData() {
      // TODO: 提交数据
      this.$f7.preloader.show()
      setTimeout(() => {
        this.$f7.preloader.hide()
        this.$f7router.back()
      }, 1000)
    },
    back() {
      this.$f7router.back()
    }
  }
}
</script>

<style>
</style>
