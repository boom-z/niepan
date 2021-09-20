<style></style>

<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'wx-text',
  props: {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    children: {},
  },
  created() {
    console.log(this.children);
  },
};
</script>
