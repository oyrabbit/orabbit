<template>
  <Header />
  <main>
    <aside class="app-sidebar">
      <div class="container">
        <SidebarPanel id="sider" title="管理">
          <router-link
            :key="item.id"
            v-for="(item, index) in data"
            :class="{ active: currentIndex == index }"
            @click="change(index)"
            :to="item.path"
          >
            <iconpark-icon :name="item.icon" size="1.2em"></iconpark-icon
            ><span>{{ item.title }}</span>
          </router-link>
        </SidebarPanel>
      </div>
    </aside>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

const route = useRoute()

const currentIndex = ref(0)
const data = ref([
  {
    id: 0,
    title: '文章管理',
    icon: 'transaction-order',
    path: '/admin',
  },
  {
    id: 1,
    title: '发表文章',
    icon: 'editor',
    path: '/admin/create',
  },
  {
    id: 2,
    title: '评论管理',
    icon: 'comments',
    path: '/admin',
  },
  {
    id: 3,
    title: '留言管理',
    icon: 'message-one',
    path: '/admin',
  },
  {
    id: 4,
    title: '友链管理',
    icon: 'peoples',
    path: '/admin',
  },
  {
    id: 5,
    title: '访问前台',
    icon: 'home',
    path: '/',
  },
])
const change = (index) => {
  currentIndex.value = index
  // sessionStorage.setItem('current_index', index)
}
onMounted(() => {
  const od = data.value.find((item) => item.path === route.path)
  currentIndex.value = od.id
  // currentIndex.value = sessionStorage.getItem('current_index')
})
</script>

<style scoped lang="scss">
main {
  width: 1280px;
  margin: 10px auto;
  display: flex;

  .app-sidebar {
    width: 230px;
    height: auto;
    #sider {
      a {
        justify-content: unset;
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 20px;
        margin-bottom: 5px;
        opacity: 0.7;
        border-radius: 12px;
        span {
          margin-left: 15px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &.active {
          background-color: $bgColor;
        }
        &:hover {
          background-color: $bgColor;
        }
      }
    }
  }
}
</style>
