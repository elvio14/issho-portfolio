import { createRouter, createWebHistory } from 'vue-router'
import AdminOrdersViewVue from '../views/AdminOrdersView.vue'

const routerAdmin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base:'/admin',
  routes: [
    {
      path: '/',
      name: 'Orders',
      component: AdminOrdersViewVue
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../Admin.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/AdminUploadView.vue')
    },{
      path: '/adminproducts',
      name: 'adminproducts',
      component: () => import('../views/AdminProductsView.vue')
    },
    
  ]
})

export default routerAdmin