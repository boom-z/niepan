<style>
button {
  width: 80%;
  margin: auto;
}
</style>

<template>
  <button
    class="weui-btn"
    :class="
      ` 
      weui-btn_${type} 
      ${loading ? 'weui-btn_loading' : ''} 
      ${size === 'mini' ? 'weui-btn_mini' : ''} 
      ${disabled ? 'weui-btn_disabled' : ''} 
      ${plain ? 'weui-btn_plain' : ''} 
      `
    "
    type="checkbox"
    :value="value"
    :checked="checked"
  >
    <span v-if="loading" class="weui-primary-loading">
      <i class="weui-primary-loading__dot" />
    </span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'wx-button',
  props: {
    size: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
