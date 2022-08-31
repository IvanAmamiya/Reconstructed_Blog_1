import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../App.vue'),

      
    },
    {
      path: '/login',
      component: Login,

      
    },
   

  ]
})

export default router
