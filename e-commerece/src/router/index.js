import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Login.vue'
import Signup from '@/views/signup.vue'
import Layout from '@/LayoutPage/Layout.vue'
const routes = [
  {
    path: '/',
    name: 'loginpage',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
