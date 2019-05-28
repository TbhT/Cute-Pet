<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>宠伢</f7-login-screen-title>
    
    <f7-list form>
      <f7-list-input
        label="手机号"
        type="text"
        placeholder="12366660000"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="密码"
        type="password"
        placeholder="密码"
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
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      const self = this
      const app = self.$f7
      const router = self.$f7router
      app.dialog.alert(
        `Username: ${self.username}<br>Password: ${self.password}`,
        () => {
          router.back()
        }
      )
    },
    signUp() {
      this.$f7router.navigate('/user/signup')
    }
  }
}
</script>

<style>
</style>
