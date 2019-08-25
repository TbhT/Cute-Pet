<template>
  <f7-page name="petDetail" no-toolbar @page:beforein="onPageBeforeIn">
    <f7-navbar :back-link="backText" sliding title="宠物信息"></f7-navbar>

    <f7-list class="me-pet-detail-list media-list" v-if="petInfo">
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">宠物昵称</div>
            </div>
            <div class="item-text">{{petInfo.nickname || '暂无'}}</div>
          </div>
        </a>
      </li>
      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">宠物性别</div>
            </div>
            <div class="item-text">{{gender || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">年龄</div>
            </div>
            <div class="item-text">{{petInfo.age || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">疫苗状况</div>
            </div>
            <div class="item-text">{{vaccineStatus || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">宠物类型</div>
            </div>
            <div class="item-text">{{petInfo.petType || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">品种</div>
            </div>
            <div class="item-text">{{petInfo.subType || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">体重</div>
            </div>
            <div class="item-text">{{petInfo.weight || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">是否阉割</div>
            </div>
            <div class="item-text">{{neuter}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">尺寸</div>
            </div>
            <div class="item-text">{{this.petInfo.size || '暂无'}}</div>
          </div>
        </a>
      </li>

      <li class="me-list-item">
        <a class="item-content">
          <div class="item-inner">
            <div class="item-title">
              <div class="item-header">颜色</div>
            </div>
            <div class="item-text">{{this.petInfo.color || '暂无'}}</div>
          </div>
        </a>
      </li>
    </f7-list>

    <f7-block v-if="petInfo">
      <f7-row>
        <f7-button :href="link" class="col" fill raised color="green">更新</f7-button>
      </f7-row>
    </f7-block>

    <f7-block v-else inset>暂无宠物信息</f7-block>
  </f7-page>
</template>

<style scoped>
.me-list-item .item-title,
.me-list-item .item-text {
  color: black;
  font-weight: inherit;
  font-size: 17px;
}

.me-list-item .item-title > .item-header {
  color: grey;
  font-size: 16px;
  padding-bottom: 5px;
}
</style>


<script>
import { getPetDetail } from '../utils'

export default {
  props: {
    petId: null
  },
  data() {
    return {
      backText: '返回',
      petInfo: null
    }
  },
  computed: {
    link() {
      if (this.petId) {
        return `/pet/update/${this.petId}`
      } else {
        return '#'
      }
    },
    vaccineStatus() {
      if (this.petInfo.vaccineStatus == 1) {
        return '已接种'
      } else {
        return '未接种'
      }
    },
    gender() {
      if (this.petInfo.gender == 1) {
        return '公'
      } else {
        return '母'
      }
    },
    neuter() {
      if (this.petInfo.neuter == 1) {
        return '是'
      } else {
        return '否'
      }
    }
  },
  methods: {
    onPageBeforeIn() {
      this.getPetDetail()
    },
    async getPetDetail() {
      try {
        const data = await getPetDetail({ petId: this.petId })

        if (data.iRet === 0) {
          this.petInfo = data.data
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
