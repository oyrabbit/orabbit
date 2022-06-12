<template>
  <button class="app-button ellipsis" :class="[props.size, props.type]">
    <slot />
  </button>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: 'middle',
  },
  type: {
    type: String,
    default: 'default',
  },
})
</script>
<style scoped lang="scss">
.app-button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: $Color;
  background: $Color;
  color: #fff;
}
.plain {
  border-color: $Color;
  color: $Color;
  background: lighten($Color, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
