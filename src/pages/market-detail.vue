<template>
  <f7-page name="marketDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="商家信息"></f7-navbar>

    <f7-block-title>商家信息</f7-block-title>

    <f7-list class="me-market-detail-list media-list" v-if="marketInfo">
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">商家名称</div>
              {{marketInfo.name || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">联系人</div>
              {{marketInfo.contact || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">联系方式</div>
              {{marketInfo.phoneNumber || '暂无'}}
            </div>
            <div class="item-after"></div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">工作时间</div>
              {{marketInfo.workTime || '暂无'}}
            </div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">地点</div>
            </div>
            <div class="item-text">{{marketInfo.place || '暂无'}}</div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">简介</div>
            </div>
            <div class="item-text">{{marketInfo.intro || '暂无'}}</div>
          </div>
        </a>
      </li>
    </f7-list>

    <f7-block v-else inset>暂无商家信息</f7-block>
  </f7-page>
</template>

<style scoped>
.me-market-detail-list {
  word-break: break-all;
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
import { getMarketDetail } from '../utils'
export default {
  props: {
    marketId: null
  },
  data() {
    return {
      backText: '返回',
      marketInfo: null
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getMarketInfo()
    },
    async getMarketInfo() {
      try {
        const data = await getMarketDetail({ marketId: this.marketId })
        if (data.iRet === 0) {
          this.marketInfo = data.data
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

