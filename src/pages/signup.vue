<template>
  <f7-page class="me-sign-up" no-toolbar>
    <f7-navbar back-link="返回" sliding title="注册"></f7-navbar>

    <f7-list no-hairlines-md>

      <f7-list-input
        :value="nickname"
        @input="nickname = $event.target.value"
        label="昵称"
        type="text"
        placeholder="昵称"
      ></f7-list-input>

      <f7-list-input
        error-message="手机号格式不正确"
        :error-message-force="showUsernameError"
        :value="username"
        @input="username = $event.target.value"
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
      nickname: '',
      username: '',
      password: '',
      showUsernameError: false,
      showPasswordError: false,
      passwordErrorMsg: ''
    }
  },
  methods: {
    resetAllProps() {
      this.nickname = ''
      this.username = ''
      this.password = ''
      this.showUsernameError = false
      this.showPasswordError = false
      this.passwordErrorMsg = ''
    },
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
    async submitSignupData() {
      if (!phoneRegExp.test(this.username)) {
        this.showUsernameError = true
        setTimeout(() => {
          this.showUsernameError = false
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
          nickname: this.nickname,
          username: this.username,
          password: this.password,
        })

        if (data.iRet === 0) {
          this.toast('注册成功')
          this.resetAllProps()
        } else {
          if (data.data[0] === '该用户名已被注册') {
            data.data[0] = '该手机号已被注册'
          }
          this.toast(data.data[0], false)
        }
      } catch (error) {
        console.error(error)
        this.$f7.dialog.alert('注册失败, 请重试')
      }
    },
    back() {
      this.$f7router.back()
    }
  }
}
</script>

<style>
</style>
