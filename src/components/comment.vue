<template>
  <f7-page>
    <f7-navbar title>
      <f7-nav-left>
        <f7-link popup-close text="关闭" @click="closePopup"></f7-link>
      </f7-nav-left>

      <f7-nav-title title="评论"></f7-nav-title>

      <f7-nav-right>
        <f7-link text="发送" @click="sendComment"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <editor :editorText="editorText" placeholder="评论点什么..." @text:input="textInputChange"></editor>
  </f7-page>
</template>

<script>
import Editor from '../components/editor.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState({
      editorText: state => state.popup.editorText
    })
  },
  components: {
    Editor
  },
  methods: {
    ...mapMutations(['updatePopup', 'updateEditorText']),
    closePopup() {
      this.updateEditorText('')
    },
    textInputChange(text) {
      this.updateEditorText({ text })
    },
    sendComment() {
      //  TODO: 发送评论
      this.$f7.preloader.show('正在发送...')
      setTimeout(() => {
        this.$f7.preloader.hide()
        this.updatePopup({
          key: 'commentOpened',
          value: false
        })
        this.updateEditorText({ text: '' })
      }, 1000)
    }
  }
}
</script>

<style>
</style>
