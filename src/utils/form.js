export default {
  clearFormData: function(that) {
    that.$app.form.fillFormData({
      nickname: '',
      phone: '',
      password: '',
      name: '',
      gender: '',
      homeAddress: '',
      wordAddress: ''
    })
  }
}
