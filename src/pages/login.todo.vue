<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-list form>
      <f7-list-input
        label="Username"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-list>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
      <f7-list-button @click="signUp">Sign Up</f7-list-button>
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
