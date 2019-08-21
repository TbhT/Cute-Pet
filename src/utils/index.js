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

// 更新用户数据
export async function updateUserData({
  mobile,
  avatar,
  name,
  nickname,
  birth,
  gender,
  age,
  city,
  province,
  address,
  idCard,
  high
}) {
  const data = await postJSON(Api.USER_UPDATE_DATA, {
    mobile,
    avatar,
    name,
    nickname,
    birth,
    gender,
    age,
    city,
    province,
    address,
    idCard,
    high
  })

  return data
}


// 获取所有动态
export async function getAllTweets({
  offset = 1
}) {
  const data = await postJSON(Api.GET_ALL_TWEETS, {offset})
  return data
}

// 获取用户登录状态
export async function getUserStatus() {
  const data = await postJSON(Api.GET_USER_STATUS)
  return data
}

// 获取用户信息
export async function getUserInfo() {
  const data = await postJSON(Api.USER_GET_INFO)
  return data
}


// 获取banner信息
export async function getBanners() {
  const data = await postJSON(Api.BANNERS_GET)
  return data
}


// 获取所有商家信息
export async function getMarketAll() {
  const data = await postJSON(Api.MARKET_ALL)
  return data
}


// 获取所有活动
export async function getActivities() {
  const data = await postJSON(Api)
}


// 点赞推特
export async function likeTweet() {
  
}

