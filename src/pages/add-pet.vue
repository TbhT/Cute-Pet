<template>
  <f7-page class="me-sign-up" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar back-link="返回" sliding title="添加宠物"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        :value="nickname"
        label="宠物昵称"
        type="text"
        placeholder="宠物昵称"
        error-message="宠物昵称不能为空"
        :error-message-force="showNicknameErrorFlag"
        @input="nickname = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        :value="gender"
        label="性别"
        type="select"
        error-message="性别不能为空"
        :error-message-force="showGenderErrorFlag"
        @input="gender = $event.target.value"
      >
        <option value="1">公</option>
        <option value="2">母</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range label slot="input" :min="1" :max="100" :step="1" @rangeChange="onAgeChange"></f7-range>
      </f7-list-input>

      <f7-list-input
        :value="vaccineStatus"
        label="疫苗状况"
        type="select"
        @input="vaccineStatus = $event.target.value"
      >
        <option value="1">已接种</option>
        <option value="2">未接种</option>
      </f7-list-input>

      <f7-list-input
        label="宠物类别"
        :value="petType"
        type="text"
        placeholder="宠物类别"
        @input="petType = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="品种"
        :value="type"
        type="text"
        placeholder="品种"
        @input="type = $event.target.value"
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
        <f7-button class="col" raised @click="back">取消</f7-button>
        <f7-button class="col" fill raised color="green" @click="submitPetData">提交</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import { addPet, getPetDetail } from '../utils/index.js'
import PictureInput from 'vue-picture-input'

export default {
  components: {
    PictureInput
  },
  props: {
    type: 1,
    petId: null
  },
  data() {
    return {
      nickname: '',
      showNicknameErrorFlag: false,
      gender: 0,
      showGenderErrorFlag: false,
      age: 0,
      vaccineStatus: 0,
      petType: 0,
      type: '',
      picture: '',
      imageUrl: ''
    }
  },
  methods: {
    async onPageBeforeIn() {
      if (this.type === 2 && this.petId) {
        const {data, iRet} = await getPetDetail({ petId: this.petId })
        if (iRet === 0) {
          this.nickname = data.nickname
          this.gender = data.gender
          this.age = data.age
          this.vaccineStatus = data.vaccineStatus
          this.petType = data.petType
          this.imageUrl = data.image
        }
      }
    },
    onAgeChange(value) {
      this.age = value
    },
    onChange(image) {
      this.picture = image
    },
    toast(msg) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center'
      })
      toast.open()
    },
    async submitPetData() {
      try {
        setTimeout(() => {
          this.showNicknameErrorFlag = false
          this.showGenderErrorFlag = false
        }, 3000)

        if (!this.nickname) {
          return (this.showNicknameErrorFlag = true)
        }

        if (!this.gender) {
          return (this.showGenderErrorFlag = true)
        }

        if (!this.picture) {
          return this.toast('宠物头像不能为空')
        }

        this.$f7.preloader.show()

        const result = await addPet(this)

        this.$f7.preloader.hide()

        if (!result) {
          console.log('添加宠物失败', result)
          this.toast('添加宠物失败')
          return
        }

        this.toast('添加宠物成功')
        this.resetAllProps()

        setTimeout(() => {
          this.back()
        }, 1000)
      } catch (error) {
        console.error(error)
        this.$f7.preloader.hide()
        this.toast('添加宠物失败')
      }
    },
    back() {
      this.$f7router.back()
    },
    resetAllProps() {
      this.nickname = ''
      this.gender = 0
      this.age = 0
      this.vaccineStatus = 0
      this.petType = 0
      this.type = ''
      this.picture = ''
    }
  }
}
</script>

<style>
</style>
