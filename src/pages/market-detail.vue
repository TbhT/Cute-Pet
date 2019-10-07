<template>
  <f7-page name="marketDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="商家信息"></f7-navbar>

    <div class="block" v-if="marketInfo">
      <h3>{{marketInfo.name}}</h3>

      <div class="block table-inset" v-if="marketInfo.image">
        <img :src="marketInfo.image" alt class="me-image" />
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>商家名称：{{marketInfo.name}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>联系人：{{marketInfo.contact}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">info_round</i>
        <span>联系方式：{{marketInfo.phone}}</span>
      </div>

      <div class="me-item">
        <i class="f7-icons icon">placemark</i>
        <span>地点：{{marketInfo.place}}</span>
      </div>

      <div class="me-item" v-html="marketInfo.body" v-if="marketInfo.body">
        
      </div>
    </div>

    <div class="block" v-else>暂无详细信息~</div>
  </f7-page>
</template>

<style>
.me-image {
  width: 100%;
  height: 100%;
}
.me-item {
  margin-bottom: 10px;
}
.icon.f7-icons {
  font-size: 20px;
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
      this.getMarketDetail()
    },
    async getMarketDetail() {
      try {
        if (!this.marketId) {
          return
        }

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
