<template>
  <div>
    <f7-block-title>近期话题</f7-block-title>
    <f7-list v-if="topics.length">
      <f7-list-item
        v-for="topic in topics"
        :title="topic.text"
        :link="getTopicLink(topic)"
        :key="topic.id"
      ></f7-list-item>
    </f7-list>
    <div class="div" v-else>暂无内容</div>
  </div>
</template>

<script>
import { getTopicAll } from '../utils';
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
    getTopicLink(data) {
      return `/topic/${data.topicId}/`
    },
    async getAllTopics() {
      // TODO: 获取近期话题的接口
      try {
        const data = await getTopicAll()

        if (data.length > 0) {
          this.topics = data.data
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

<style>
</style>
