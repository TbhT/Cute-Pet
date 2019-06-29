<template>
  <f7-page
    id="personTweetsView"
    no-toolbar
    ptr
    :infinite-preloader="showPreloader"
    @ptr:refresh="onRefresh"
    @infinite="loadMoreTweets"
    @page:beforein="onPageBeforeIn"
  >
    <f7-navbar title="我的动态" back-link="返回"></f7-navbar>

    <card-list :loadCardData="tweets" v-if="tweets.length"></card-list>
    <f7-block v-else inset>暂无动态</f7-block>
  </f7-page>
</template>

<script>
import CardList from '../components/card-list.vue'
import { getUserAllTweets } from '../utils'

export default {
  components: {
    CardList
  },
  data() {
    return {
      tweets: [],
      page: 1,
      showPreloader: true,
      allowInfinite: true,
      isLoadAll: false,
      isPageFirstIn: false
    }
  },
  methods: {
    onPageBeforeIn() {
      if (this.isPageFirstIn) {
        return
      }

      this.getIndexTweets()
      this.isPageFirstIn = true
    },
    async onRefresh(event, done) {
      await this.getIndexTweets()
      done()
    },
    async loadMoreTweets() {
      if (!this.allowInfinite || this.isLoadAll) {
        return
      }

      this.allowInfinite = false

      try {
        const data = await getUserAllTweets({ page: this.page + 1 })

        if (data.iRet === 0) {
          this.page = this.page + 1

          if (data.data.length === 0) {
            this.showPreloader = false
            this.isLoadAll = true
          } else {
            this.tweets = [...data.data, ...this.tweets]
          }
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.allowInfinite = true
      }
    },
    async getIndexTweets() {
      try {
        const data = await getUserAllTweets({ page: 1 })

        if (data.iRet === 0) {
          this.tweets = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>
