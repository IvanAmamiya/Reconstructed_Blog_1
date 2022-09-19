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

      ],
      meta :{
        title : "首页"
      }

      
    },
    {
      path: '/login',
      name:"login",
      component: Login,
      meta :{
        title : "登录"
      }
      
    },
    

    {
      path: '/about',
      name:"about",
      component: About,
      meta :{
        title : "关于"
      }
      
    },
   

  ]
})

export default router
