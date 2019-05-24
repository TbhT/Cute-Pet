<template>
  <f7-page id="me-editor">
    <div class="me-editor-container">
      <textarea type="textarea" :placeholder="placeholder" value="text" v-model="editText"></textarea>
      <ul class="me-tools" v-show="enableTools('image')">
        <li class="me-tool">
          <i class="iconfont icon-pic"></i>
        </li>
      </ul>
    </div>
  </f7-page>
</template>

<script>
export default {
  props: {
    enableTools: {
      type: Array,
      default: function () {
        return []
      }
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
