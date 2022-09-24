
<template>
    <RouterView />

    <div class="ArticleContainer">
        <h1>文章模块</h1>
        <el-button type="primary" size="large" round @click="EditTrigger">发文</el-button>

        <el-card class="EditorContainer">
            <el-form v-if="isEditing">
                <el-row type="flex" justify="end" @click="cancelEdit">

                    <el-icon size="large">
                        <Close />
                    </el-icon>
                </el-row>
                <el-row type="flex" justify="center">
                    <h1>发文章</h1>
                </el-row>

                <el-form-item>
                    <el-input placeholder="文章标题"></el-input>
                </el-form-item>
                <el-form-item>
                    <Editor ref="editorRef" id="editor" v-model:modelValue="content"></Editor>
                </el-form-item>
                <el-row type="flex" justify="end">
                    <el-button type="primary">发表</el-button>

                </el-row>
            </el-form>
        </el-card>
    </div>




</template>    
<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'

import { getToken } from '../composables/auth';
import { ref } from "vue"
import { toast } from '../composables/util';
import router from "../router/index"


const isEditing = ref(false)
const content = "文章内容"
const token = getToken()
const EditTrigger = () => {
    if(!token)
    {
        toast("请先登录")
        router.push("/login")
    }
    else{
        isEditing.value = true

    }
}
const cancelEdit = () => {
    isEditing.value = false
}



</script>
<style scoped>
.EditorContainer {
    background-color: beige;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px beige;

}
</style>
