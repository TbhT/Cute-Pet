<template>
  <f7-page id="personView" @page:beforein="onPageBeforeIn" :page-content="false">
    <f7-navbar title="我的"></f7-navbar>

    <f7-page-content>
      <f7-list class="me-person-profile">
        <f7-list-item :link="link">
          <img :src="userInfo.avatar || '/images/person.png'" slot="media" v="userInfo.avatar" />
          <!-- <div class="me-default-icon icon iconfont icon-person" v-else slot="media"></div> -->
          <div class slot="inner-start" v-if="user.isLogin">
            <div class="me-person-name">用户：{{userInfo.nickname || userInfo.mobile}}</div>
            <!-- <div class="me-person-master-pet">{{(pet && pet.name) || ''}}</div> -->
          </div>

          <div class slot="inner-start" v-else>
            <div class="me-person-name">未登录/未注册</div>
          </div>
        </f7-list-item>
      </f7-list>

      <f7-list class="me-person-list">
        <f7-list-item title="宠物资料" link="/person/pets">
          <img src="/images/icon.png" alt slot="media" />
        </f7-list-item>
        <f7-list-item title="社交动态" link="/person/tweets">
          <img src="/images/tweet.png" alt slot="media" />
        </f7-list-item>
        <f7-list-item title="参与活动" link="/person/activities">
          <img src="/images/activity.png" alt slot="media" />
        </f7-list-item>
        <f7-list-item title="我的订单" link="/person/orders">
          <img src="/images/order.png" alt slot="media" />
        </f7-list-item>
        <f7-list-item title="商务合作" link="#">
          <img src="/images/partner.png" alt slot="media" />
        </f7-list-item>
        <f7-list-item title="意见反馈" link="#">
          <img src="/images/help.png" alt slot="media" />
        </f7-list-item>

        <!-- <f7-list-item title="退出" link="/person/activities"></f7-list-item> -->
        <!-- <f7-list-item title="商家" link="/market/add"></f7-list-item> -->
        <!-- <f7-list-item title="登录" link="/user/login"></f7-list-item> -->
      </f7-list>
    </f7-page-content>
  </f7-page>
</template>

<script>
import { getUserInfo } from '../utils'
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      userInfo: {},
      pet: {},
      isGetUserInfo: false,
      isTabFirstShow: false,
      isPageFirstIn: false
    }
  },
  computed: {
    ...mapState(['user']),
    link() {
      if (!this.user.isLogin) {
        return `/user/login`
      }

      return `/person/detail`
    }
  },
  methods: {
    async onPageBeforeIn() {
      try {
        // if (!this.user.isLogin) {
        //   return this.$f7router.navigate('/user/login')
        // }

        if (this.isPageFirstIn) {
          return
        }

        const data = await getUserInfo()
        this.isPageFirstIn = true

        if (data.iRet === 0 && data.data) {
          console.log('----------', data.data)
          this.userInfo = data.data

          // if (data.data.pet) {
          //   this.pet = data.data.pet
          // }

          this.isGetUserInfo = true
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

<style scoped>
.me-person-profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.list {
  margin: 10px 0;
}
.me-default-icon {
  font-size: 60px;
}
.me-person-list img {
  width: 40px;
  height: 40px;
}
</style>
