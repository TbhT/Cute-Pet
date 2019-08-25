<template>
  <f7-page name="activityJoin" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar back-link="返回" title="报名参加"></f7-navbar>

    <f7-block class="text-align-left">
      <div>
        <i class="f7-icons icon">money_yen_round</i>
        <span>报名费：{{petUnitPrice}} {{personUnitPrice}}</span>
      </div>
    </f7-block>

    <f7-block class="text-align-left">
      <div>
        <p>选择参与活动的人数</p>
        <f7-stepper :input="false" round :min="1" @stepper:change="onPersonChange"></f7-stepper>
      </div>

      <div>
        <p>选择参与活动的宠物数量</p>
        <f7-stepper :input="false" round :min="1" @stepper:change="onPetChange"></f7-stepper>
      </div>

      <div>
        <p>总金额：{{allPrice}} 元</p>
      </div>
    </f7-block>

    <f7-block v-if="status === 1">
      <f7-row>
        <f7-button class="col" raised @click="back">取消</f7-button>
        <f7-button class="col" fill raised color="green" @click="submitData">报名</f7-button>
      </f7-row>
    </f7-block>

    <f7-block v-if="status === 2" class="text-align-center">已经参加活动</f7-block>
  </f7-page>
</template>

<script>
import { getActivityDetail, joinActivity, getUserInfo } from '../utils'

const userMap = {
  mobile: '手机号',
  name: '姓名',
  birth: '生日',
  gender: '性别',
  age: '年龄',
  city: '城市',
  province: '省份',
  address: '地址',
  idCard: '身份证号',
  high: '身高'
}

export default {
  props: {
    activityId: null
  },
  data() {
    return {
      activityInfo: null,
      personCount: 1,
      petCount: 1,
      status: 1,
      userInfo: null
    }
  },
  computed: {
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
    },
    allPrice() {
      if (!this.activityInfo) {
        return 0
      }

      const personPrice = this.personCount * this.activityInfo.personUnitPrice
      const petPrice = this.petCount * this.activityInfo.petUnitPrice

      return Math.floor(personPrice) + Math.floor(petPrice)
    }
  },
  methods: {
    async submitData() {
      try {
        if (!this.activityInfo || !this.userInfo) {
          return
        }

        if (this.activityInfo.tag && this.activityInfo.tag.length) {
          let key
          const flag = this.activityInfo.tag.some(k => {
            if (!this.userInfo[k]) {
              key = k
              return true
            }

            return false
          })

          if (flag) {
            return this.$f7.dialog.confirm('请先完善个人信息', null, () => {
              this.$f7router.navigate('/person/update')
            })
          }
        }

        if (this.status === 2) {
          return this.toast('已经参加过该活动了')
        }

        const { iRet, data } = await joinActivity({
          activityId: this.activityId
        })

        if (iRet === 0) {
          this.status = 2
          setTimeout(() => {
            this.back()
          }, 1000)
        } else {
          this.toast('参加活动失败，请稍后重试')
        }
      } catch (error) {
        console.error(error)
      }
    },
    back() {
      this.$f7router.back()
    },

    onPersonChange(value) {
      this.personCount = value
    },
    onPetChange(value) {
      this.petCount = value
    },
    onPageBeforeIn() {
      this.getActivityInfo()
      this.getUserInfo()
    },
    async getUserInfo() {
      try {
        const { iRet, data } = await getUserInfo()
        if (iRet === 0) {
          this.userInfo = data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getActivityInfo() {
      try {
        if (!this.activityId) {
          return
        }

        const { iRet, data } = await getActivityDetail({
          activityId: this.activityId
        })

        if (iRet === 0) {
          this.activityInfo = data
          this.status = data.status
        } else {
          console.error(data, iRet)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  toast(msg) {
    const toast = this.$f7.toast.create({
      text: msg,
      closeTimeout: 2000,
      position: 'center'
    })
    toast.open()
  }
}
</script>

