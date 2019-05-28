<template>
  <div class="item-content item-input">
    <div class="item-inner">
      <div class="item-title item-label">{{ placeholder }}</div>
      <div class="item-input-wrap">
        <input
          type="text"
          @change="onChange"
          :placeholder="placeholder"
          readonly="readonly"
          :id="elementId"
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  getLocaleDatetime,
  getDaysInMonthAsArray,
  getRecentYearsAsArray,
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
  mounted() {
    const today = getLocaleDatetime()

    this.$f7.picker.create({
      inputEl: `#${this.elementId}`,
      // toolbar: false,
      rotateEffect: true,
      openIn: 'sheet',
      formatValue(values) {
        values = [
          values[0],
          ...values.slice(1, 4).map(v => (v < 10 ? `0${v}` : v)),
          ...values.slice(4)
        ]
        console.log(values)

        return `${values[0]}-${values[1]}-${values[2]} ${values[3]}:${
          values[4]
        }:${values[5]}`
      },
      cols: [
        {
          values: getRecentYearsAsArray()
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
          const days = new Date(values[0], values[1], 0).getDate()

          if (values[2] > days) {
            picker.cols[2].setValue(days)
          }
        }
      }
    })
  },
  methods: {
    onChange(event) {
      this.$emit('input:change', { type: this.type, value: event.target.value })
    }
  }
}
</script>

<style>
</style>
