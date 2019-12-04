<template>
    <div class="account">
        
        <template v-if="username&&radios==0">
            <div class="login-register" style="float:right; margin-top: 80px;font-size:14px;color:white;">
                <span>欢迎您！</span>
                <!-- <el-divider direction="vertical"></el-divider> -->
                <span><a href="/" >{{username}}</a></span>
                <el-divider direction="vertical"></el-divider>
                <span><a href="/login" @click="clearCookie">注销</a></span>
            </div>
        </template>
        <template v-else-if="username&&radios==1">
            <div class="login-register" style="float:right; margin-top: 80px;font-size:14px;color:white;">
                <span>欢迎您！</span>
                <!-- <el-divider direction="vertical"></el-divider> -->
                <span><a href="/" target="_blank">管理员</a></span>
                <el-divider direction="vertical"></el-divider>
                <span><a href="/login" @click="clearCookie">注销</a></span>
            </div>
        </template>
        <template v-else>
            <div class="login-register" style="float:right; margin-top: 80px;font-size:14px;color:white;">
                <span>Hi！你好</span>
                <el-divider direction="vertical"></el-divider>
                <span><a href="/login" >登录</a></span>
                <el-divider direction="vertical"></el-divider>
                <span><a href="/register" >注册</a></span>
            </div>
        </template>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
    props:['items'],
    data(){
        return{
            state:0,
            username:'',
            password:'',
            radio:'0',
            radios:'',
        }
    },
    methods:{
        // logout(){
        //     localStorage.clear();
        // }
        clearCookie: function(){
            document.cookie  = "username=;path=/";
            document.cookie  = "token=;path=/";
            document.cookie  = "radios=;path=/";

        },
        getCookie: function() {
        // console.log(document.cookie)
        if (document.cookie.length > 0) {
            var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
            for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split("=="); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "username") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.username = bytes.toString(CryptoJS.enc.Utf8); //保存到保存数据的地方
            } else if (arr2[0] == "token") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.password = bytes.toString(CryptoJS.enc.Utf8);
            }else if (arr2[0] == "radios") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.radios = bytes.toString(CryptoJS.enc.Utf8);
                // console.log('ss',this.password)
            }
            }
        }
        },

    },
    mounted:function(){
        this.getCookie();
             
    },
}
</script>

<style>
.account{
    height: 105px;
    background:  url('../static/images/top.png');
    background-size: 100%;
    margin: 0;
    min-width: 1200px;
}
.login-register{
    margin-right: 5%;
}
.login-register a{
    text-decoration: none;
    color:white;
    font-family: "Microsoft Yahei","宋体",Arial ,HELVETICA;
    
}
.login-register a:hover{
    color:khaki;
}
</style>