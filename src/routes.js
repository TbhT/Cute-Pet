import NotFoundPage from './pages/404.vue'

import HomePage from './pages/home.vue'
import TopicDetailPage from './pages/topic-detail.vue'
import TweetDetailPage from './pages/tweet-detail.vue'
import ActivitiesPage from './pages/activities.vue'
import AddActivitiesPage from './pages/add-activity.vue'
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
import {
  getTopicTweets,
  getActivityDetail,
  getPetDetail,
  getMarketDetail,
  getUserInfo
} from './utils'
import { getComment, getTopic, getTweetMessage } from './store/mock';

const routes = [
  {
    path: '/',
    component: HomePage,
    keepAlive: true
  },
  {
    path: '/topic/:topicId/',
    async: async function(routeTo, routeFrom, resolve) {
      this.app.preloader.show()

      const topicId = routeTo.params.topicId

      try {
        // const tweets = await getTopicTweets({ topicId })
        const data = await getTweetMessage()
        const tweets = data.data
        resolve(
          {
            component: TopicDetailPage
          },
          {
            props: {
              tweets
            }
          }
        )
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
      }
    }
  },
  {
    path: '/tweet/:tweetId',
    async: async function(to, from, resolve) {
      const tweetId = to.params.tweetId
      console.log(`tweet ${tweetId} 加载`)
      // TODO: 拉取某条tweet下的评论
      this.app.preloader.show()

      const comments = await getComment()

      setTimeout(() => {
        resolve(
          {
            component: TweetDetailPage
          },
          {
            props: {
              comments
            }
          }
        )
        this.app.preloader.hide()
      }, 1000)
    }
  },
  {
    path: '/activities/',
    component: ActivitiesPage,
    keepAlive: true
  },
  {
    path: '/activities/add',
    component: AddActivitiesPage
  },
  {
    path: '/activities/detail/:activityId',
    async: async function(to, from, resolve) {
      this.app.preloader.show()

      const activityId = to.params.activityId

      try {
        const activityDetail = await getActivityDetail({ activityId })

        if (activityDetail.iRet === 0) {
          resolve(
            {
              component: ActivityDetailPage
            },
            {
              props: {
                activityDetail
              }
            }
          )
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
      }
    }
  },
  {
    path: '/pet/add',
    component: AddPetPage
  },
  {
    path: '/pet/detail/:petId',
    async: async function(to, from, resolve) {
      this.app.preloader.show()

      const petId = to.params.petId

      try {
        const petDetail = await getPetDetail({ petId })

        if (petDetail.iRet === 0) {
          resolve(
            {
              component: PetDetailPage
            },
            {
              props: {
                petDetail
              }
            }
          )
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
      }
    }
  },
  {
    path: '/person',
    component: PersonPage,
    keepAlive: true
  },
  {
    path: '/person/detail/:userId',
    async: async function(to, from, resolve) {
      this.app.preloader.show()


      try {
        const userDetailInfo = await getUserInfo()

        if (userDetailInfo.iRet === 0) {
          resolve(
            {
              component: PersonDetailPage
            },
            {
              userDetailInfo
            }
          )
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
      }
    }
  },
  {
    path: '/person/pets',
    component: PersonPetsPage
  },
  {
    path: '/person/activities',
    component: PersonActivitiesPage
  },
  {
    path: '/person/tweets',
    component: PersonTweetsPage
  },
  {
    path: '/market',
    component: MarketPage,
    keepAlive: true
  },
  {
    path: '/market/add',
    component: AddMarketPage
  },
  {
    path: '/market/detail/:marketId',
    async: async function(to, from, resolve) {
      this.app.preloader.show()

      const marketId = to.params.marketId

      try {
        const marketDetail = await getMarketDetail({ marketId })

        if (marketDetail.iRet === 0) {
          resolve(
            {
              component: MarketDetailPage
            },
            {
              props: {
                marketDetail
              }
            }
          )
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
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
