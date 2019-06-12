export default {
  updatePopup(state, { key, value }) {
    state.popup[key] = value
  },
  updateEditorText(state, { text }) {
    state.popup.editorText = text
  },
  updateUserStatus(state, { userId, userInfo }) {
    if (userId) {
      state.user.isLogin = true
      state.user.userId = userId
      state.user.isGetInfo = true
      state.user.userInfo = userInfo
    }
  }
}
