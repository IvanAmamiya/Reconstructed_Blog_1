import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import About from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../Home.vue'),
      children:[

      ]

      
    },
    {
      path: '/login',
      name:"login",
      component: Login,

      
    },

    {
      path: '/about',
      name:"about",
      component: About,

      
    },
   

  ]
})

export default router
