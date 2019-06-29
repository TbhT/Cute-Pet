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
      <f7-list-item link="#" :key="activity.activityId" v-for="activity in activities" media-item></f7-list-item>
    </f7-list>

    <f7-block v-else inset>
      <p>暂无赛事信息</p>
    </f7-block>
  </f7-page>
</template>

<script>
import { getUserActivities } from '../utils'

export default {
  methods: {},
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
