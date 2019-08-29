<template>
  <f7-page name="personDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="个人信息"></f7-navbar>

    <f7-block-title>用户信息</f7-block-title>
    <f7-list class="me-person-detail-list media-list" v-if="userInfo">
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">姓名</div>
            </div>
            <div class="item-text">{{userInfo.name || '暂无'}}</div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">昵称</div>
            </div>
            <div class="item-text">{{userInfo.nickname || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">手机号</div>
            </div>
            <div class="item-text">{{userInfo.mobile || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">年龄</div>
            </div>
            <div class="item-text">{{userInfo.age || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">性别</div>
            </div>
            <div class="item-text">{{gender || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">城市</div>
            </div>
            <div class="item-text">{{userInfo.city || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">省份</div>
            </div>
            <div class="item-text">{{userInfo.province || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">住址</div>
            </div>
            <div class="item-text">{{userInfo.address || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">身份证号</div>
            </div>
            <div class="item-text">{{userInfo.idCard || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">身高/cm</div>
            </div>
            <div class="item-text">{{userInfo.high || '暂无'}}</div>
          </div>
        </a>
      </li>
    </f7-list>

    <f7-block v-if="userInfo">
      <f7-row>
        <f7-button href="/person/update" class="col" fill raised color="green">更新</f7-button>
      </f7-row>
    </f7-block>

    <f7-block v-else inset>暂无相关信息</f7-block>
  </f7-page>
</template>



<script>
import { getUserInfo } from '../utils'

export default {
  data() {
    return {
      backText: '返回',
      userInfo: null
    }
  },
  computed: {
    gender() {
      if (this.userInfo.gender == 1) {
        return '男'
      } else if (this.userInfo.gender === 0) {
        return '女'
      } else {
        return ''
      }
    }
  },
  methods: {
    async onPageBeforeIn() {
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
    }
  }
}
</script>

<style scoped>
.me-person-detail-list {
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
