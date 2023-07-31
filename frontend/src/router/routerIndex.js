import { createRouter, createWebHistory } from 'vue-router'

const routerIndex = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base:'/',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../Login.vue')
    }
  ]
})

export default routerIndex