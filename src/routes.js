import NotFoundPage from './pages/404.vue'

import HomePage from './pages/home.vue'
import TopicDetailPage from './pages/topic-detail.vue'
import TweetDetailPage from './pages/tweet-detail.vue'
import ActivitiesPage from './pages/activities.vue'
import AddPetPage from './pages/add-pet.vue'
import LoginPage from './pages/login.vue'
import SignupPage from './pages/signup.vue'
import PersonPage from './pages/person.vue'
import MarketPage from './pages/market.vue'
import AddMarketPage from './pages/add-market.vue'
import PersonPetsPage from './pages/all-pet.vue'
import PersonActivitiesPage from './pages/person-activities.vue'
import PersonTweetsPage from './pages/person-tweets.vue'
import ActivityDetailPage from './pages/activity-detail.vue'
import MarketDetailPage from './pages/market-detail.vue'
import PersonDetailPage from './pages/person-detail.vue'
import PetDetailPage from './pages/pet-detail.vue'
import { getUserStatus } from './utils'

const routes = [
  {
    path: '/',
    component: HomePage,
    keepAlive: true
  },
  {
    path: '/topic/:topicId/',
    async: async function(to, from, resolve) {
      const topicId = routeTo.params.topicId

      resolve(
        {
          component: TopicDetailPage
        },
        {
          props: {
            topicId
          }
        }
      )
    }
  },
  {
    path: '/tweet/:tweetId',
    async: function(to, from, resolve) {
      const tweetId = to.params.tweetId

      resolve(
        {
          component: TweetDetailPage
        },
        {
          props: {
            tweetId
          }
        }
      )
    }
  },
  {
    path: '/activities/',
    component: ActivitiesPage,
    keepAlive: true
  },
  {
    path: '/activities/detail/:activityId',
    async: async function(to, from, resolve) {
      const activityId = to.params.activityId
      try {
        const userInfo = await getUserStatus()

        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve(
              {
                component: ActivityDetailPage
              },
              {
                props: {
                  activityId
                }
              }
            )
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.log(error)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  {
    path: '/pet/add',
    component: AddPetPage
  },
  {
    path: '/pet/detail/:petId',
    async: function(to, from, resolve) {
      const petId = to.params.petId

      resolve(
        {
          component: PetDetailPage
        },
        {
          props: {
            petId
          }
        }
      )
    }
  },
  {
    path: '/person',
    component: PersonPage,
    keepAlive: true
  },
  {
    path: '/person/detail',
    component: PersonDetailPage
  },
  {
    path: '/person/pets',
    async: async function(to, from, resolve) {
      try {
        const userInfo = await getUserStatus()
        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve({
              component: PersonPetsPage
            })
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    path: '/person/activities',
    async: async function(to, from, resolve) {
      try {
        const userInfo = await getUserStatus()
        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve({
              component: PersonActivitiesPage
            })
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    path: '/person/tweets',
    async: async function(to, from, resolve) {
      try {
        const userInfo = await getUserStatus()
        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve({
              component: PersonTweetsPage
            })
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    path: '/market',
    component: MarketPage,
    keepAlive: true
  },
  {
    path: '/market/add',
    async: async function(to, from, resolve) {
      try {
        const userInfo = await getUserStatus()
        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve({
              component: AddMarketPage
            })
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    path: '/market/detail/:marketId',
    async: async function(to, from, resolve) {
      const marketId = to.params.marketId
      try {
        const userInfo = await getUserStatus()

        if (userInfo.iRet === 0) {
          if (userInfo.data.userId) {
            resolve(
              {
                component: MarketDetailPage
              },
              {
                props: {
                  marketId
                }
              }
            )
          } else {
            resolve({ component: LoginPage })
          }
        } else {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  {
    path: '/user/login',
    component: LoginPage
  },
  {
    path: '/user/signup',
    component: SignupPage
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
]

export default routes
