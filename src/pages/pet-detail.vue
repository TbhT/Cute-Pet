<template>
  <f7-page name="petDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding :title="petDetail.nickname"></f7-navbar>

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
                  <div class="item-title">宠物昵称</div>
                  <div class="item-after">{{petDetail.nickname}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">宠物性别</div>
                  <div class="item-after">{{petDetail.gender}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-meida">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">年龄</div>
                  <div class="item-after">{{petDetail.age}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-meida">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">疫苗状况</div>
                  <div class="item-after">{{petDetail.vaccineStatus}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">宠物类型</div>
                  <div class="item-after">{{petDetail.petType}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">品种</div>
                  <div class="item-after">{{petDetail.type}}</div>
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
    petDetail: {
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
