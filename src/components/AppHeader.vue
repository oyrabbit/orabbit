<template>
  <header class="app-header">
    <div class="container">
      <div class="logo"></div>
      <div class="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="关键字"
          value=""
        />
        <router-link to="/" class="search-icon">
          <iconpark-icon name="search" size="1.6em"></iconpark-icon>
        </router-link>
        <router-link to="/" class="home-link">
          <iconpark-icon name="home" size="2em"></iconpark-icon>
        </router-link>
      </div>
      <div class="right-link">
        <router-link to="/admin/create">
          <iconpark-icon name="editor" size="2em"></iconpark-icon></router-link
        ><router-link to=""
          ><iconpark-icon
            @click="isdisplay = 0"
            name="user"
            size="2em"
          ></iconpark-icon
        ></router-link>

        <iconpark-icon name="remind" size="2em" class="d"></iconpark-icon>
      </div>
      <div
        class="layer"
        @mouseleave="isdisplay = 1"
        :class="{ display: isdisplay }"
      >
        <ul>
          <template v-if="profile.token"
            ><li @click="logout()">
              <iconpark-icon name="logout" size="1.3em"></iconpark-icon>退出登录
            </li></template
          >
          <template v-else
            ><li>
              <router-link to="/login/">
                <iconpark-icon name="user" size="1.3em"></iconpark-icon
                >用户登录</router-link
              >
            </li>
            <li>
              <router-link to="/login/">
                <iconpark-icon name="user-business" size="1.3em"></iconpark-icon
                >博主登录</router-link
              >
            </li></template
          >
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Message from '@/components/library/Message'

const isdisplay = ref(1)
const store = useStore()
// 使用vuex中的state需要设置计算属性，否则不是响应式
const profile = computed(() => {
  return store.state.user.profile
})

// 退出登录
// 1. 清空本地存储信息和vuex的用户信息
// 2. 跳转登录
const router = useRouter()
const logout = () => {
  store.commit('user/setUser', {})
  router.push('/login')
  Message({ type: 'success', text: '退出成功' })
}
</script>
<style scoped lang="scss">
.app-header {
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 20px 0px #d8d8d8;
  .container {
    display: flex;
    width: 1280px;
    position: relative;
    .logo {
      height: 50px;
      width: 230px;
      background: url(@/assets/images/logo.png) no-repeat center center;
      background-size: contain;
    }
    .search {
      position: absolute;
      left: 230px;
      width: 230px;
      line-height: 50px;
      padding: 0 10px;
      input {
        width: 225px;
        height: 32px;
        background-color: $bgColor;
        padding: 5px 15px;
        border-radius: 16px;
      }
      .search-icon {
        position: absolute;
        top: 0;
        right: 10px;
        opacity: 0.5;
      }
      .home-link {
        position: absolute;
        top: 0;
        right: -50px;
        opacity: 0.7;
      }
    }

    .right-link {
      position: absolute;
      line-height: 50px;
      right: 0;
      iconpark-icon {
        padding: 0 10px;
        opacity: 0.7;
        &:last-child::after {
          content: '99';
          text-align: center;
          line-height: 15px;
          color: #fff;
          font-size: 5px;
          display: inline-block;
          position: absolute;
          top: 3px;
          right: 3px;
          width: 16px;
          height: 16px;
          background-color: $focusColor;
          border-radius: 15px;
        }
      }
    }
    .layer {
      width: 120px;
      height: auto;
      padding: 5px 0;
      position: absolute;
      top: 50px;
      right: 11px;
      z-index: 5;
      text-align: center;
      background-color: rgb(252, 252, 252);
      border-radius: 12px;
      box-shadow: 0 0 20px 0px #d8d8d8;
      &.display {
        display: none;
      }
      ul {
        li {
          display: flex;
          justify-content: center;
          line-height: 40px;
          padding: 0px;
          border-radius: 12px;
          &:hover {
            background-color: $bgColor;
          }
          iconpark-icon {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
