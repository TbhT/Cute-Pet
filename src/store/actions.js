import api from  './api.js'


export default {
  async getUserStatus($app) {
    try {
      const data = Framework7.request.promise.postJSON(api.userStatus)
    } catch (error) {
      $app
    }
  }
}
