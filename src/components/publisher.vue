<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link text="取消" @click="closePopup"></f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link text="发布" @click="sendTweet"></f7-link>
      </f7-nav-right>
    </f7-navbar>

  </f7-page>
</template>

<script>
import Editor from '../components/editor.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Editor
  },
  methods: {
    ...mapActions([
      'updatePopup'
    ]),
    closePopup() {
      // TODO: 
    },
    sendTweet() {
      // TODO: 
    }
  }
}
</script>

<style>
</style>
