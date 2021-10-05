<style scoped>
.wx-image-container {
  position: relative;
  overflow: hidden;
}
.scaleToFill {
  width: 100%;
  height: 100%;
}
.aspectFit {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.aspectFill {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.widthFix {
  width: 100%;
  height: auto;
}
.heightFix {
  width: auto;
  height: 100%;
}
.top {
  position: absolute;
  top: 0;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.left {
  position: absolute;
  left: 0;
}
.right {
  position: absolute;
  right: 0;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.top {
  position: absolute;
  top: 0;
}
.top-left {
  position: absolute;
  top: 0;
  left: 0;
}
.top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>

<template>
  <div class="wx-image-container">
    <img :src="src" :class="mode" @error="onError" @load="onLoad" />
  </div>
</template>

<script>
export default {
  name: 'wx-image',
  props: {
    src: {
      type: String,
    },
    mode: {
      type: String,
      default: 'scaleToFill	',
    },
  },
  methods: {
    onError(e) {
      this.$emit('error', e);
    },
    onLoad(e) {
      this.$emit('load', e);
    },
  },
};
</script>
