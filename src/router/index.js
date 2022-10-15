import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import About from '../components/About.vue'
import Article from '../components/Article.vue'
import QuestionBox from '../components/QuestionBox.vue'
import detail from '../components/detail.vue'
import Question from '../components/Question.vue'



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
    {
      path: '/Article',
      name:"article",
      component: Article,
      meta :{
        title : "文章"
      }
      
    },
    {
      path: '/QuestionBox',
      name:"questionbox",
      component: QuestionBox,
      meta :{
        title : "问题箱"
      },
      children:[
        {
          path : "detail/",
          name : "Question",
          component : Question,
          
        }
      ]
      
    },
    {
      path: '/detail/:id',
      name:"detail",
      component: detail,
      props:true,
      meta :{
        title : "细节模块"
      }
      
    },

  ]
})

export default router

