<template>
  <div class="item-content item-input">
    <div class="item-inner">
      <div class="item-title item-label"></div>

      <div class="item-input-wrap">
        <input type="text" @change="onChange" :placeholder="placeholder" readonly="readonly" :id>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    elementId: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    onChange() {}
  }
}
</script>

<style>
</style>
