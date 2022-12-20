<script setup>
import store from '../store'
import { ref,reactive } from 'vue'
import {useRouter } from 'vue-router'
const route = useRouter()
const ArticleDetail = store.state.ArticleDetail.Articles
console.log(ArticleDetail)
let num = route.currentRoute.value.params.id
function findID(array,id){
    return array.find((res)=>{return res.id==id})
}
const Detail = findID(ArticleDetail,num)
console.log(Detail)
const ReviewForm = reactive({
    Author:"",
    content:""
})
const ReviewRef = ref()
const ReviewSubmit = ()=>{
    console.log("1")
}




</script>


<template>
    <el-card>
        <h1 style="text-align:center">{{Detail.title}}</h1>
        <p style="font-size:20px;">{{Detail.content}}</p>

    </el-card>
    <el-card>
        <h1>评论({{Detail.reviews.length}})</h1>
        <el-form ref = "ReviewRef">
            <el-form-item><el-input v-model="ReviewForm.Author" placeholder="署名"></el-input></el-form-item>
            <el-form-item><el-input type="textarea" :rows="3" v-model="ReviewForm.content" placeholder="内容" ></el-input></el-form-item>
            <el-row type="flex" justify="end">
                    <el-button type="primary" @click="ReviewSubmit" style = "width:20%">发表</el-button>
                </el-row>
        </el-form>

    </el-card>
    <el-card v-for="review in Detail.reviews">
        <p>作者:{{review.Author}}</p>   
        <p>{{review.body}}</p>

    </el-card>
</template>
