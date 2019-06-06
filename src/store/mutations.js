export default {
  updatePopup(state, { key, value }) {
    state.popup[key] = value
  },
  updateEditorText(state, { text }) {
    state.popup.editorText = text
  },
  updateUserStatus(state, { user }) {
    if (user.userId) {
      state.user.isLogin = true
      state.user.userId = user.userId
      state.user.isGetInfo = true
    }
  }
}
