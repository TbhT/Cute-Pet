<template>
  <f7-page id="topicDetailView" no-toolbar>
    <f7-navbar :title="trimTopicText(topicText)" :back-link="backText"></f7-navbar>

    <div class="me-topic-list">
      <card-list :loadCardData="tweets"></card-list>
    </div>
  </f7-page>
</template>

<script>
import CardList from '../components/card-list.vue'

export default {
  components: {
    CardList
  },
  props: {
    tweets: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      backText: '返回',
      topicText: '话题页'
    }
  },
  methods: {
    trimTopicText(text) {
      text = text || ''

      if (text.length > 10) {
        text = text.substr(0, 10) + '...'
      }

      return text
    }
  }
}
</script>

<style>
</style>
