<template>
  <f7-page class="me-sign-up" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar back-link="返回" sliding title="更新用户信息"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        :value="name"
        @input="name = $event.target.value"
        label="姓名"
        type="text"
        placeholder="姓名"
      ></f7-list-input>

      <f7-list-input
        :value="nickname"
        @input="nickname = $event.target.value"
        label="昵称"
        type="text"
        placeholder="昵称"
      ></f7-list-input>

      <f7-list-input
        label="生日"
        type="date"
        defaultValue="2000-01-01"
        placeholder="请选择"
        :value="birth"
        @input="birth = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        :value="gender"
        label="性别"
        type="select"
        error-message="性别不能为空"
        @input="gender = $event.target.value"
      >
        <option value="1">男</option>
        <option value="2">女</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range
          label
          slot="input"
          :value="age"
          :min="0"
          :max="100"
          :step="1"
          @rangeChange="onAgeChange"
        ></f7-range>
      </f7-list-input>

      <f7-list-input
        :value="province"
        @input="province = $event.target.value"
        label="省份"
        type="text"
        placeholder="省份"
      ></f7-list-input>

      <f7-list-input
        :value="city"
        @input="city = $event.target.value"
        label="城市"
        type="text"
        placeholder="城市"
      ></f7-list-input>

      <f7-list-input
        :value="address"
        @input="address = $event.target.value"
        label="住址"
        type="text"
        placeholder="住址"
      ></f7-list-input>

      <f7-list-input
        :value="idCard"
        @input="idCard = $event.target.value"
        label="身份证号"
        type="text"
        validate
        pattern="[0-9]*"
        placeholder="身份证号"
      ></f7-list-input>

      <f7-list-input
        :value="high"
        @input="high = $event.target.value"
        label="身高/cm"
        type="text"
        validate
        pattern="[0-9]*"
        placeholder="身高/cm"
      ></f7-list-input>
    </f7-list>

    <div class="block block-strong">
      <div class="block-header">上传头像</div>
      <picture-input
        ref="pictureInput"
        :prefill="imageUrl"
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
        <f7-button class="col" @click="submitData" fill raised color="green">更新</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import PictureInput from 'vue-picture-input'
import { getUserSignUp, getUserInfo } from '../utils'
const phoneRegExp = new RegExp(
  '^(?=\\d{11}$)^1(?:3\\d|4[57]|5[^4\\D]|66|7[^249\\D]|8\\d|9[89])\\d{8}$'
)

export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  components: {
    PictureInput
  },
  data() {
    return {
      mobile: '',
      avatar: '',
      picture: '',
      name: '',
      nickname: '',
      birth: '',
      gender: 0,
      age: 0,
      city: '',
      province: '',
      address: '',
      idCard: '',
      high: '',
      imageUrl: ''
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
    onAgeChange(value) {
      this.age = value
      console.log('-------', this.age)
    },
    onChange(image) {
      this.picture = image
    },
    async onPageBeforeIn() {
      const { iRet, data } = await getUserInfo()
      if (iRet === 0) {
        this.mobile = data.mobile
        this.name = data.name
        this.nickname = data.nickname
        this.birth = data.birth
        this.gender = data.gender
        this.age = data.age
        this.city = data.city
        this.province = data.province
        this.address = data.address
        this.idCard = data.idCard
        this.high = data.high

        if (data.avatar) {
          this.imageUrl = data.avatar
        }
      }
    },
    async submitData() {
      try {
        const data = await getUserSignUp(this)

        if (data.iRet === 0) {
          this.toast('更新成功')
        } else {
          console.error(data)
          this.toast('更新失败', false)
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
