
<template>
    <div class = "login_container"  >
        <div class = "login_box">
            <div class="avatar_box">
                <img src="./img/Avatar_login.webp" alt="" class="src">
            </div>
            <el-form label-width = "0px"  ref = "formRef" :model="LoginForm" :rules="FormRules" class = "login_form" >
                <el-form-item prop="username"   >
                    
                    <el-input v-model="LoginForm.username"   placeholder="Please input username" :prefix-icon = "User" >
                    </el-input>
                </el-form-item>

                <el-form-item prop="password" >
                    <el-input  v-model="LoginForm.password"     placeholder="Please input password" :prefix-icon = "Lock" type = "password" show-password/>
                </el-form-item>
                   <el-button type="primary" style = "width:100%;margin-bottom: 30px;" @click = "Submit()" v-loading = "loading">登录</el-button>

            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { User, Lock } from '@element-plus/icons-vue'
    import { reactive, ref ,onMounted, onBeforeUnmount} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {toast} from "../composables/util"
    const router = useRouter()
    const loading = ref(false)
    const store = useStore()


    const LoginForm = reactive({
        username: '',
        password: '',
    })
    let FormRules = {
        username:[{required:true,message:"用户名不能为空",trigger:"blur"},{min:3,max:20,message:"用户名字符长度在3-20之间",trigger:blur}],
        password:[{required:true,message:"密码不能为空",trigger:"blur"},{min:3,max:20,message:"密码字符长度在3-20之间",trigger:blur}],
    }
    const formRef = ref();
    

    const Submit= ()=>{

        formRef.value.validate((valid) => {
        if (!valid) {
            return false;
        }
        loading.value = true;
        store.dispatch("login",LoginForm).then((res)=>{
            toast("登陆成功"),
            console.log(res),
            router.push("/")
        }
        ).finally(()=>{
            loading.value = false;

        })

    })
        
    }
    function onKeyUp(e){
        if(e.key=="Enter")
        {
            Submit()
        }
    }
    onMounted(()=>{
        document.addEventListener("keyup",onKeyUp)

    })
    onBeforeUnmount(()=>{
        document.removeEventListener("keyup",onKeyUp)

    })
    

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