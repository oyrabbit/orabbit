import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/LayoutView'
import store from '@/store'
import Home from '@/views/home/IndexView'

const Login = () => import('@/views/login/IndexView')
const Admin = () => import('@/views/AdminView')
const adminIndex = () => import('@/views/admin/IndexView')
const CreateView = () => import('@/views/admin/CreateView')
const Article = () => import('@/views/article/IndexView')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '/article/:articleId', component: Article },
    ],
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: '/admin', component: adminIndex },
      { path: '/admin/create', component: CreateView },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  },
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 需要登录的路由：地址是以 /adnin 开头
  const { profile } = store.state.user
  if (!profile.token && to.path.startsWith('/admin')) {
    return next('/login?redirectUrl=' + encodeURIComponent(to.fullPath))
  }
  next()
})

export default router
