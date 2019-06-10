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

<style>
</style>
