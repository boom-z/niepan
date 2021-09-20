<style></style>

<template>
  <input type="checkbox" :value="value" :checked="checked" />
</template>

<script>
export default {
  name: 'wx-icon',
  props: {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
