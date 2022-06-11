import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from "../views/HomeView.vue";

const Layout = () => import('@/views/LayoutView')
const Home = () => import('@/views/home/IndexView')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '/', component: Home }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
