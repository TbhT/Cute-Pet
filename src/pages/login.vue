<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>宠伢</f7-login-screen-title>

    <f7-list form>
      <f7-list-input
        label="手机号"
        type="text"
        placeholder="请输入手机号"
        :error-message-force="showUsernameError"
        :error-message="usernameErrorMsg"
        :value="username"
        @input="username = $event.target.value"
        required
      ></f7-list-input>

      <f7-list-input
        label="验证码"
        type="text"
        placeholder="输入验证码"
        :error-message="passwordErrorMsg"
        required
        validate
        pattern="[0-9]*"
        clear-button
        @input="password = $event.target.value"
      >
        <f7-button
          :disabled="disabledButton"
          type="button"
          class="me-button"
          color="blue"
          slot="content-end"
          :style="disabledButton ? {color: 'grey'} : ''"
          @click.prevent.self="validateCodeClick"
        >发送验证码</f7-button>
      </f7-list-input>
    </f7-list>

    <f7-list>
      <f7-list-button @click="signIn">登录</f7-list-button>
      <!-- <f7-list-button @click="signUp">注册</f7-list-button> -->
    </f7-list>
  </f7-page>
</template>

<style scoped>
.me-button {
  width: 60%;
  height: 100%;
}
</style>

<script>
import { loginWithUser, getValidateCode } from '../utils'
import { mapState, mapMutations } from 'vuex'
const phoneRegExp = new RegExp(
  '^(?=\\d{11}$)^1(?:3\\d|4[57]|5[^4\\D]|66|7[^249\\D]|8\\d|9[89])\\d{8}$'
)

export default {
  data() {
    return {
      username: '',
      password: '',
      showUsernameError: false,
      showPasswordError: false,
      passwordErrorMsg: '验证码输入不正确',
      usernameErrorMsg: '',
      disabledButton: false
    }
  },
  methods: {
    ...mapMutations(['updateUserStatus']),
    async validateCodeClick() {
      if (this.disabledButton) {
        return
      }

      const phoneFlag = phoneRegExp.test(this.username)
      const emptyFlag = this.username.length === 0

      if (!phoneFlag || emptyFlag) {
        this.showUsernameError = true
        this.usernameErrorMsg = emptyFlag ? '请输入手机号' : '手机号格式不正确'

        setTimeout(() => {
          this.showUsernameError = false
          this.usernameErrorMsg = ''
        }, 1000)

        return
      }

      this.disabledButton = true
      const result = await getValidateCode({ mobile: this.username })
      setTimeout(() => {
        this.disabledButton = false
      }, 60000)
      console.log(result)
    },
    async signIn() {
      const self = this
      const app = self.$f7
      const router = self.$f7router
      const phoneFlag = phoneRegExp.test(this.username)
      const emptyFlag = this.username.length === 0

      if (!phoneFlag || emptyFlag) {
        this.showUsernameError = true
        this.usernameErrorMsg = emptyFlag ? '请输入手机号' : '手机号格式不正确'

        setTimeout(() => {
          this.showUsernameError = false
          this.usernameErrorMsg = ''
        }, 1000)

        return
      }

      if (this.password.length === 0) {
        this.showPasswordError = true
        this.passwordErrorMsg = '验证码不能为空'

        setTimeout(() => {
          this.showPasswordError = false
        }, 1000)

        return
      }

      try {
        this.$f7.preloader.show()

        const data = await loginWithUser({
          mobile: this.username,
          validateCode: this.password
        })

        this.$f7.preloader.hide()

        if (data.iRet === 0) {
          this.updateUserStatus({
            userId: data.data.userId,
            userInfo: data.data
          })
          // this.$f7.router.navigate('/')
          // this.$f7.views.main.router.navigate('/', {
          //   props: {
          //     isLoginNavigate: true
          //   }
          // })
          location.reload()
        } else {
          console.error(data)
          if (data.data[0]) {
            this.toast(data.data[0])
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
