<template>
  <f7-page class="me-sign-up" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加宠物"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input label="宠物昵称" type="text" placeholder="宠物昵称"></f7-list-input>

      <f7-list-input label="性别" type="select">
        <option value="1">公</option>
        <option value="2">母</option>
      </f7-list-input>

      <f7-list-input label="年龄" :input="false">
        <f7-range label slot="input" :value="50" :min="1" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input label="疫苗状况" type="select">
        <option value="1">已接种</option>
        <option value="2">未接种</option>
      </f7-list-input>

      <f7-list-input label="宠物类别" type="text" placeholder="宠物类别"></f7-list-input>

      <f7-list-input label="品种" type="text" placeholder="品种"></f7-list-input>
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
export default {
  methods: {
    submitPetData() {
      // TODO: 提交数据
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
