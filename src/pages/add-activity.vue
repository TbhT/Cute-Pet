 <template>
  <f7-page class="me-add-activity" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加活动"></f7-navbar>

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

      <li>
        <date-time
          elementId="me-activity-begin-time"
          :time="beginTime"
          :type="'beginTime'"
          placeholder="活动开始时间"
          @input:change="dateTimeChange"
        ></date-time>
      </li>

      <li>
        <date-time
          elementId="me-activity-end-time"
          :time="endTime"
          :type="'endTime'"
          placeholder="活动截止时间"
          @input:change="dateTimeChange"
        ></date-time>
      </li>

      <li>
        <date-time
          elementId="me-activity-join-begin-time"
          :time="joinBeginTime"
          :type="'joinBeginTime'"
          placeholder="报名开始时间"
          @input:change="dateTimeChange"
        ></date-time>
      </li>

      <li>
        <date-time
          elementId="me-activity-join-end-time"
          :time="joinEndTime"
          :type="'joinEndTime'"
          placeholder="报名截止时间"
          @input:change="dateTimeChange"
        ></date-time>
      </li>

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

    <f7-block>
      <f7-row>
        <f7-button class="col" raised @click="back">取消</f7-button>
        <f7-button class="col" fill raised color="green" @click="submitActivityData">提交</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import DateTime from '../components/date-time.vue'
import { addActivity } from '../utils/index.js'

export default {
  components: {
    DateTime
  },
  data() {
    return {
      name: '',
      beginTime: '',
      endTime: '',
      totalCount: 0,
      totalCost: 0,
      joinBeginTime: '',
      joinEndTime: '',
      organizer: '',
      coorganizer: '',
      type: -1,
      place: ''
    }
  },
  computed: {
    $$name: function() {
      return this.name
    },
    $$beginTime: function() {
      return this.beginTime
    },
    $$endTime: function() {
      return this.endTime
    },
    $$totalCount: function() {
      return Number(this.totalCount)
    },
    $$totalCost: function() {
      return Number(this.totalCost)
    },
    $$joinBeginTime: function() {
      return this.joinBeginTime
    },
    $$joinEndTime: function() {
      return this.joinEndTime
    },
    $$organizer: function() {
      return this.organizer
    },
    $$coorganizer: function() {
      return this.coorganizer
    },
    $$type: function() {
      return Number(this.type)
    },
    $$place: function() {
      return this.place
    }
  },
  methods: {
    dateTimeChange({ type, value }) {
      if (type === 'beginTime') {
        this.beginTime = value
      } else if (type === 'endTime') {
        this.endTime = value
      } else if (type === 'joinBeginTime') {
        this.joinBeginTime = value
      } else if (type === 'joinEndTime') {
        this.joinEndTime = value
      }
    },
    async submitActivityData() {
      try {
        this.$f7.preloader.show()

        const result = await addActivity(this)
        this.$f7.preloader.hide()

        if (!result) {
          console.log('创建活动失败', result)
          this.$f7.toast.create({
            text: '创建活动失败'
          })

          return
        }

        this.$f7.toast.create({
          text: '创建活动成功'
        })
        this.resetAllProps()

        setTimeout(() => {
          this.$f7router.back()
        }, 1000)
      } catch (error) {
        console.error(error)
        this.$f7.preloader.hide()
        this.$f7.toast.create({
          text: '创建活动失败'
        })
      }
    },
    resetAllProps() {
      this.name = ''
      this.beginTime = ''
      this.endTime = ''
      this.totalCount = 0
      this.totalCost = 0
      this.joinBeginTime = ''
      this.joinEndTime = ''
      this.organizer = ''
      this.coorganizer = ''
      this.type = -1
      this.place = ''
    },
    back() {
      this.$f7router.back('/')
    }
  }
}
</script>

<style>
</style>
