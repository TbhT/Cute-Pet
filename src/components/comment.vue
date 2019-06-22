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
import { createComment } from '../utils'

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState({
      editorText: state => state.popup.editorText,
      commentTweetId: state => state.popup.commentTweetId
    })
  },
  components: {
    Editor
  },
  methods: {
    toast(msg) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center'
      })
      toast.open()
    },
    ...mapMutations([
      'updatePopup',
      'updateEditorText',
      'updateCommentTweetId'
    ]),
    closePopup() {
      this.resetStatus()
    },
    resetStatus() {
      this.updateCommentTweetId({ tweetId: -1 })
      this.updateEditorText({ text: '' })
    },
    textInputChange(text) {
      this.updateEditorText({ text })
    },
    async sendComment() {
      if (this.editorText.length === 0) {
        return this.toast('发送内容不能为空')
      } else if (this.editorText.length > 200) {
        return this.toast('发送内容不能超过200字')
      }

      this.$f7.preloader.show()

      try {
        const data = await createComment({
          text: this.editorText,
          tweetId: this.commentTweetId
        })

        if (data.iRet === 0) {
          this.$f7.preloader.hide()
          this.toast('评论成功')
          this.updatePopup({
            key: 'commentOpened',
            value: false
          })
          this.resetStatus()
        } else {
          this.toast('评论失败')
          console.error(data)
          this.$f7.preloader.hide()
        }
      } catch (error) {
        this.toast('评论失败')
        console.error(error)
        this.$f7.preloader.hide()
      }
    }
  }
}
</script>

<style>
</style>
