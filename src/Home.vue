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
import { LogOutHandle }from "./composables/opts"

</script>
