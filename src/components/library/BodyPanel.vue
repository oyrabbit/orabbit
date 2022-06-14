<template>
  <div>
    <div class="body-panel">
      <div class="container">
        <div class="head">
          <h1>
            {{ props.title }}
          </h1>
        </div>
        <div class="content">
          <slot />
        </div>
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
.body-panel {
  width: 730px;
  margin: 0 10px 10px 10px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 20px 0px #d8d8d8;
  .container {
    padding: 20px;
    .head {
      margin: 20px 0;
      display: flex;
      justify-content: center;
    }
    .content {
      margin-top: 12px;
    }
  }
}
</style>
