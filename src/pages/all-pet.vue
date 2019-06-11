<template>
  <f7-page tabs no-toolbar>
    <f7-navbar title="我的宠物" back-link="返回"></f7-navbar>

    <f7-list media-list class="me-media-list me-person-all-pets" v-if="allPets.length">
      <f7-list-item
        link="#"
        :key="pet.petId"
        v-for="pet in allPets"
        :subtitle="pet.name"
        :title="pet.name"
      ></f7-list-item>
    </f7-list>

    <f7-block inset v-else>
      <p>暂无宠物信息</p>
    </f7-block>

    <f7-fab position="right-bottom" slot="fixed" color="orange" href="/pet/add">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      allPets: []
    }
  },
  methods: {}
}
</script>

<style>
</style>
