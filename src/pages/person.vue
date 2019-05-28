<template>
  <f7-page id="personView">
    <f7-navbar title="宠伢"></f7-navbar>

    <f7-list class="me-person-profile">
      <f7-list-item link>
        <img src="https://loremflickr.com/1000/700/nature?lock=5" slot="media">
        <div class slot="inner-start">
          <div class="me-person-name">假装这里有个人</div>
          <div class="me-person-master-pet">这里是我的宠物</div>
        </div>
      </f7-list-item>
    </f7-list>

    <f7-list class="me-person-pet-list">
      <f7-list-item divider title="我的宠物"></f7-list-item>
      <f7-list-item title="所有宠物" link="#"></f7-list-item>
    </f7-list>

    <f7-list class="me-person-activity">
      <f7-list-item divider title="我的活动"></f7-list-item>
      <f7-list-item title="赛事" link="#"></f7-list-item>
      <f7-list-item title="活动" link="#"></f7-list-item>
    </f7-list>

    <f7-list class="me-person-other">
      <f7-list-item divider title="其他"></f7-list-item>
      <f7-list-item title="商家合作" link="#"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {}
</script>

<style scoped>
.me-person-profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
