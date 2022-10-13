<script setup>
import store from '../store'
import { ref,reactive } from 'vue'

const ArticleDetail = store.state.ArticleDetail.Article.list
const Reviews = store.state.ArticleDetail.Review.ReviewList
console.log(store.state.ArticleDetail)

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
        <p>正文</p>
        <h1 style="text-align:center" v-html="ArticleDetail[this.$route.params.id].title"></h1>
        <p style="font-size:20px;" v-html="store.state.ArticleDetail.Article.list[this.$route.params.id].content"></p>

    </el-card>
    <el-card>
        <h1>评论({{Reviews.length}})</h1>
        <el-form ref = "ReviewRef">
            <el-form-item><el-input v-model="ReviewForm.Author" placeholder="署名"></el-input></el-form-item>
            <el-form-item><el-input type="textarea" :rows="3" v-model="ReviewForm.content" placeholder="内容" ></el-input></el-form-item>
            <el-row type="flex" justify="end">
                    <el-button type="primary" @click="ReviewSubmit" style = "width:20%">发表</el-button>
                </el-row>
        </el-form>

    </el-card>
    <el-card v-for="review in Reviews[this.$route.params.id]">
        <p>{{review.content}}</p>
    </el-card>
</template>
