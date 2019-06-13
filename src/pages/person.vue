<template>
  <f7-page id="personView" @page:beforein="onPageBeforeIn">
    <f7-navbar title="我的"></f7-navbar>

    <f7-list class="me-person-profile">
      <f7-list-item link>
        <img :src="user.image" slot="media">
        <div class slot="inner-start">
          <div class="me-person-name">{{user.nickname}}</div>
          <div class="me-person-master-pet">{{pet.nickname}}</div>
        </div>
      </f7-list-item>
    </f7-list>

    <f7-list class="me-person-pet-list">
      <f7-list-item divider title="我的宠物"></f7-list-item>
      <li class="item-content">
        <a href="/person/pets">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">
                <i class="iconfont icon-pets"></i>
                <div>宠物</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </f7-list>

    <f7-list class="me-person-tweet">
      <f7-list-item divider title="我的互动"></f7-list-item>

      <a href="/person/tweets">
        <li class="item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">
                <i class="iconfont icon-activity1"></i>
                <div>动态</div>
              </div>
            </div>
          </div>
        </li>
      </a>
    </f7-list>

    <f7-list class="me-person-activity">
      <f7-list-item divider title="我的活动"></f7-list-item>
      <a href="/person/activities">
        <li class="item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">
                <i class="iconfont icon-xunzhang"></i>
                活动勋章
              </div>
              <div class="item-cell">
                <i class="iconfont icon-xunzhang"></i>
                赛事勋章
              </div>
            </div>
          </div>
        </li>
      </a>
    </f7-list>

    <f7-list class="me-person-other">
      <f7-list-item divider title="其他"></f7-list-item>
      <a href="/market/add">
        <li class="item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">
                <i class="iconfont icon-shangjia"></i>
                <div>商家</div>
              </div>
            </div>
          </div>
        </li>
      </a>
    </f7-list>
  </f7-page>
</template>

<script>
import { getUserInfo } from '../utils'
export default {
  data: function() {
    return {
      user: {},
      pet: {}
    }
  },
  methods: {
    async onPageBeforeIn() {
      const data = await getUserInfo()
      if (data.iRet === 0) {
        this.user = data.data.userInfo
        this.pet = data.data.pet
      } else {
        console.error(data)
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
</style>
