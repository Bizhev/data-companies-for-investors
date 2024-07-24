import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/company',
      name: 'company',
      component: () => import('@/pages/company')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    }
  ]
})

export default router
