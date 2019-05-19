<template>
  <div class="me-editor-container">
    <textarea type="textarea" :placeholder="placeholder" value="text" v-model="editText"></textarea>
    <ul class="me-tools">
      <li class="me-tool" v-show="enableTools('image')">
        <i class="iconfont icon-pic"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    enableTools: {
      type: Array,
      default: ['image']
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editText: ''
    }
  },
  watch: {
    editText(text) {
      this.$emit('text:change', text)
    }
  },
  methods: {
    enableTools(name) {
      return ~this.enableTools.indexOf(name)
    }
  }
}
</script>

<style>

</style>
