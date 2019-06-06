<template>
  <f7-page class="me-sign-up" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加宠物"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input :value="nickname" label="宠物昵称" type="text" placeholder="宠物昵称"></f7-list-input>

      <f7-list-input :value="gender" label="性别" type="select">
        <option value="1">公</option>
        <option value="2">母</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range :value="age" label slot="input" :min="1" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input :value="vaccineStatus" label="疫苗状况" type="select">
        <option value="1">已接种</option>
        <option value="2">未接种</option>
      </f7-list-input>

      <f7-list-input label="宠物类别" :value="petType" type="text" placeholder="宠物类别"></f7-list-input>

      <f7-list-input label="品种" :value="type" type="text" placeholder="品种"></f7-list-input>
    </f7-list>

    <f7-block>
      <f7-row>
        <f7-button class="col" raised @click="back">取消</f7-button>
        <f7-button class="col" fill raised color="green" @click="submitPetData">提交</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import { addPet } from '../utils';
export default {
  data() {
    return {
      nickname: '',
      gender: 0,
      age: 0,
      vaccineStatus: 0,
      petType: 0,
      type: ''
    }
  },
  methods: {
    submitPetData() {
      try {
        this.$f7.preloader.show()
        const result = await addPet()
        this.$f7.preloader.hide()

        if (!result) {
          console.log('添加宠物失败', result)
          this.$f7.toast.create({
            text: '添加宠物失败'
          })

          return
        }

        this.$f7.toast.create({
          text: '添加宠物成功'
        })

        this.resetAllProps()

        setTimeout(() => {
          this.back()
        }, 1000);

      } catch (error) {
        console.error(error)
        this.$f7.preloader.hide()
        this.$f7.toast.create({
          text: '创建活动失败'
        })
      }
    },
    back() {
      this.$f7router.back()
    },
    resetAllProps() {
      this.nickname = '';
      this.gender = 0
      this.age = 0
      this.vaccineStatus = 0
      this.petType = 0
      this.type = ''
    }
  }
}
</script>

<style>
</style>
