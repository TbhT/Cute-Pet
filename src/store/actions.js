import { GET_USER_STATUS } from './api.js'

export async function getUserStatus() {
  try {
    const data = await Framework7.request.promise.postJSON(GET_USER_STATUS)
    console.log('---用户状态', data)
  } catch (error) {
    console.log('---用户状态出错了', error)
  }
}
