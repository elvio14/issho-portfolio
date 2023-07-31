import { createRouter, createWebHistory } from 'vue-router'

const routerAdmin = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base:'/admin',
  routes: [
    {
      path: '/',
      name: 'Orders',
      component: () => import('../views/AdminOrdersView.vue')
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