<template>
  <f7-page
    id="topicDetailView"
    no-toolbar
    ptr
    :infinite-preloader="showPreloader"
    @ptr:refresh="onRefresh"
    @infinite="loadMoreTweets"
    @page:beforein="onPageBeforeIn"
  >
    <f7-navbar :title="trimTopicText(topicText)" :back-link="backText"></f7-navbar>

    <div class="me-topic-list">
      <card-list :loadCardData="tweets" v-if="tweets.length"></card-list>
      <f7-block v-else inset>暂无相关动态</f7-block>
    </div>
  </f7-page>
</template>

<script>
import CardList from '../components/card-list.vue'
import { getTopicTweets } from '../utils'

export default {
  components: {
    CardList
  },
  props: {
    topicId: {
      default: null
    }
  },
  data() {
    return {
      backText: '返回',
      topicText: '话题页',
      showPreloader: true,
      allowInfinite: true,
      isLoadAll: false,
      tweets: [],
      page: 1
    }
  },
  methods: {
    async onRefresh(done) {
      await this.getIndexTweets()
      done()
    },
    onPageBeforeIn() {
      this.getIndexTweets()
    },
    async loadMoreTweets() {
      this.page += 1

      const data = await getTopicTweets({
        topicId: this.topicId,
        page: this.page
      })

      if (data.iRet === 0) {
        this.tweets = this.tweets.concat(data.data)
      } else {
        console.error(data)
      }
    },
    async getIndexTweets() {
      try {
        const data = await getTopicTweets({ topicId: this.topicId })

        if (data.iRet === 0) {
          this.tweets = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    },

    trimTopicText(text) {
      text = text || ''

      if (text.length > 10) {
        text = text.substr(0, 10) + '...'
      }

      return text
    }
  }
}
</script>

<style>
</style>
