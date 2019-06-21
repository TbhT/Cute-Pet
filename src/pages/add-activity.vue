 <template>
  <f7-page class="me-add-activity" no-toolbar>
    <f7-navbar back-link="返回" sliding title="添加活动"></f7-navbar>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="活动名称"
        type="text"
        :value="name"
        placeholder="活动名称"
        error-message="活动名称不能为空"
        :error-message-force="showNameErrorFlag"
        @input="name = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="活动类型"
        type="select"
        :value="type"
        @input="type = $event.target.value"
        error-message="活动赛事不能为空"
        :error-message-force="showTypeErrorFlag"
      >
        <option value="1">萌宠赛事</option>
        <option value="2">宠物趴体</option>
        <option value="3">带宠旅行</option>
      </f7-list-input>

      <f7-list-input
        label="活动地点"
        :value="place"
        placehodler="活动地点"
        error-message="活动地点不能为空"
        :error-message-force="showPlaceErrorFlag"
        @input="place = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名总人数"
        :value="totalCount"
        placeholder="总人数"
        type="number"
        error-message="总人数不能为0"
        :error-message-force="showTotalCountErrorFlag"
        @input="totalCount = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="报名总费用"
        :value="totalCost"
        placeholder="总费用"
        type="number"
        error-message="总费用不能为0"
        :error-message-force="showTotalCostErrorFlag"
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
        error-message="主办方不能为空"
        :error-message-force="showOrganizerErrorFlag"
        @input="organizer = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="承办方"
        type="text"
        :value="coorganizer"
        placeholder="承办方"
        error-message="承办方不能为空"
        :error-message-force="showCoorganizerErrorFlag"
        @input="coorganizer = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <div class="block block-strong">
      <div class="block-header">上传活动图片</div>
      <picture-input
        ref="pictureInput"
        @change="onChange"
        width="200"
        height="200"
        margin="16"
        accept="image/jpeg, image/png"
        size="10"
        hideChangeButton
        :removable="true"
        :customStrings="{upload: '<p>上传活动图片</p>', tap: '<p>上传活动图片</p>', remove: '清除'}"
      ></picture-input>
    </div>

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
import PictureInput from 'vue-picture-input'

export default {
  components: {
    DateTime,
    PictureInput
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
      place: '',
      picture: '',
      showNameErrorFlag: false,
      showTypeErrorFlag: false,
      showPlaceErrorFlag: false,
      showTotalCountErrorFlag: false,
      showTotalCostErrorFlag: false,
      showOrganizerErrorFlag: false,
      showCoorganizerErrorFlag: false
    }
  },
  methods: {
    onChange(image) {
      this.picture = image
    },
    toast(msg) {
      const toast = this.$f7.toast.create({
        text: msg,
        closeTimeout: 2000,
        position: 'center'
      })
      toast.open()
    },
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
        setTimeout(() => {
          this.showNameErrorFlag = false
          this.showTypeErrorFlag = false
          this.showPlaceErrorFlag = false
          this.showTotalCountErrorFlag = false
          this.showTotalCostErrorFlag = false
          this.showOrgazierErrorFlag = false
          this.showCoorgazierErrorFlag = false
        }, 3000)

        if (!this.name) {
          return (this.showNameErrorFlag = true)
        }

        if (!this.type) {
          return (this.showTypeErrorFlag = true)
        }

        if (!this.place) {
          return (this.showPlaceErrorFlag = true)
        }

        if (!this.totalCount) {
          return (this.showTotalCountErrorFlag = true)
        }

        if (!this.totalCost) {
          return (this.showTotalCostErrorFlag = true)
        }

        if (!this.organizer) {
          return (this.showOrgazierErrorFlag = true)
        }

        if (!this.coorganizer) {
          return (this.showCoorgazierErrorFlag = true)
        }

        if (!this.picture) {
          return this.toast('活动封面图片不能为空')
        }

        this.$f7.preloader.show()

        const result = await addActivity(this)

        this.$f7.preloader.hide()

        if (!result) {
          console.log('创建活动失败', result)
          this.toast('创建活动失败')
          return
        }

        this.toast('创建活动成功')
        this.resetAllProps()

        setTimeout(() => {
          this.back()
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
      this.$f7router.back()
    }
  }
}
</script>

<style>
</style>
