import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/LayoutView'
import Home from '@/views/home/IndexView'

const Login = () => import('@/views/login/IndexView')
const Admin = () => import('@/views/AdminView')
const adminIndex = () => import('@/views/admin/IndexView')
const CreateView = () => import('@/views/admin/CreateView')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
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
})

export default router
