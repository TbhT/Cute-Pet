<template>
  <div>
    <f7-block-title  class="me-topic-title" >近期话题</f7-block-title>
    <f7-list v-if="topics.length">
      <f7-list-item
        v-for="topic in topics"
        :title="topic.text"
        :link="getTopicLink(topic)"
        :key="topic.id"
      ></f7-list-item>
    </f7-list>
    <f7-block v-else inset>暂无话题</f7-block>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    getTopicLink(data) {
      return `/topic/${data.topicId}/`
    }
  }
}
</script>

<style scoped>
.me-topic-title {
  margin-top: 10px;
}
</style>
