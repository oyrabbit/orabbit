<template>
  <Header />
  <main>
    <AppSidebar />
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import Header from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
import AppFooter from '@/components/AppFooter'
</script>

<style scoped lang="scss">
main {
  width: 1280px;
  margin: 10px auto;
  display: flex;
}
</style>
