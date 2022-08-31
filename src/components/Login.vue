<template>
    <div class = "login_container">
        <div class = "login_box">
            <div class="avatar_box">
                <img src="./img/Avatar_login.webp" alt="" class="src">
            </div></div>
    </div>
</template>
<script>
    export default{

    };
</script>
<style lang = "less" scoped>
.login_container {
    background : url(./img/login_background.jpg);
    height:100%;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-size: cover;
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
</style>