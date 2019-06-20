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
import { createTweet } from '../utils'

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
      imagePreviewUrl: '',
      file: null
    }
  },
  methods: {
    ...mapActions(['updatePopup']),
    ...mapMutations(['updatePopup', 'updateEditorText']),
    closePopup() {
      this.updateEditorText({ text: '' })
      this.file = null
      this.imagePreviewUrl = ''
      this.text = ''
    },
    textInputChange(text) {
      this.updateEditorText({ text })
    },
    imageUpload(imgTarget, base64File) {
      this.imagePreviewUrl = imgTarget.result
      this.file = base64File
    },
    toast(msg) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center'
      })
      toast.open()
    },
    async sendTweet() {

      if (this.editorText.length === 0 && !this.file) {
        return this.toast('发送内容不能为空')
      } else if (this.editorText.length > 200) {
        return this.toast('发送文字内容不能超过200字')
      }

      this.$f7.preloader.show()

      try {
        const data = await createTweet({
          text: this.editorText,
          picture: this.file
        })

        this.$f7.preloader.hide()

        if (data.iRet === 0) {
          this.toast('发送成功')

          setTimeout(() => {
            this.closePopup()
          }, 1000)
        } else {
          this.toast('发送失败')
        }
      } catch (error) {
        console.error(error)
        this.$f7.preloader.hide()
      }
    }
  }
}
</script>

<style>
</style>
