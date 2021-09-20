<style></style>

<template>
  <input type="checkbox" :value="value" :checked="checked" />
</template>

<script>
export default {
  name: 'wx-checkbox',
  props: {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.$parent);
  },
};
</script>
