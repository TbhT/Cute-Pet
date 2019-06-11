<template>
  <f7-page id="personTweetsView" no-toolbar>
    <f7-navbar title="我的动态" back-link="返回"></f7-navbar>

    <card-list :loadCardData="tweets"></card-list>
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
      page: 1
    }
  },
  mounted() {
    this.getIndexTweets()
  },
  methods: {
    loadMoreTweets() {
      // TODO: 加载更多推特
    },
    async getIndexTweets() {
      // TODO: 加载首屏推特
      const data = await getUserAllTweets({ page: 1 })

      if (data) {
        this.tweets = data
      }
    }
  }
}
</script>

<style>
</style>
