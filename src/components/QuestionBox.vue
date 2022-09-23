<template>

    <div class="QBContainer">
        <h1>提问箱模块</h1>
        <el-card class="ArticleForm">
            <el-row>
                <el-col>

                    <el-form>
                        <h1>试试发一个提问？</h1>
                        <el-form-item >
                        <el-input v-model="textarea1"  autosize type="textarea" background-color:blue placeholder="Please input" />
                    </el-form-item>
                        <div style="margin: 10px 0" />
                    <el-form-item >
                        <el-input v-model="textarea2"  :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                            placeholder="Please input" />
                        </el-form-item>
                        <div style="margin: 10px 0" />
                        <el-row type="flex" justify="end">
                        <el-button type = "primary" style = "margin-right:10px">提交</el-button>
                        </el-row>
                    </el-form>
                </el-col>
            </el-row>
        </el-card>
    </div>


</template>    
<script lang="ts" setup>
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
</script>
<style lang = "less" >
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
    