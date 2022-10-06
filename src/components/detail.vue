<template>
<el-card>
    <p>正文</p>
    <p v-html = key[this.$route.params.id].title></p>
    <p v-html = key[this.$route.params.id].content></p>
</el-card>
<svg>
    {{key[this.$route.params.id].title}}
</svg>
<h1>测试</h1>
</template>
<script setup>
    import store from '../store'
    const key = store.state.Article.Article.list
    console.log(key)

</script>