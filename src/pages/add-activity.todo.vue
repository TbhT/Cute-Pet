<template>
  <f7-page class="me-add-activity" no-toolbar>
    <f7-navbar back-link="返回" sliding></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="活动名称"
        type="text"
        :value="name"
        placeholder="活动名称"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input label="活动类型" type="select" :value="type" @input="type = $event.target.value">
        <option value="1">萌宠赛事</option>
        <option value="2">宠物趴体</option>
        <option value="3">带宠旅行</option>
      </f7-list-input>

      <f7-list-input
        label="活动地点"
        :value="place"
        placehodler="活动地点"
        @input="place = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名总人数"
        :value="totalCount"
        placeholder="总人数"
        type="number"
        @input="totalCount = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名总费用"
        :value="totalCost"
        placeholder="总费用"
        type="number"
        @input="totalCost = $event.target.value"
      ></f7-list-input>

      <!-- <f7-list-input
        label="活动开始时间"
        type="datetime-local"
        :value="beginTime"
        placeholder="开始时间"
        @input="beginTime = $event.target.value"
      ></f7-list-input> -->

      <date-time elementId="me-activity-begin-time" placeholder="活动开始时间"></date-time>

      <!-- <f7-list-input
        label="活动截止时间"
        type="datepicker"
        :value="endTime"
        placeholder="活动截止时间"
        @input="endTime = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名开始时间"
        type="datepicker"
        :value="joinBeginTime"
        placeholder="报名开始时间"
        @input="joinBeginTime = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名截止时间"
        type="datepicker"
        :value="joinEndTime"
        placeholder="报名截止时间"
        @input="joinEndTime = $event.target.value"
      ></f7-list-input> -->

      <f7-list-input
        label="主办方"
        type="text"
        :value="organizer"
        placeholder="主办方"
        @input="organizer = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="承办方"
        type="text"
        :value="coorganizer"
        placeholder="承办方"
        @input="coorganizer = $event.target.value"
      ></f7-list-input>
    </f7-list>
  </f7-page>
</template>

<script>
import DateTime from '../components/date-time.vue'

export default {
  components: {
    DateTime
  },

  data() {
    return {
      name: '',
      beginTime: 0,
      endTime: 0,
      totalCount: 0,
      totalCost: 0,
      joinBeginTime: 0,
      joinEndTime: 0,
      organizer: '',
      coorganizer: '',
      type: -1,
      place: '',
      calendarParams: {
        monthNames: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        dayNames: [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        ],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        firstDay: 2,
        dateFormat: 'yyyy-mm-dd '
      }
    }
  }
}
</script>

<style>
</style>
