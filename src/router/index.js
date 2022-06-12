import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/LayoutView'
import Home from '@/views/home/IndexView'

const Login = () => import('@/views/login/IndexView')
// const Home = () => import('@/views/home/IndexView')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
