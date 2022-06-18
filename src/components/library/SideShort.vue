<template>
  <SidebarPanel id="sider3" title="闲言碎语">
    {{ props.title }}
    <div>
      <p>众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。</p>
      <p>出自：《青玉案·元夕》</p>
    </div>
  </SidebarPanel>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
#sider3 {
  div {
    padding: 12px 15px;
    background-color: $bgColor;
    border-radius: 12px;
    p:last-child {
      margin-top: 10px;
      text-align: right;
      opacity: 0.7;
    }
  }
}
</style>
