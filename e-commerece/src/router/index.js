import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layoutPage/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
