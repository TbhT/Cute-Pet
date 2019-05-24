export default {
  updatePopup(state, { key, value }) {
    state.popup[key] = value
  },
  updateEditorText(state, { text }) {
    state.popup.editorText = text
  }
}
