import {Teiji, toast} from "../composables/util.js"
import { logout } from "../api/manager";
import store from '../store'



export function LogOutHandle()
  {    
    Teiji("确认要退出登录吗","","info")
    .then(()=>{
      logout().finally((e)=>{
          store.dispatch("logout")
          toast("退出登录成功！")
          location.reload()

  
      })
      .catch((e)=>{
        console.log(e)
      })
    })
  }
