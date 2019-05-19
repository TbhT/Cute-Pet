<template>
  <div>
    <f7-block-title>近期话题</f7-block-title>
    <f7-list v-if="topics.length">
      <f7-list-item v-for="topic in topics" :title="topic.text" link="#" :key="topic.id"></f7-list-item>
    </f7-list>
    <div class="div" v-else>暂无内容</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: []
    }
  },
  mounted() {
    this.getAllTopics()
  },
  methods: {
    getAllTopics() {
      // TODO: 获取近期话题的接口
      console.log('获取近期话题----------')

      setTimeout(() => {
        this.topics = [
          {
            id: 1,
            text: '#这里是第一条#'
          },
          {
            id: 2,
            text: '#这里是第二条#'
          },
          {
            id: 3,
            text: '#这里是第三条#'
          },
          {
            id: 4,
            text: '#这里是第四条#'
          }
        ]
      }, 1000)
    }
  }
}
</script>

<style>
</style>
