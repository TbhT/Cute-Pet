<template>
  <f7-page name="activityDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="活动信息"></f7-navbar>

    <f7-block-title>赛事信息</f7-block-title>
    <f7-list class="me-activity-detail-list media-list" v-if="activityInfo">
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">活动名称</div>
              {{activityInfo.name || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">活动开始时间</div>
              {{activityInfo.beginTime || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">活动结束时间</div>
              {{activityInfo.endTime || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">报名总人数</div>
              {{activityInfo.totalCount || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">报名总费用</div>
              {{activityInfo.totalCost || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">报名开始时间</div>
              {{activityInfo.joinBeginTime || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">报名结束时间</div>
              {{activityInfo.joinEndTime || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">主办方</div>
            </div>
            <div class="item-text">{{activityInfo.organizer || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">承办方</div>
            </div>
            <div class="item-text">{{activityInfo.coorganizer || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">活动地点</div>
            </div>
            <div class="item-text">{{activityInfo.place || '暂无'}}</div>
          </div>
        </a>
      </li>
    </f7-list>

    <f7-block v-else inset>暂无赛事信息</f7-block>
  </f7-page>
</template>

<style scoped>
.me-activity-detail-list {
  word-break: break-all;
}
.block-title {
  font-size: 20px;
  padding: 0px;
  height: 30px;
}
.me-list-item .item-title,
.me-list-item .item-text {
  color: black;
  font-weight: inherit;
  font-size: 17px;
}
.me-list-item .item-title > .item-header {
  color: grey;
  font-size: 16px;
  padding-bottom: 5px;
}
</style>


<script>
import { getActivityDetail } from '../utils'

export default {
  props: {
    activityId: null
  },
  data() {
    return {
      backText: '返回',
      activityInfo: null
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getActivityInfo()
    },
    async getActivityInfo() {
      try {
        const data = await getActivityDetail({ activityId: this.activityId })

        if (data.iRet === 0) {
          this.activityInfo = data.data
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
