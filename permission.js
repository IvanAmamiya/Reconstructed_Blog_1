import router from "./src/router/index"
import {getToken} from "./src/composables/auth"
import {toast} from "./src/composables/util"
import store from "./src/store"

router.beforeEach((async (to,from,next)=>{
    const token = getToken()
    if(!token&&to.path=="/about")
    {
        toast("请先登录","error");
        return next({path:"/login"})
    }
    if(token&&to.path=="/login")
    {
        toast("Test:您已登录");
        return next({path:from.path?from.path:"/"})
    }
    if(token)
    {
        await store.dispatch("getinfo")
    }
    next()
}))