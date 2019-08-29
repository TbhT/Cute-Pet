<template>
  <f7-page no-toolbar @page:beforein="onPageBeforeIn" :page-content="false">
    <f7-navbar title="我的宠物" back-link="返回"></f7-navbar>
    <f7-page-content ptr @ptr:refresh="onPageRefresh">
      <f7-list media-list class="me-media-list me-person-all-pets" v-if="allPets.length">
        <f7-list-item
          media-item
          :link="getDetailLink(pet)"
          :key="pet.petId"
          v-for="pet in allPets"
          :title="'昵称：' + pet.nickname"
          :subtitle="'年龄：' + pet.age"
          :text="getGenderText(pet)"
        >
          <img :src="pet.avatar" slot="media" width="80" height="80" class="lazy lazy-fade-in" v-if="pet.avatar">
          <i class="icon f7-icons me-icons" slot="media" v-else>paw</i>
        </f7-list-item>
      </f7-list>

      <f7-block inset v-else>
        <p>暂无宠物信息</p>
      </f7-block>
    </f7-page-content>

    <f7-fab position="right-bottom" slot="fixed" color="orange" href="/pet/add">
      <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<style scoped>
.icon.f7-icons.me-icons {
  font-size: 60px;
  width: 60px;
  height: 60px;
}
</style>

<script>
import { getAllPet } from '../utils'

export default {
  data() {
    return {
      allPets: [],
      isPageFirstIn: false
    }
  },
  methods: {
    getGenderText(pet) {
      if (pet.gender == 1) {
        return '性别：公'
      } else {
        return '性别：母'
      }
    },
    async onPageRefresh(event, done) {
      await this.getAllPets()
      done()
    },
    getDetailLink(pet) {
      return `/pet/detail/${pet.petId}`
    },
    onPageBeforeIn() {
      if (this.isPageFirstIn) {
        return
      }

      this.getAllPets()
      this.isPageFirstIn = true
    },
    async getAllPets() {
      try {
        const data = await getAllPet()
        if (data.iRet === 0) {
          this.allPets = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>
