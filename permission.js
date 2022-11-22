import router from "./src/router/index"
import {getToken} from "./src/composables/auth"
import {hideFullLoading, showFullLoading, toast} from "./src/composables/util"
import store from "./src/store"
router.beforeEach((async (to,from,next)=>{
    store.dispatch("getArticle",{pageNum:0,pageSize:10})
    store.dispatch("getQuestion")

    showFullLoading()
    const token = getToken()
    let title = (to.meta.title?to.meta.title:"")+"-Rokkosovskaya的个人Blog";
    document.title = title;
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
    if(to.name=="detail")
    {
        await store.dispatch("getArticleDetail")
    }
     if(to.path == "detail/")
    {
        console.log(213)
        await store.dispatch("getQuestion")
    }
     next()
}))
router.afterEach((to,from,next)=>{
    hideFullLoading()
})