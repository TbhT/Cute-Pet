<template>
  <f7-page tabs no-toolbar>
    <f7-navbar title="我的宠物" back-link="返回"></f7-navbar>

    <f7-list media-list class="me-media-list me-person-all-pets" v-if="allPets.length">
      <f7-list-item
        :key="pet.petId"
        media-item
        v-for="pet in allPets"
        :subtitle="pet.age"
        :title="pet.nickname"
        :link="getDetailLink(pet)"
      >
        <img :src="pet.image" slot="media" width="80" class="lazy lazy-fade-in">
      </f7-list-item>
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
import { getAllPet } from '../store/mock'

export default {
  data() {
    return {
      allPets: []
    }
  },
  async created() {
    const data = await getAllPet()
    this.allPets = data
  },
  methods: {
    getDetailLink(pet) {
      return `/pet/detail/${pet.petId}`
    }
  }
}
</script>

<style>
</style>
