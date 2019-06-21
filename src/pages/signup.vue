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

      <f7-list-input :value="gender" @input="gender = $event.target.value" label="性别" type="select">
        <option value="1">男</option>
        <option value="2">女</option>
        <option value="3">待定</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range
          label
          slot="input"
          :value="18"
          :min="0"
          :max="100"
          :step="1"
          @rangeChange="onAgeChange"
        ></f7-range>
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

    <div class="block block-strong">
      <div class="block-header">上传头像</div>
      <picture-input
        ref="pictureInput"
        @change="onChange"
        width="200"
        height="200"
        margin="16"
        accept="image/*"
        size="10"
        hideChangeButton
        :removable="true"
        :customStrings="{upload: '<p>上传头像</p>', tap: '<p>上传头像</p>', remove: '清除'}"
      ></picture-input>
    </div>

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
import PictureInput from 'vue-picture-input'

export default {
  components: {
    DateTime,
    PictureInput
  },
  data() {
    return {
      name: '',
      email: '',
      nickname: '',
      username: '',
      password: '',
      gender: '',
      age: '',
      homeAddress: '',
      workAddress: '',
      picture: '',
      showUsernameError: false,
      showPasswordError: false,
      passwordErrorMsg: ''
    }
  },
  methods: {
    resetAllProps() {
      this.name = ''
      this.email = ''
      this.nickname = ''
      this.username = ''
      this.password = ''
      this.gender = ''
      this.age = ''
      this.homeAddress = ''
      this.workAddress = ''
      this.showUsernameError = false
      this.showPasswordError = false
      this.passwordErrorMsg = ''
      this.picture = ''
    },
    onAgeChange(value) {
      this.age = value
    },
    onChange(image) {
      console.log(this.$refs.pictureInput.image)
      this.picture = image
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

      if (!this.picture) {
        this.toast('请上传头像', false)
        return
      }

      try {
        const data = await getUserSignUp({
          name: this.name,
          email: this.email,
          nickname: this.nickname,
          username: this.username,
          password: this.password,
          gender: this.gender,
          age: this.age,
          homeAddress: this.homeAddress,
          workAddress: this.workAddress,
          picture: this.picture
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
