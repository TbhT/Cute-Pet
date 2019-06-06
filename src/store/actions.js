import F7 from 'framework7'
import { GET_USER_STATUS } from './api.js'
const { postJSON } = F7.request.promise

export default {
  async getUserStatus({ commit, state }) {
    try {
      const data = await postJSON(GET_USER_STATUS)
      if (data.iRet === 0) {
        commit('updateUserStatus', data.data)
      }

      console.timeLog('---用户状态', data)
    } catch (error) {
      console.error('---用户状态出错了', error)
    }
  }
}
