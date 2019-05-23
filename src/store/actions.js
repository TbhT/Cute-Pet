import { userStatus } from  './api.js'


export default {
  async getUserStatus($app) {
    try {
      const data = Framework7.request.promise.postJSON(userStatus)
    } catch (error) {
      $app
    }
  }
}
