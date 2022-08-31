
<template>
    <div class = "login_container">
        <div class = "login_box">
            <div class="avatar_box">
                <img src="./img/Avatar_login.webp" alt="" class="src">
            </div>
            <el-form label-width = "0px" class = "login_form">
                <el-form-item >
                    <el-input  placeholder="Please input username" :prefix-icon = "User">

                    </el-input>
                </el-form-item>

                <el-form-item >
                    <el-input   placeholder="Please input password" :prefix-icon = "Lock" />
                </el-form-item>
                   <el-button type="primary" style = "width:100%;margin-bottom: 30px;">登录</el-button>

            </el-form>


        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { User, Lock } from '@element-plus/icons-vue'

    </script>
<style lang = "less" scoped>
.login_container {
    background : url(./img/login_background.jpg);
    height:100%;
    background-repeat:no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.login_box{
    width:450px;
    height:300px;
    background-color:beige;
    border-radius: 3px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    box-shadow: 0 0 10px beige;

.avatar_box{
    width:130px;
    height:130px;
    border:1px solid gold;
    border-radius: 50%;
    padding:5px;
    box-shadow: 0 0 10px goldenrod;
    background-color:gold;

    position:absolute;
    left:50%;
    transform: translate(-50%,-50%);
    img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
}


}
.btns{
//    position:absolute;    
width:100%;
margin-bottom: 30px;
    
}
.login_form{
    position:absolute;
    bottom:0;
    width:100%;
    padding:0 30px 30px;
    box-sizing: border-box;
}

</style>