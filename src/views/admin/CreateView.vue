<template>
  <SidebarPanel id="sider2" title="发表文章">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </SidebarPanel>
</template>

<script setup>
import { ref } from 'vue'

const text = ref()
</script>

<style lang="scss" scoped>
#sider2 {
  width: 1040px;
  margin-left: 10px;
}
</style>
