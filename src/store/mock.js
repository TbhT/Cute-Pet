import { formatDate } from '../utils'
import { async } from 'q'

export async function getBannerImages() {
  return [
    {
      id: 10,
      imgUrl: 'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg'
    },
    {
      id: 21,
      imgUrl: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg'
    },
    {
      id: 42,
      imgUrl: 'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg'
    }
  ]
}

export async function getTweetMessage() {
  const obj = {}

  obj.iRet = 0
  obj.data = [
    {
      tweetId: 3001 + Date.now(),
      image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
      nickname: 'Ivony',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      text:
        'Here is a new puppet wechaty-puppet-padpro. This puppet is also implemented with iPad protocol, but different protocol service. Could you please add this puppet to the supported puppet list?',
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-1.jpg',
      likeCount: 121,
      commentCount: 30
    },
    {
      tweetId: 4212 + Date.now(),
      nickname: '有木桑',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      text:
        '不是，这玩意就是一堆log。可不能把所有“自己不认识的一堆字母”都叫作“代码”顺便，通常情况下，一般用户是不可能看到“代码”的，所以这种随便点点就出来的，不用想，大概率不是',
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-2.jpg',
      likeCount: 121,
      commentCount: 30
    },
    {
      tweetId: 3221 + Date.now(),
      image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
      text:
        '都凉的透透的了，才发这种骗小学生的文章，晚了吧，至少晚三年。看到黑诺基亚那块我看不下去了，你原来是诺甚亚的射拼拼工程师吧，prototype上call成功一次就高潮了？确定做过项目？注销木梳个小辫？在诺基亚就得被打死？你呆的是芬兰外企还是你们村大队办公室？诺基亚也是我黄掉的前东家之一，这么被人黑实在看不下去',
      nickname: '昵称2',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-2.jpg',
      likeCount: 121,
      commentCount: 30
    },
    {
      tweetId: 5234 + Date.now(),
      image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
      text:
        '三分钟热度”的人不过是从来没有体验到坚持做一件事成功后带来的喜悦，因为坚持的过程总是枯燥又充满挫折的，人的天性又是好逸恶劳。“每一年伊始笔记本的前几页都写满了宏伟的计划，后面几乎都是空白……”“购买了一本好，可惜的是到现在都还没开始读……”“下决心健身减肥，差不多在5天之后就放弃了……”几乎所有的人都有过“雄心勃勃地制定计划，心灰意冷地放弃计划”的经历。',
      nickname: '昵称3',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-2.jpg',
      likeCount: 121,
      commentCount: 30
    },
    {
      tweetId: 2234 + Date.now(),
      image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
      text: '白日梦患者逃避现实的人有5个特征。',
      nickname: '昵稱4',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-3.jpg',
      likeCount: 121,
      commentCount: 30
    },
    {
      tweetId: 9843 + Date.now(),
      image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
      text:
        '人的悲剧在于眼高手低。大多数人激动时幻想着睥睨天下，日常生活中却没法鼓起勇气和那个在每个周末的早上都要拿电钻钻墙的邻居很好谈一谈。',
      nickname: '昵稱433',
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      avatar: 'https://cdn.framework7.io/placeholder/people-160x160-2.jpg',
      likeCount: 121,
      commentCount: 30
    }
  ]

  return obj
}

export async function getUserInfo() {
  const personObj = {
    userId: Date.now(),
    phoneNumber: '13300001111',
    name: '张三',
    nickname: '昵称123',
    gender: 1,
    age: 30,
    homeAddress: '这里是家庭地址',
    workAddress: '这里是工作地址',
    image: 'https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg'
  }

  const obj = {}
  obj.iRet = 0
  obj.msg = 'success'
  obj.data = {
    userInfo: personObj,
    pet: {
      petId: Date.now()
    }
  }

  return obj
}

