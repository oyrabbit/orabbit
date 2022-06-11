<template>
  <Header />
  <main>
    <AppSidebar />
    <router-view />
  </main>
  <AppFooter />
  <!-- <footer>底部</footer> -->
</template>

<script setup>
import Header from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
import AppFooter from '@/components/AppFooter'
// import { computed, onBeforeMount } from 'vue'
// import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
// const store = useStore()
// // 使用vuex中的state需要设置计算属性，否则不是响应式
// const profile = computed(() => {
//   return store.state.user.profile
// })
// const router = useRouter()
// onBeforeMount(() => {
//   if (!profile.value.token) {
//     router.push('/login')
//   }
// })
</script>

<style scoped lang="scss">
main {
  display: flex;
  width: 1280px;
  margin: 0 auto;
}
</style>
