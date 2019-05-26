<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link popup-close text="取消" @click="closePopup"></f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link text="发布" @click="sendTweet"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <editor
      :enableTools="true"
      :editorText="editorText"
      :imagePreviewUrl="imagePreviewUrl"
      placeholder="发表文字"
      @text:input="textInputChange"
      @image:input="imageUpload"
    ></editor>
  </f7-page>
</template>

<script>
import Editor from '../components/editor.vue'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {
    Editor
  },
  computed: {
    ...mapState({
      editorText: state => state.popup.editorText
    })
  },
  data: function() {
    return {
      imagePreviewUrl: null,
      file: null
    }
  },
  methods: {
    ...mapActions(['updatePopup']),
    ...mapMutations(['updatePopup', 'updateEditorText']),
    closePopup() {
      this.updateEditorText({ text: '' })
      this.file = null
      this.imagePreviewUrl = null
    },
    textInputChange(text) {
      this.updateEditorText({ text })
    },
    imageUpload(imgTarget, file) {
      this.imagePreviewUrl = imgTarget.result
      this.file = file
    },
    sendTweet() {
      this.$f7.preloader.show('正在发送...')
      const f = new FormData()
      f.append('text', this.editorText)
      f.append('image', this.file)
      console.log('--------formData-------', f.get('text'))
      console.log('--------formData-------', f.get('image'))

      setTimeout(() => {
        this.$f7.preloader.hide()
        this.updatePopup({
          key: 'publisherOpened',
          value: false
        })
        this.updateEditorText({ text: '' })
        this.imagePreviewUrl = ''
      }, 1000)
    }
  }
}
</script>

<style>
</style>
