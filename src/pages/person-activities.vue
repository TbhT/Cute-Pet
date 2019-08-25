<template>
  <f7-page
    no-toolbar
    ptr
    :infinite-preloader="showPreloader"
    @ptr:refresh="onRefresh"
    @infinite="loadMore"
    @page:beforein="onPageBeforeIn"
  >
    <f7-navbar title="我的赛事" back-link="返回"></f7-navbar>

    <f7-list media-list class="me-media-list me-acitivities" v-if="activities.length">
      <f7-list-item
        :key="activity.activityId"
        v-for="activity in activities"
        media-item
        :subtitle="formatSubtitle(activity)"
        :title="activity.name"
        :text="formatPlace(activity)"
        :link="getDetailLink(activity)"
      >
        <img :src="activity.image" slot="media" width="80" height="80" class="lazy lazy-fade-in" />
      </f7-list-item>
    </f7-list>

    <f7-block v-else inset>
      <p>暂无赛事信息</p>
    </f7-block>
  </f7-page>
</template>

<script>
import { getUserActivities } from '../utils'

export default {
  data() {
    return {
      activities: [],
      page: 1,
      showPreloader: true,
      allowInfinite: true,
      isLoadAll: false,
      isPageFirstIn: false
    }
  },
  methods: {
    getDetailLink(activity) {
      return `/activities/detail/${activity.activityId}`
    },
    formatSubtitle(data) {
      return `总名额: ${data.personCount} 人`
    },
    formatPlace(data) {
      return `活动地点: ${data.place}`
    },
    onPageBeforeIn() {
      if (this.isPageFirstIn) {
        return
      }

      this.getIndexActivities()
      this.isPageFirstIn = true
    },
    async onRefresh(event, done) {
      await this.getIndexActivities()
      done()
    },
    async loadMore() {
      if (!this.allowInfinite || this.isLoadAll) {
        return
      }

      this.allowInfinite = false

      try {
        const data = await getUserActivities({ page: this.page + 1 })

        if (data.iRet === 0) {
          this.page = this.page + 1
          if (data.data.length === 0) {
            this.showPreloader = false
            this.isLoadAll = true
          } else {
            this.activities = [...data.data, ...this.activities]
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
    async getIndexActivities() {
      try {
        const data = await getUserActivities({ page: 1 })

        if (data.iRet === 0) {
          this.activities = data.data
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
