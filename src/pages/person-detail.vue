<template>
  <f7-page name="personDetail" no-toolbar>
    <f7-navbar></f7-navbar>

    <f7-card>
      <f7-card-header valign="bottom" :style="style"></f7-card-header>

      <f7-card-content>
        <div class="list">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">姓名</div>
                  <div class="item-after">{{userInfo.name}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">昵称</div>
                  <div class="item-after">{{userInfo.nickname}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">性別</div>
                  <div class="item-after">{{userInfo.gender}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">年龄</div>
                  <div class="item-after">{{userInfo.age}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">家庭住址</div>
                  <div class="item-after">{{userInfo.homeAddress}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">工作地址</div>
                  <div class="item-after">{{userInfo.workAddress}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backText: '返回'
    }
  },
  computed: {
    style() {
      return `background-image:url(${marketDetail.image})`
    }
  }
}
</script>

<style>
</style>
