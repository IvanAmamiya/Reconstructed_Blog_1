import {createStore} from "vuex"
import {  getinfo, login,logout  } from "../api/manager"
import { setToken ,removeToken} from "../composables/auth"


const store = createStore({
    state () {
        return {
            user:{}
        }

    },
    mutations: {
        SET_USER_INFO(state,user){
            state.user = user

        }
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

        logout({commit}){
                    removeToken()
                    commit("SET_USER_INFO",{})

            
            }


        }
    }
  )

export default store