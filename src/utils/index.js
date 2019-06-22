import F7 from 'framework7'
import {
  GET_BANNERS,
  GET_ACTIVITY,
  CREATE_ACTIVITY,
  CREATE_PET,
  JOIN_ACTIVITY,
  DETAIL_ACTIVITY,
  USER_LOGIN,
  USER_SIGN_UP,
  TOPIC_ALL,
  TOPIC_TWEET_ALL,
  GET_ALL_MARKET,
  CREATE_MARKET,
  GET_MARKET_DETAIL,
  GET_USER_ALL_TWEETS,
  GET_USER_INFO,
  GET_USER_DETAIL_INFO,
  GET_USER_STATUS,
  GET_PET_DETAIL,
  GET_USER_ALL_PETS,
  CREATE_TWEET,
  TWEET_LIKE,
  CREATE_COMMENT,
  TWEET_ALL_COMMENT,
  GET_USER_ACTIVITIES
} from '../store/api.js'
const { postJSON } = F7.request.promise

/**
 * 获取推特下的所有评论
 */
export async function getComment({ tweetId, page = 1 }) {
  const data = await postJSON(TWEET_ALL_COMMENT, { tweetId, offset: page })
  return data
}

/**
 * 添加评论
 */
export async function createComment({ text, tweetId }) {
  const data = await postJSON(CREATE_COMMENT, { text, tweetId })
  return data
}

/**
 * 点赞处理
 */
export async function likeTweet({ type, tweetId }) {
  const data = await postJSON(TWEET_LIKE, { type, tweetId })
  return data
}

/**
 * 新建动态信息
 */
export async function createTweet({ text, picture }) {
  const data = await postJSON(CREATE_TWEET, { text, picture })
  return data
}

/**
 * 获取用户所有的宠物列表
 */
export async function getAllPet() {
  const data = await postJSON(GET_USER_ALL_PETS)
  return data
}

/**
 * 获取宠物详情
 */
export async function getPetDetail({ petId }) {
  const data = await postJSON(GET_PET_DETAIL, { petId })
  return data
}

/**
 * 获取个人的基本信息
 */
export async function getUserInfo() {
  const data = await postJSON(GET_USER_INFO)

  return data
}

/**
 * 获取个人的详细信息
 */
export async function getUserDetailInfo() {
  const data = await postJSON(GET_USER_DETAIL_INFO)

  if (data.iRet === 0) {
    return data.data
  } else {
    return null
  }
}

/**
 * 获取用户个人的动态信息流
 */
export async function getUserAllTweets({ page = 1 }) {
  const data = await postJSON(GET_USER_ALL_TWEETS, { offset: page })

  return data
}

/**
 * 获取商家详情
 */
export async function getMarketDetail({ marketId }) {
  const data = await postJSON(GET_MARKET_DETAIL, { marketId })

  return data
}

/**
 * 新建商家
 */
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
  const data = await postJSON(CREATE_MARKET, {
    name,
    contact,
    phoneNumber,
    place,
    serveType,
    workTime,
    intro,
    picture
  })

  return data
}

/**
 * 获取所有的商家列表
 */
export async function getMarketAll({ offset = 1 }) {
  const data = await postJSON(GET_ALL_MARKET, { offset })

  return data
}

/**
 * 获取主题动态信息列表
 */
export async function getTopicTweets({ topicId, page = 1 }) {
  const data = await postJSON(TOPIC_TWEET_ALL, { topicId, offset: page })

  return data
}

/**
 * 获取主题列表
 */
export async function getTopicAll() {
  const data = await postJSON(TOPIC_ALL)
  return data
}

/**
 * 获取用户状态
 */
export async function getUserStatus() {
  const data = await postJSON(GET_USER_STATUS)
  return data
}

/**
 * 登录
 */
export async function getUserLogin({ username, password }) {
  const data = await postJSON(USER_LOGIN, { username, password })

  return data
}

/**
 * 注册
 */
export async function getUserSignUp({
  name,
  email,
  nickname,
  username,
  password,
  gender,
  age,
  homeAddress,
  workAddress,
  picture
}) {
  const data = await postJSON(USER_SIGN_UP, {
    name,
    email,
    nickname,
    username,
    password,
    gender,
    age,
    homeAddress,
    workAddress,
    picture
  })

  return data
}

/**
 * 用户参加过的活动
 */
export async function getUserActivities({ page = 1 }) {
  const data = await postJSON(GET_USER_ACTIVITIES, { offset: page })
  return data
}

/**
 * 获取活动详情
 */
export async function getActivityDetail({ activityId }) {
  const data = await postJSON(DETAIL_ACTIVITY, { activityId })

  return data
}

/**
 * 参加活动
 */
export async function joinActivity({ activityId }) {
  const data = await postJSON(JOIN_ACTIVITY, { activityId })
  return data
}

/**
 * 获取轮播图
 */
export async function getBanners() {
  const data = await postJSON(GET_BANNERS)
  return data
}

/**
 * 添加宠物
 */
export async function addPet({
  nickname,
  gender,
  age,
  vaccineStatus,
  petType,
  type,
  picture
}) {
  const data = await postJSON(CREATE_PET, {
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

/**
 * 添加活动赛事
 */
export async function addActivity({
  name,
  beginTime,
  endTime,
  totalCount,
  totalCost,
  joinBeginTime,
  joinEndTime,
  organizer,
  coorganizer,
  type,
  place,
  picture
}) {
  const data = await postJSON(CREATE_ACTIVITY, {
    name,
    beginTime,
    endTime,
    totalCount,
    totalCost,
    joinBeginTime,
    joinEndTime,
    organizer,
    coorganizer,
    type,
    place,
    picture
  })

  return data
}

/**
 * 获取活动，赛事
 */
export async function getActivities(type, offset = 1) {
  const data = await postJSON(GET_ACTIVITY, { type, offset })

  return data
}

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
