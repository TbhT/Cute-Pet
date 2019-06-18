<template>
  <f7-page name="activityDetail" no-toolbar>
    <f7-navbar :back-link="backText" sliding :title="activityDetail.name"></f7-navbar>

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
                  <div class="item-title">活动名称</div>
                  <div class="item-after">{{activityDetail.name}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">活动开始时间</div>
                  <div class="item-after">{{activityDetail.beginTime}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">活动结束时间</div>
                  <div class="item-after">{{activityDetail.endTime}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-meida">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">报名总人数</div>
                  <div class="item-after">{{activityDetail.totalCount}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">报名总费用</div>
                  <div class="item-after">{{activityDetail.totalCount}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">报名开始时间</div>
                  <div class="item-after">{{activityDetail.joinBeginTime}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">报名截止时间</div>
                  <div class="item-after">{{activityDetail.joinEndTime}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">主办方</div>
                  <div class="item-after">{{activityDetail.organizer}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">承办方</div>
                  <div class="item-after">{{activityDetail.coorganizer}}</div>
                </div>
              </div>
            </li>

            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon iconfont"></i>
                </div>

                <div class="item-inner">
                  <div class="item-title">活动地点</div>
                  <div class="item-after">{{activityDetail.place}}</div>
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
    activityDetail: {
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
      return `background-image:url(${activityDetail.image})`
    }
  }
}
</script>

<style>
</style>
