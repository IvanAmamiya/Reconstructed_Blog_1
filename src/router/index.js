import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../Home.vue'),
      children:[
        {
          path: '/login',
          //name = "login" 加上name立马无法显示是为什么
          component: Login,
    
          
        },

      ]

      
    },

   

  ]
})

export default router
