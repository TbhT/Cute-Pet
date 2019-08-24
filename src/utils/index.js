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
export async function getAllTweets({ offset = 1 }) {
  const data = await postJSON(Api.GET_ALL_TWEETS, { offset })
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
export async function getActivities(type, offset = 1) {
  const data = await postJSON(Api.ACTIVITY_TYPE, { type, offset })
  return data
}

// 参加活动
export async function joinActivity({activityId}) {
  const data = await postJSON(Api.ACTIVITY_JOIN, {activityId})
  return data
}

// 点赞推特
export async function likeTweet({ type, tweetId }) {
  const data = await postJSON(Api.TWEET_LIKE, { type, tweetId })
  return data
}

// 添加宠物
export async function addPet({
  nickname,
  gender,
  age,
  vaccineStatus,
  petType,
  type,
  picture
}) {
  const data = await postJSON(Api.PET_ADD, {
    nickname,
    gender,
    age,
    vaccineStatus,
    petType,
    type,
    picture
  })

  return data
}

// 添加评论
export async function createComment({ text, tweetId }) {
  const data = await postJSON(Api.COMMENT_CREATE, { text, tweetId })
  return data
}

// 添加动态
export async function createTweet({ text, picture }) {
  return await postJSON(Api.TWEET_CREATE, { text, picture })
}

// 添加商家
export async function createMarket({
  name,
  contact,
  phoneNumber,
  place,
  serveType,
  workTime,
  intro,
  picture
}) {
  return await postJSON(Api.MARKET_CREATE, { name })
}

// 获取活动详情
export async function getActivityDetail({ activityId }) {
  return await postJSON(Api.ACTIVITY_DETAIL, { activityId })
}

// 获取所有的宠物
export async function getAllPet() {
  return await postJSON(Api.USER_ALL_PET)
}

// 获取评论
export async function getComment({tweetId, page = 1}) {
  return await postJSON(Api.COMMENT_FOR_TWEET, {tweetId, page})
}

// 获取商家详情
export async function getMarketDetail({marketId}) {
  return await postJSON(Api.MARKET_DETAIL, {marketId})
}

// 获取宠物详情
export async function getPetDetail({petId}) {
  return await postJSON(Api.PET_DETAIL, {petId})
}

// 获取 话题 列表
export async function getTopicAll() {
  return await postJSON(Api.TOPIC_ALL)
}

// 获取话题相关的列表
export async function getTopicTweets({topicId, page = 1}) {
  return await postJSON(Api.TOPIC_ALL_TWEET, {topicId, page})
}

// 获取用户参加的活动
export async function getUserActivities() {
  return await postJSON(Api.USER_ALL_ACTIVITY)
}

// 获取用户所有的动态
export async function getUserAllTweets() {
  return await postJSON(Api.USER_ALL_TWEETS)
}

// 用户注册
export async function getUserSignUp() {}

export const imgFilterReg = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i

export function getLocaleDatetime() {
  const today = new Date()
  const y = today.getUTCFullYear(),
    m = today.getUTCMonth() + 1,
    d = today.getUTCDay(),
    h = today.getUTCHours() + 8,
    mi = today.getUTCMinutes(),
    s = today.getUTCSeconds()

  return new Date(Date.UTC(y, m, d, h, mi, s))
}

export function getDaysInMonth(year, month) {
  return new Date(year, month - 1, 0).getDate()
}

export function getDaysInMonthAsArray(year, month) {
  const d = new Date(year, month, 0).getDate()
  const da = []

  for (let index = 0; index < d; index++) {
    da[index] = `${index + 1}`
  }

  return da
}

export function getRecentYearsAsArray(years = 5) {
  const d = []
  const dd = getLocaleDatetime().getFullYear()

  for (let index = 0; index < years; index++) {
    d.push(`${dd + index}`)
  }

  return d
}

export const MONTHS = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
]

export const HOURS = (() => {
  const h = []

  for (let index = 0; index < 23; index++) {
    h[index] = index + 1
  }

  return h
})()

export const MINUTES = (() => {
  const m = []

  for (let index = 0; index < 60; index++) {
    m[index] = index < 10 ? `0${index}` : index
  }

  return m
})()


export function formatDate(template, date) {
  const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = ((date && date.valueOf()) || Date.now()) - new Date().getTimezoneOffset() * 6e4
  date = new Date(date)
  return date
    .toISOString()
    .split(/[-:.TZ]/)
    .reduce(function(template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
}
