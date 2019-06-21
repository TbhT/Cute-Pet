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
import { getComment } from './utils'

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
    path: '/activities/add',
    component: AddActivitiesPage
  },
  {
    path: '/activities/detail/:activityId',
    async: function(to, from, resolve) {
      const activityId = to.params.activityId
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
    async: function(to, from, resolve) {
      const marketId = to.params.marketId
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
