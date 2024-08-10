import { createRouter, createWebHistory } from 'vue-router'
import {FullPage, MainLayout} from "@/shared/ui/layouts";

const routes = [
  {
    path: '/company',
    name: 'company',
    component: () => import('@/pages/company'),
    meta: {
      layout: MainLayout
    }
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('@/pages/accounts'),
    meta: {
      layout: MainLayout
    }
  },
  {
    path: '/',
    redirect: '/company',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login'),
    meta: {
      layout: FullPage
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
