
<template>
    <RouterView />

    <div class="ArticleContainer">
        <el-card>
        <h1>文章模块</h1>
        <el-button type="primary" size="large" round @click="EditTrigger">发文</el-button>
    </el-card>

        <el-card v-if="isEditing" class="EditorContainer">
            <el-form :model = ContentForm>
                <el-row type="flex" justify="end" @click="cancelEdit">

                    <el-icon size="large">
                        <Close />
                    </el-icon>
                </el-row>
                <el-row type="flex" justify="center">
                    <h1>发文章</h1>
                </el-row>

                <el-form-item>
                    <el-input placeholder="文章标题"  v-model:modelValue="ContentForm.titleContent"></el-input>
                </el-form-item>
                <el-form-item >
                    <Editor ref="editorRef" id="editor" v-model:modelValue="ContentForm.Content" style="width:100%"></Editor>
                </el-form-item>
                <el-row type="flex" justify="end">
                    <el-button type="primary" @click="LOG" style = "width:100%">发表</el-button>

                </el-row>
            </el-form>
        </el-card>
        <el-card v-show = "!isEditing"   v-for="key in store.state.Article.thisPageArticles"><a v-html = "key.title" @click = "router.push('/detail/'+key.id)"></a><p>{{key.content}}</p></el-card>

    </div>




</template>    
<script setup lang="ts">
import { Close } from '@element-plus/icons-vue'
import { getToken } from '../composables/auth';
import { ref ,reactive} from "vue"
import { toast } from '../composables/util';
import router from "../router/index"
import store  from '../store'



const isEditing = ref(false)
const token = getToken()
const ContentForm = reactive({
    titleContent:"",
    Content:""

})
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
const LOG = ()=>{
    console.log(ContentForm.Content)
}


</script>
<style scoped>
.EditorContainer {
    background-color: beige;
    border-radius: 3px;
    position: absolute;
    width:100%;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px beige;

}
</style>
