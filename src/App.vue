<script>
  export default{
    name:'app'
  }
</script>

<template>
    

    <el class="app">
      
      <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Rokossovskaya的个人Blog</el-menu-item>

    <el-menu-item index="3" >文章</el-menu-item>
    <el-menu-item index="4">提问箱</el-menu-item>
  </el-menu>
  <RouterView/> 
   </el>

</template>


