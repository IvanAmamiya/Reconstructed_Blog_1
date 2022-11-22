import {createStore} from "vuex"
import {  getinfo,getArticle ,login,getQuestion,getArticleDetail  } from "../api/manager"
import { setToken ,removeToken} from "../composables/auth"


const store = createStore({
    
    state () {

        return {
            user:{},
            Article:{},
            ArticleDetail:{},
            Question:{},

        }

    },
    mutations: {
        SET_USER_INFO(state,user){
            state.user = user
        },
        SET_ARTICLE_INFO(state,article){
            state.Article = article
        },
        SET_ARTICLEDETAIL_INFO(state,article){
            state.ArticleDetail = article
        },

        SET_Question_INFO(state,question){
            state.Question = question
            console.log(this)
        },
    },
    actions:{
        login({commit},{username,password}){

            return new Promise((resolve,reject)=>{
                login(username,password).then((res)=>{
                    setToken(res["token"])
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            })
        },
        getinfo({commit}){

            return new Promise((resolve,reject)=>{
                getinfo().then((res)=>{
                    commit("SET_USER_INFO",res)
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            })

        },
        getArticle({commit},{pageNum,pageSize})
        {
            return new Promise((resolve,reject)=>{
                getArticle(pageNum,pageSize).then((res)=>{
                    commit("SET_ARTICLE_INFO",res)
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            })

        },
        getArticleDetail({commit})
        {
            return new Promise((resolve,reject)=>{
                getArticleDetail().then((res)=>{
                    console.log('SET_ARTICLEDETAIL_INFO')
                    commit("SET_ARTICLEDETAIL_INFO",res)
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            })

        },
        getQuestion({commit})
        {
            return new Promise((resolve,reject)=>{
                getQuestion().then((res)=>{
                    commit("SET_Question_INFO",res)
                    resolve(res)
                })
                .catch((err)=>{
                    reject(err)
                })
            })

        },

        logout({commit}){
                    removeToken()
                    commit("SET_USER_INFO",{})

            
            }


        }
    }
  )

export default store