import axios from "axios"
import {toast} from "./composables/util"
import {useCookies} from '@vueuse/integrations/useCookies'
import store from "./store/";




const service = axios.create({
    baseURL:'/api'

})
service.interceptors.request.use(function (config) {
    const cookie = useCookies();
    const token = cookie.get("admin-token");
    if(token)
    {
        config.headers["token"] = token; 
    }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;
  }, function (error) {
    const msg = error.response.data.msg||"请求失败"
    if (msg == "非法token，请先登录！")
    {
      store.dispatch("logout").finally(()=>location.reload())
    }
    toast(msg,"error")

    // 对响应错误做点什么

    return Promise.reject(error);
  });
export default service