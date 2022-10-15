<template>
    <el-card style = "background:local">

        <h1><p v-html="$store.state.Question.Question?.Questionlist[this.$route.query.id].title"></p></h1>

        <p style = "color:bisque">{{$store.state.Question.Question?.Questionlist[this.$route.query.id].content}}</p>
        <el-form ref = "AnswerRef" v-if = "token">
            <el-form-item>
                <el-input type = "textarea" v-model = "AnswerForm.content">
                </el-input>
            </el-form-item>
            <el-form-item >
                <el-button type = "primary" @Click = "AnswerSubmit">回答</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
import store from '../store'
import { ref ,reactive} from 'vue'
import {getToken} from '../composables/auth'

const AnswerRef = ref()
const AnswerForm = reactive({
    content:""
})
const token = getToken()

</script>