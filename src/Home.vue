<template>
<RouterView/> 

<div class="common-layout" >

    <el-container>
      
        <el-header>
        </el-header>
      <el-main>
        主页模块114514
    </el-main>
    </el-container>
  </div>
  <el-button @click = "LogOutHandle" type = "primary">登出</el-button>

      
      
</template>
<style lang = "less" scoped>

</style>
<script setup>
import {Teiji, toast} from "./composables/util.js"
import { logout } from "./api/manager";
import {useRouter} from "vue-router";
import {useStore} from "vuex"
const router = useRouter()
const store = useStore()
  function LogOutHandle()
  {
    
    Teiji("确认要退出登录吗","","info")
    .then(res=>{
      logout().finally(()=>{
        store.dispatch("logout")
        router.push("/login")
        toast("退出登录成功！")
      })

    })

  }
</script>
