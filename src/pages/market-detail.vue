<template>
  <f7-page name="marketDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding :title="marketDetail.name"></f7-navbar>

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
                  <div class="item-title">商家名称</div>
                  <div class="item-after">{{marketDetail.name}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <div class="icon iconfont"></div>
                </div>

                <div class="item-inner">
                  <div class="item-title">联系人</div>
                  <div class="item-after">{{marketDetail.contact}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <div class="icon iconfont"></div>
                </div>

                <div class="item-inner">
                  <div class="item-title">联系方式</div>
                  <div class="item-after">{{marketDetail.phoneNumber}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">地点</div>
                  <div class="item-after">{{marketDetail.place}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <div class="icon iconfont"></div>
                </div>

                <div class="item-inner">
                  <div class="item-title">工作时间</div>
                  <div class="item-after">{{marketDetail.workTime}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <div class="icon iconfont"></div>
                </div>

                <div class="item-inner">
                  <div class="item-title">简介</div>
                  <div class="item-after">{{marketDetail.intro}}</div>
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
    marketDetail: {
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
