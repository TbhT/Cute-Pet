<template>
  <div class="me-editor-container">
    <textarea
      type="textarea"
      :placeholder="placeholder"
      :value="editorText"
      @input="editorTextChange"
    ></textarea>

    <ul class="me-tools" v-show="enableTools">
      <li class="me-tool me-image-preview" v-show="imagePreviewUrl">
        <img class="me-image" :src="imagePreviewUrl">
      </li>
      <li class="me-tool" @click="triggeImageClick" v-show="!imagePreviewUrl">
        <i class="iconfont icon-pic"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.me-editor-container > textarea {
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
.me-tools {
  display: flex;
  list-style: none;
  padding-left: 20px;
  margin-top: 5px;
}
.me-tools .me-tool i {
  font-size: 40px;
}
.me-tools .me-tool {
  margin-right: 10px;
}
.me-tools .me-tool.me-image-preview img {
  width: 150px;
  height: 150px;
}
.me-tools .me-tool .me-file-input {
  /* position: absolute; */
  opacity: 0;
  display: none;
}
</style>


<script>
import { mapState } from 'vuex'
import { imgFilterReg } from '../utils/index.js'

function imgFileOnChange(input) {
  let file = input.files[0]

  if (!file) {
    file = input = null
    return
  }

  if (!imgFilterReg.test(file.type)) {
    this.$f7.toast.create({
      text: '请上传图片',
      position: 'center',
      closeTimeout: 2000
    })
    file = input = null
    return
  } else {
    const reader = new FileReader()
    reader.onload = event => {
      this.$emit('image:input', event.target, file)
    }
    reader.readAsDataURL(file)
  }
}

export default {
  props: {
    enableTools: {
      type: Boolean,
      default: false
    },
    editorText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    imagePreviewUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    editorTextChange(text) {
      this.$emit('text:input', text.target.value)
    },
    uploadImage(image) {
      this.$emit('image:input', image)
    },
    triggeImageClick() {
      let input = document.createElement('input')
      input.type = 'file'
      input.onchange = imgFileOnChange.bind(this, input)
      input.click()
    }
  }
}
</script>

<style>
</style>
