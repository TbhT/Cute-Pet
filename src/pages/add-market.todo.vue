<template>
  <f7-page class="me-add-market" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加商家"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="商家名称"
        type="text"
        :value="name"
        placeholder="商家名称"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系人"
        type="text"
        :value="contact"
        placeholder="联系人"
        @input="contact = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="联系方式"
        type="text"
        :value="phoneNumber"
        placeholder="联系方式"
        @input="phoneNumber = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="商家地址"
        type="text"
        :value="place"
        placeholder="商家地址"
        @input="place = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="服务类型"
        type="select"
        :value="serveType"
        @input="serveType = $event.target.value"
      >
        <option value="1">医疗</option>
        <option value="2">美容</option>
        <option value="3">训练</option>
        <option value="4">拍照</option>
        <option value="5">寄养</option>
      </f7-list-input>

      
    </f7-list>
  </f7-page>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      contact: '',
      phoneNumber: '',
      place: '',
      serveType: -1,
      workTime: '',
      intro: '',
      picture: ''
    }
  }
}
</script>

<style>
</style>
