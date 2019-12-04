<template>
    <div class="login">
        <article class="header">
            <header>
                
            </header>
        </article>

        <div class="getpassword" style="overflow: hidden;">
            <div class="box">
                <div style="font-size:14px;color:#666;line-height:50px;">当前位置： xxx图书馆 > 忘记密码</div>
                <div style="border:0.5px solid #ccc"></div>
                <div>
                    <div style="font-size:15px;color:#444;line-height:100px;text-align:center">
                        重置密码成功，
                        <a href="/login">前往登录 >></a>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <!-- <br><br> -->
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../components/index/foot.vue'
import { async } from 'q';
export default {
    components: {
        foot,
    },
    data: () => {
        return {
        checked: false,
        username: '',
        password: '',
        error: '',
        user:'',
        radio:'0',
        radios:'',
        input1:'',
        next:'',
        }
    },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/echarts.common.min.js'},
            // {src:'js/jquery.SuperSlide.2.1.1.js'},
            // {src:'js/jQuery.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        next1:async function(){
            this.next=1;
        },
        next2:async function(){
            this.next=2;
        },
        next3:async function(){
           
        }
    },
    mounted:function(){
       
    },

}
</script>

<style>
.login{
    width:100%;
    min-width: 1200px;
}
.login .header{
    height: 105px;
    background:  url('../static/images/top.png');
    background-size: 100%;
    margin: 0;
}
.login header{
    float: right;
    margin-top: 80px;
    margin-right: 5%;
}
.login .getpassword{
    background-color:  #fafafa;
    height: 500px;
}
.getpassword .box{
    /* border: 1px solid #ccc; */
    margin-top: 50px;
    padding: 0 20%;
}
.getpassword a{
    text-decoration: none;
}
.getpassword a:hover{
    color: chocolate;
}
</style>