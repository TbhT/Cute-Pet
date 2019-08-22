export default {
  updatePopup(state, { key, value }) {
    state.popup[key] = value
  },
  updateEditorText(state, { text }) {
    state.popup.editorText = text
  },
  updateUserStatus(state, { userId = null }) {
    if (userId) {
      state.user.isLogin = true
      state.user.userId = userId
      state.user.isGetInfo = true
    }
  },
  updateCommentTweetId(state, { tweetId }) {
    if (tweetId) {
      state.popup.commentTweetId = tweetId
    }
  }
}
