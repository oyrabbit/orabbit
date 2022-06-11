<template>
  <div class="sidebar-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ props.title }}
        </h3>
        <slot name="right" />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
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

<style scoped lang="scss">
.sidebar-panel {
  margin-bottom: 15px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 20px 0px #d8d8d8;
  .container {
    padding: 20px;
    .head {
      display: flex;
      align-items: flex-end;
      line-height: 20px;
      h3 {
        flex: 1;
      }
    }
    .content {
      margin-top: 12px;
    }
  }
}
</style>
