<template>
  <v-text-field
    :value="value"
    :label="placeholder"
    @change="onChanged"
    @keydown.enter="onEnter"
  />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Please specify'
    }
  },
  methods: {
    onChanged (newVal) {
      this.$emit('change', newVal)
    },
    onEnter (e) {
      const value = e.target.value
      this.$emit('enter', value)
    }
  }
}
</script>
