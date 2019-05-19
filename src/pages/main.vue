<template>
  <f7-page>
    <f7-toolbar tabbar labels>
      <f7-link icon="iconfont icon-ios7homeoutline" text="首页" tab-link="#tab-home" tab-link-active></f7-link>
      <f7-link icon="iconfont icon-activity" text="活动" tab-link="#tab-activities"></f7-link>
      <f7-link icon="iconfont icon-market1" text="市场" tab-link="#tab-market"></f7-link>
      <f7-link icon="iconfont icon-person" text="我的" tab-link="#tab-person"></f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="tab-home" tab-active>
        <home-view></home-view>
      </f7-tab>
      <f7-tab id="tab-activities">
        <activities-view></activities-view>
      </f7-tab>
      <f7-tab id="tab-market">
        <market-view></market-view>
      </f7-tab>
      <f7-tab id="tab-person">
        <person-view></person-view>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import HomeView from './main/home.vue'
import ActivitiesView from './main/activities.vue'
import MarketView from './main/market.vue'
import PersonView from './main/person.vue'

export default {
  components: {
    HomeView,
    ActivitiesView,
    MarketView,
    PersonView
  }
}
</script>

<style>
</style>