export async function getTweetDetail() {
  return {
    tweetId: 9843 + Date.now(),
    image: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
    text:
      '人的悲剧在于眼高手低。大多数人激动时幻想着睥睨天下，日常生活中却没法鼓起勇气和那个在每个周末的早上都要拿电钻钻墙的邻居很好谈一谈。',
    nickname: '昵稱433',
    createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    avatar: 'https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg',
    likeCount: 121,
    commentCount: 30
  }
}

export async function getComment() {
  return [
    {
      commentId: 10 + Date.now(),
      nickname: '昵称333',
      avatar: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg',
      text: '评论时间是' + formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date())
    },
    {
      commentId: 113 + Date.now(),
      nickname: '昵称333',
      avatar: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg',
      text: '评论时间是' + formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date())
    },
    {
      nickname: '昵称333',
      commentId: 1131 + Date.now(),
      avatar: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg',
      text: '评论时间是' + formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date())
    },
    {
      nickname: '昵称333',
      commentId: 11343 + Date.now(),
      avatar: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg',
      text: '评论时间是' + formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      createTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date())
    }
  ]
}

export function getCompeteActivities() {
  return [
    {
      activityId: 321 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事1',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点1',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 1 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事2',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点2',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 21 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事3',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点3',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 1321 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事4',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点4',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 32221 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事5',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点5',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 321224 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事6',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点6',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 3213333 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事7',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点7',
      totalCount: '100',
      totalCost: '200'
    },
    {
      activityId: 3244131 + Date.now(),
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: '赛事8',
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点8',
      totalCount: '100',
      totalCost: '200'
    }
  ]
}

export async function getPartyActivities(d = 123) {
  const a = []
  for (let index = 0; index < 10; index++) {
    a.push({
      activityId: 32111 + Date.now() + d,
      image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
      name: 'party' + index,
      beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
      place: '地点' + index,
      totalCount: '100',
      totalCost: '200'
    })
  }

  return a
}

export async function getActivityDetail() {
  return {
    activityId: 933 + Date.now(),
    image: 'http://cdn.framework7.io/placeholder/nature-1000x600-3.jpg',
    name: 'party44444444444444444',
    beginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    endTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    joinBeginTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    joinEndTime: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    organizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    coorganizer: formatDate('YYYY-MM-DD HH:mm:ss', new Date()),
    place: '地点3333333333',
    totalCount: '100',
    totalCost: '200'
  }
}

export async function getAllPet() {
  return [
    {
      petId: Date.now() + 1,
      nickname: '宠物昵称1',
      gender: '男',
      age: 10,
      vaccineStatus: 2,
      petType: 1,
      type: 3,
      image: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg'
    },
    {
      petId: Date.now() + 222,
      nickname: '宠物昵称2',
      gender: '女',
      age: 3,
      vaccineStatus: 1,
      petType: 2,
      type: 3,
      image: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg'
    }
  ]
}

export async function getPetDetail() {
  return {
    petId: Date.now(),
    nickname: '宠物昵称2',
    gender: '女',
    age: 3,
    vaccineStatus: 1,
    petType: 2,
    type: 3,
    image: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg'
  }
}

export async function getTopic() {
  return [
    {
      topicId: Date.now(),
      text: '#这里是话题1#'
    },
    {
      topicId: Date.now(),
      text: '#这里是话题2#'
    },
    {
      topicId: Date.now(),
      text: '#这里是话题3#'
    },
    {
      topicId: Date.now(),
      text: '#这里是话题4#'
    }
  ]
}

export async function getMarket() {
  const a = []

  for (let index = 0; index < 10; index++) {
    a.push({
      marketId: Date.now() + index,
      name: '商家店铺' + index,
      place: '地点' + index,
      contact: '联系人张三',
      phoneNumber: '13312345678',
      image: 'https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg'
    })
  }

  return a
}

export async function getMarketDetail() {
  return {
    marketId: Date.now(),
    name: '商家店铺',
    place: '地点333333',
    contact: '联系人张三',
    phoneNumber: '13312345678',
    image: 'https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg'
  }
}
