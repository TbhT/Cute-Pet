<template>
  <f7-page name="activityPayDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar back-link="返回" title="活动详情"></f7-navbar>

    <f7-toolbar tabbar bottom v-if="activityInfo">
      <f7-link :style="{color: '#007aff'}" :href="href">{{hrefName}}</f7-link>
    </f7-toolbar>

    <div class="block" v-if="activityInfo">
      <h3>{{activityInfo.name}}</h3>

      <div class="block tablet-inset" v-if="activityInfo.image">
        <img :src="activityInfo.image" alt class="me-image" />
      </div>

      <div class="me-item">
        <i class="f7-icons icon size-22">time</i>
        <span>活动时间： {{activityTime}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">time</i>
        <span>报名时间：{{reportTime}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">money_yen_round</i>
        <span>报名费：{{petUnitPrice}} {{personUnitPrice}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">persons</i>
        <span>报名人数：{{joinPersonCount}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>主办方：{{activityInfo.organizer}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>协办方：{{activityInfo.coorganizer}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>活动地点：{{place}}</span>
      </div>
    </div>

    <div class="block" v-if="activityInfo && activityInfo.body" id="me-activity-article">
      <h4>活动详情</h4>
      <div v-html="activityInfo.body"></div>
    </div>

    <div class="block" v-else>暂无详细信息~</div>
  </f7-page>
</template>


<style scoped>
#me-activity-article img {
  width: 100%;
}
.icon.f7-icons {
  font-size: 20px;
}
.me-image {
  width: 100%;
  height: 100%;
}
.me-item {
  margin-bottom: 10px;
}
</style>


<script>
import { getActivityDetail, formatDate, getLocaleDatetime } from '../utils'
import { format } from 'path'

export default {
  props: {
    activityId: null
  },
  data() {
    return {
      activityInfo: null,
      flag: 1
    }
  },
  computed: {
    href() {
      if (this.flag === 1) {
        return `/activity/join/${this.activityId}`
      } else if (this.flag === 2 || this.flag === 3) {
        return '#'
      }
    },
    hrefName() {
      if (this.flag === 1) {
        return '报名参加'
      } else if (this.flag === 2) {
        return '活动报名停止'
      } else if (this.flag === 3) {
        return '已参加活动'
      }
    },
    activityTime() {
      if (!this.activityInfo) {
        return ''
      }

      let bt = this.activityInfo.beginTime
      let et = this.activityInfo.endTime

      bt = formatDate('MM/DD HH:mm', new Date(bt))
      et = formatDate('MM/DD HH:mm', new Date(et))

      return `${bt} - ${et}`
    },
    reportTime() {
      if (!this.activityInfo) {
        return ''
      }

      let bt = this.activityInfo.joinBeginTime
      let et = this.activityInfo.joinEndTime

      bt = formatDate('MM/DD HH:mm', new Date(bt))
      et = formatDate('MM/DD HH:mm', new Date(et))

      return `${bt} - ${et}`
    },
    joinPersonCount() {
      if (!this.activityInfo) {
        return
      }

      let all = this.activityInfo.personCount
      let hasJoin = this.activityInfo.hasJoin

      return `${hasJoin}/${all}`
    },
    place() {
      if (!this.activityInfo) {
        return
      }

      const p = this.activityInfo.province || ''
      const c = this.activityInfo.city || ''
      const a = this.activityInfo.area || ''
      const place = this.activityInfo.place || ''

      return `${p} ${c} ${a} ${place}`
    },
    petUnitPrice() {
      if (!this.activityInfo) {
        return
      }

      const p = this.activityInfo.petUnitPrice

      return `${p}元/宠`
    },
    personUnitPrice() {
      if (!this.activityInfo) {
        return
      }

      const p = this.activityInfo.personUnitPrice

      return `${p}元/人`
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getActivityInfo()
    },
    async getActivityInfo() {
      try {
        console.log(this.activityId)
        if (!this.activityId) {
          return
        }

        const data = await getActivityDetail({ activityId: this.activityId })

        if (data.iRet === 0) {
          console.log(data.data)
          this.activityInfo = data.data
          const now = getLocaleDatetime()
          const joinEndTime = new Date(this.activityInfo.joinEndTime)
          console.log('---now---', now)
          console.log('---end---', joinEndTime)
          if (this.activityInfo.userJoinStatus === 1) {
            this.flag = 3
          } else if (now.valueOf() - joinEndTime.valueOf() > 0) {
            this.flag = 2
          } else {
            this.flag = 1
          }
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
