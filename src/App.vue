<template>
    

    <el class="app">
      
      <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :ellipsis="false"
    @select="handleSelect"
  >
    <h3>Rokossovskaya的个人Blog</h3>
    <el-menu-item index="2"  @click = "ClickMenu('home')" >首页</el-menu-item>
    <el-menu-item index="3"  @click = "ClickMenu('article')"  >文章</el-menu-item>
    <el-menu-item index="4"   @click = "ClickMenu('questionbox')" >提问箱</el-menu-item>
    <el-menu-item index="5" @click = "ClickMenu('about')">测试模块</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-if = "!tokenss()" index="6" @click = "ClickMenu('login')" >登录</el-menu-item>
    <el-menu-item v-if = "tokenss()" index="7">{{$store.state.user.username}}</el-menu-item>
    <el-menu-item v-if = "tokenss()" @click = "LogOutHandle1" index="8">登出</el-menu-item>




  </el-menu>  
  <RouterView/> 
   </el>

</template>
<style lang = "less" scoped>
  .flex-grow {
  flex-grow: 1;
}
h3{
  color:fff;
  height:100%;
  text-align: center;
  line-height: 50px;  
}
html,body{
  margin:0;
  
}
#nprogress.bar{
  background-color: aquamarine !important;
  height: 3px !important;
}

</style>

<script>
import { getToken } from './composables/auth';
import {LogOutHandle} from "./composables/opts"


  export default{
    name:'app',
    methods:
    {
      ClickMenu(item) 
      {
        this.$router.push(
          {
            name:item
          }
        )
      },
      tokenss() 
      {
        return getToken()?true:false
      },
      LogOutHandle1()
      {
        return LogOutHandle()
      }


    }
    
  }








</script>

