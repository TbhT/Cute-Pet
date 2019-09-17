<template>
  <f7-page id="personOrdersView" no-toolbar ptr @page:beforein="onPageBeforeIn">
    <f7-navbar title="我的订单" back-link="返回"></f7-navbar>

    <div class="me-order-list" v-if="orderList.length">
      <f7-card :title="order.activity.name + ' - ' + order.name" v-for="(order) in orderList" :key="order.orderId">
        <f7-card-content :padding="false">
          <f7-list>
            <f7-list-item title="订单号" :after="order.orderId"></f7-list-item>
            <f7-list-item title="订单状态" :after="order.status === 1 ? '未支付' : '已支付'"></f7-list-item>
            <f7-list-item title="创建时间" :after="order.createTime"></f7-list-item>
            <f7-list-item title="订单金额" :after="totalFee(order.totalFee)"></f7-list-item>
          </f7-list>
        </f7-card-content>
      </f7-card>
    </div>

    <f7-block v-else>暂无订单~</f7-block>
  </f7-page>
</template>

<script>
import { getOrderList } from '../utils'
export default {
  data() {
    return {
      orderList: []
    }
  },
  methods: {
    async onPageBeforeIn() {
      try {
        const { iRet, data } = await getOrderList()

        if (iRet === 0) {
          console.log('--->>>>>>', data)
          this.orderList = data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    totalFee(fee) {
        return Math.floor(fee / 100) + '元'
    }
  }
}
</script>