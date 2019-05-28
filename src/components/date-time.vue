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
import {
  getLocaleDatetime,
  getDaysInMonthAsArray,
  MONTHS,
  HOURS,
  MINUTES
} from '../utils/index.js'

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
    const today = getLocaleDatetime()

    this.$f7.picker.create({
      inputEl: `#${this.elementId}`,
      // toolbar: false,
      rotateEffect: true,
      openIn: 'sheet',
      // value: [
      //   today.getFullYear(),
      //   today.getMonth() + 1,
      //   today.getDay(),
      //   today.getHours(),
      //   today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes(),
      //   today.getSeconds()
      // ],
      formatValue(values) {
        return `${values[0]}-${values[1]}-${values[2]} ${values[3]}:${
          values[4]
        }:${values[5]}`
      },
      cols: [
        {
          values: [
            today.getFullYear(),
            today.getFullYear() + 1,
            today.getFullYear() + 2,
            today.getFullYear() + 3,
            today.getFullYear() + 4
          ]
        },
        {
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          displayValues: MONTHS,
          textAlign: 'left'
        },
        {
          values: getDaysInMonthAsArray(today.getFullYear(), today.getMonth())
        },
        {
          divider: true,
          content: ' '
        },
        {
          values: HOURS
        },
        {
          divider: true,
          content: ':'
        },
        {
          values: MINUTES
        },
        {
          divider: true,
          content: ':'
        },
        {
          values: MINUTES
        }
      ],
      on: {
        change: function(picker, values, displayValues) {
          console.log(picker)
          // const days = getDaysInMonthAsArray(picker.value[0], picker.value[1])
          // console.log(picker)
          // picker.cols[2].setValue(days)
        }
      }
    })
  }
}
</script>

<style>
</style>
