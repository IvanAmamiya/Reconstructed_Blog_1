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
    <el-menu-item index="2"  @click = "ClickMenu('')" >首页</el-menu-item>
    <el-menu-item index="2" >文章</el-menu-item>
    <el-menu-item index="3">提问箱</el-menu-item>
    <el-menu-item index="4" >关于</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="5" @click = "ClickMenu('login')" >登录</el-menu-item>




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
</style>

<script>
  export default{
    name:'app',
    methods:
    {
      ClickMenu(item)
      {
        this.$router.push(
          {
            path:'/'+item
          }
        )
      }
    }
  }

</script>

