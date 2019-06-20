<template>
  <div class="me-editor-container">
    <textarea
      type="textarea"
      :placeholder="placeholder"
      :value="editorText"
      @input="editorTextChange"
    ></textarea>

    <div class="block me-profile-image-container" v-if="enableTools">
      <div class="me-profile-image-div">
        <i class="iconfont icon-shangchuantupian me-upload-image-icon" v-if="!imagePreviewUrl"></i>
        <img :src="imagePreviewUrl" class="me-profile-image" v-else>
      </div>

      <div class="me-profile-buttons-div" v-if="enableTools">
        <div class="me-profile-img-input">
          <label for="me-upload-image" class="me-upload-image">上传图片</label>
          <input
            type="file"
            id="me-upload-image"
            name="me-upload-image"
            accept="image/*"
            class="me-input-image"
            @change="imgFileOnChange"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.me-profile-image-container {
  position: relative;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}
.me-profile-image-container .me-profile-image-div {
  width: 100%;
  height: 100px;
}
.me-profile-image-container .me-profile-image-div .me-profile-image {
  width: 100px;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* position: absolute; */
}
.me-profile-image-container .me-profile-buttons-div {
  position: relative;
  display: block;
  margin-top: 23px;
}
.me-profile-image-container .me-profile-buttons-div .me-profile-img-input {
  width: 100px;
  display: block;
}
.me-profile-image-container .me-profile-img-input .me-upload-image {
  position: relative;
  display: block;
  font-size: 15px;
  padding: 7px;
  text-align: center;
  color: white;
  background-color: #6baa99;
  overflow: hidden;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: 0.5s;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.me-profile-image-container .me-input-image {
  display: none;
}
.me-upload-image-icon {
  font-size: 100px;
}

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
</style>


<script>
import { mapState } from 'vuex'
import { imgFilterReg } from '../utils/index.js'

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
    imgFileOnChange(event) {
      let file = event.target.files[0]

      if (!file) {
        return
      }

      if (!imgFilterReg.test(file.type)) {
        this.$f7.dialog.alert('请上传图片', '格式不正确')
      } else {
        const reader = new FileReader()

        reader.onload = e => {
          // console.log(e.target, file)
          this.$emit('image:input', e.target, reader.result)
        }

        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style>
</style>
