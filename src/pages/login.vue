<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>宠伢</f7-login-screen-title>

    <f7-list form>
      <f7-list-input
        label="手机号"
        type="text"
        placeholder="12366660000"
        :error-message="usernameErrorMsg"
        :error-message-force="showUsernamError"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="密码"
        type="password"
        placeholder="密码"
        :error-message="passwordErrorMsg"
        :error-message-force="showPasswordError"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-list>
      <f7-list-button @click="signIn">登录</f7-list-button>
      <f7-list-button @click="signUp">注册</f7-list-button>
    </f7-list>
  </f7-page>
</template>

<script>
import { getUserLogin } from '../utils'
import { mapState, mapMutations } from 'vuex'
const phoneRegExp = new RegExp(
  '^(?=\\d{11}$)^1(?:3\\d|4[57]|5[^4\\D]|66|7[^249\\D]|8\\d|9[89])\\d{8}$'
)

export default {
  data() {
    return {
      username: '',
      password: '',
      showUsernamError: false,
      showPasswordError: false,
      passwordErrorMsg: '',
      usernameErrorMsg: ''
    }
  },
  methods: {
    ...mapMutations(['updateUserStatus']),
    async signIn() {
      const self = this
      const app = self.$f7
      const router = self.$f7router
      const phoneFlag = phoneRegExp.test(this.username)
      const emptyFlag = this.username.length === 0

      if (!phoneFlag || emptyFlag) {
        this.showUsernamError = true
        this.usernameErrorMsg = emptyFlag ? '请输入手机号' : '手机号格式不正确'

        setTimeout(() => {
          this.showUsernamError = false
          this.usernameErrorMsg = ''
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
        this.$f7.preloader.show()

        const data = await getUserLogin({
          username: this.username,
          password: this.password
        })

        this.$f7.preloader.hide()

        if (data.iRet === 0) {
          this.updateUserStatus({
            userId: data.data.userId,
            userInfo: data.data
          })
          // this.$f7.router.navigate('/')
          this.$f7.views.main.router.navigate('/')
          location.reload()
        } else {
          console.error(data)
          if (data.data[0] === 'Incorrect username or password.') {
            this.toast('密码或者手机号不正确')
          } else {
            this.toast('登录失败')
          }
        }
      } catch (error) {
        this.$f7.preloader.hide()
        console.error(error)
        this.toast('登录失败')
      }
    },
    signUp() {
      this.$f7router.navigate('/user/signup')
    },
    toast(msg) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center'
      })
      toast.open()
    }
  }
}
</script>
