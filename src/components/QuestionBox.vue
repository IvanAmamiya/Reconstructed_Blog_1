<template><div class="QBContainer">
    <el-card class = "cardSubSystem">
    <h1>提问箱模块</h1>
    <el-button type="primary" size="large" round @click="QuestionBoxTrigger">试试发一个提问？</el-button>
</el-card>

    <el-card class="ArticleForm" v-if="isQuestionBox">
        <el-row>
            <el-col>

                <el-form>
                    <el-row type="flex" justify="end" @click="cancelQuestionBox">


                        <el-icon size="large">
                            <Close />
                        </el-icon>
                    </el-row>
                    <h1>提问</h1>


                    <el-form-item>
                        <el-input v-model="textarea1"  background-color:blue
                            placeholder="Please input" />
                    </el-form-item>
                    <div style="margin: 10px 0" />
                    <el-form-item>
                        <el-input v-model="textarea2" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                            placeholder="Please input" />
                    </el-form-item>
                    <div style="margin: 10px 0" />
                    <el-row type="flex" justify="end">
                        <el-button type="primary" style="margin-right:10px">提交</el-button>
                    </el-row>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
    <el-card class = "cardSubSystem"  v-for="key in store.state.Question.Question?.Questionlist" >
            <p v-html="key.title"></p>
            <p>{{key.content}}</p>
    </el-card>

</div>


</template>    
<script lang="ts" setup>
import { ref } from 'vue'
import store  from '../store'
import {Close} from '@element-plus/icons-vue'
import axios from '../axios'
import { reject } from 'lodash'
const textarea1 = ref('')
const textarea2 = ref('')
const isQuestionBox = ref(false)

const QuestionBoxTrigger = ()=>{
    isQuestionBox.value = true
}
const cancelQuestionBox = () => {
    isQuestionBox.value = false
}
const Atest = ()=> {
    return new Promise ( (resolve,reject)=>
    {
        
            axios.post("/admin/getTest")
            .then((res114)=>{
                console.log(res114)
                resolve(res114)
            }
        )
        .catch((err)=>{
            console.log(err)
            reject(err)
        })
    }
    )

}
Atest()



</script>
<style lang = "less" >
.cardSubSystem{
    background:transparent
}
.QBContainer {
    background:url(./img/Aritcle_background.jpg);
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.ArticleForm {
    background:transparent;border:2;

    width: 70%;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rosybrown;

}





</style>
    