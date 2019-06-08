<template>
  <f7-page class="me-sign-up" no-toolbar>
    <f7-navbar back-link="返回" sliding title="注册"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        :value="name"
        @input="name = $event.target.value"
        label="姓名"
        type="text"
        placeholder="姓名"
      ></f7-list-input>

      <f7-list-input
        :value="email"
        @input="email = $event.target.value"
        label="邮箱"
        type="email"
        placeholder="example@example.com"
      ></f7-list-input>

      <f7-list-input
        :value="nickname"
        @input="nickname = $event.target.value"
        label="昵称"
        type="text"
        placeholder="昵称"
      ></f7-list-input>

      <f7-list-input
        error-message="手机号格式不正确"
        :error-message-force="showUsernamError"
        :value="phoneNumber"
        @input="phoneNumber = $event.target.value"
        label="手机号"
        placeholder="手机号"
      ></f7-list-input>

      <f7-list-input
        :error-message="passwordErrorMsg"
        :error-message-force="showPasswordError"
        :value="password"
        @input="password = $event.target.value"
        label="密码"
        type="password"
        placeholder="密码"
      ></f7-list-input>

      <f7-list-input :value="gender" @input="gender = $event.target.value" label="性别" type="select">
        <option value="1">男</option>
        <option value="2">女</option>
        <option value="3">待定</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range label slot="input" :value="1" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input
        @input="homeAddress = $event.target.value"
        :value="homeAddress"
        label="居住地址"
        type="textarea"
        placeholder="居住地址"
        resizable
      ></f7-list-input>

      <f7-list-input
        @input="workAddress = $event.target.value"
        :value="workAddress"
        label="工作单位"
        type="textarea"
        placeholder="工作单位"
        resizable
      ></f7-list-input>
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
import { getUserSignUp } from '../utils'
const phoneRegExp = new RegExp(
  '^(?=\\d{11}$)^1(?:3\\d|4[57]|5[^4\\D]|66|7[^249\\D]|8\\d|9[89])\\d{8}$'
)

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
      workAddress: '',
      showUsernamError: false,
      showPasswordError: false,
      passwordErrorMsg: ''
    }
  },
  methods: {
    async submitSignupData() {
      console.log(phoneRegExp.test(this.phoneNumber), this.phoneNumber)
      if (!phoneRegExp.test(this.phoneNumber)) {
        this.showUsernamError = true
        setTimeout(() => {
          this.showUsernamError = false
        }, 1000)
        return
      }

      if (this.password.length === 0) {
        this.showPasswordError = true
        this.passwordErrorMsg = '密码不能为空'
        setTimeout(() => {
          this.showPasswordError = false
        }, 1000)
        return
      } else if (this.password.length < 6) {
        this.showPasswordError = true
        this.passwordErrorMsg = '密码不能小于6位'
        setTimeout(() => {
          this.showPasswordError = false
        }, 1000)
        return
      } else if (this.password.length > 64) {
        this.showPasswordError = true
        this.passwordErrorMsg = '密码不能大于64位'
        setTimeout(() => {
          this.showPasswordError = false
        }, 1000)
        return
      }

      try {
        const data = await getUserSignUp({
          name: this.name,
          email: this.email,
          nickname: this.nickname,
          phoneNumber: this.phoneNumber,
          password: this.password,
          gender: this.gender,
          age: this.age,
          homeAddress: this.homeAddress,
          workAddress: this.workAddress
        })
      } catch (error) {
        console.error(error)
        this.$f7.dialog.alert('注册失败, 请重试')
      }

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
