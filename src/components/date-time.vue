<template>
  <div class="item-content item-input">
    <div class="item-inner">
      <div class="item-input-wrap">
        <input type="text" :placeholder="placeholder" readonly="readonly" :id="elementId">
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
    }
  },
  mounted() {
    this.$f7.picker.create({
      inputEl: this.elementId,
      toolbar: false,
      rotateEffect: true,
      value: [
        
      ]
    })
  }
}
</script>

<style>

</style>
