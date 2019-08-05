import * as Api from '../store/api.js'
import F7 from 'framework7'
const { postJSON } = F7.request.promise

// 登录接口
export async function loginWithUser({ mobile, validateCode }) {
  const data = await postJSON(Api.USER_LOGIN_WITH_USER, {
    login: mobile,
    password: validateCode
  })

  return data
}

// 获取 验证码
export async function getValidateCode({ mobile }) {
  const data = await postJSON(Api.USER_GET_VALIDATE_CODE, {
    mobile
  })

  return data
}

// 退出登录
export async function logoutWithUser() {
  const data = await postJSON(Api.USER_LOGOUT_WITH_USER)
  return data
}


