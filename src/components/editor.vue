<template>
  <div class="me-editor-container">
    <textarea type="textarea" :placeholder="placeholder" :value="editorText" @input="editorTextChange"></textarea>
    <ul class="me-tools" v-show="enableTool('image')">
      <li class="me-tool">
        <i class="iconfont icon-pic"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .me-editor-container>textarea {
    width: 100%;
    height: 150px;
    font-size: 15px;
    border: none;
    color: #444;
    margin: 0;
    padding: 5px;
    resize: none;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>


<script>
import { mapState } from 'vuex'


export default {
  props: {
    enableTools: {
      type: Array,
      default: function() {
        return []
      }
    },
    editorText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    enableTool(name) {
      return ~this.enableTools.indexOf(name)
    },
    editorTextChange(text) {
      this.$emit('text:input', text.target.value)
    }
  }
}
</script>

<style>
</style>
