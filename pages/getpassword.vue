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

                <div v-if="next==2">
                    <div style="font-size:15px;color:#444;line-height:100px;text-align:center">
                        验证成功，请重新设置密码：
                    </div>
                    <div style="text-align:center;font-size:15px;color:#444;line-height:50px;">
                        新&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码：
                        <el-input v-model="input3" size="medium" style="width:30%;" placeholder="新密码" show-password type="password"></el-input>
                    </div>
                    <div style="text-align:center;font-size:15px;color:#444;">
                        确认新密码：
                        <el-input v-model="input4" size="medium" style="width:30%;" placeholder="确认新密码" show-password type="password"></el-input>
                    </div>
                    <div style="text-align:center;line-height:100px;">
                        
                        <el-button type="info" plain size="medium" style="color:#111" @click="next3()">确定</el-button>
                
                    </div>{{user}}
                </div>

                <div v-else-if="next==1">
                    <div style="font-size:15px;color:#444;line-height:100px;text-align:center">
                        尊敬的用户：{{user}}&nbsp;&nbsp;我们将向您账户绑定的邮箱发送验证码，请在三分钟内完成以下验证操作：
                    </div>
                    <div style="text-align:center;font-size:15px;color:#444;">
                        验证码：<el-input v-model="input2" size="medium" maxlength="6" style="width:20%;"></el-input>
                    </div>
                    <div style="text-align:center;line-height:100px;">
                        <el-button type="info" plain size="medium" style="color:#111" @click="next2()">下一步</el-button>
                    </div>
                </div>
                
                <div v-else>
                    <div style="font-size:15px;color:#444;line-height:100px;text-align:center">
                        请输入用户名：<el-input v-model="input1" size="medium" clearable style="width:30%;"></el-input>
                    </div>
                    <div style="text-align:center">
                        <el-button type="info" plain size="medium" style="color:#111" @click="next1()">下一步</el-button>
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
        username:'',
        password:'',
        radios:'',
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        next:'',
        user:'',
        useremail:'',
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
            if(this.input1){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/getpassword/sendemail',
                {user_name:self.input1})
                // self.useremail=list.data
                if(list.status==0){
                    this.next=1;
                    sessionStorage.setItem("username", self.input1);
                    sessionStorage.setItem("email",list.data);
                }
                else{
                    this.$alert(list.message, {
                    confirmButtonText: '确定',
                    type:'error'
                    });
                }
            }else{
                alert('请输入用户名!');
            }
            
        },
        next2:async function(){
            if(this.input2){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/getpassword/verifycode',
                {email:self.useremail,code:self.input2})
                if(list.status==0){
                    this.next=2;
                    // sessionStorage.setItem("username", self.input1);
                }
                else{
                    this.$alert(list.message, {
                    confirmButtonText: '确定',
                    type:'error'
                    });
                }
            }else{
                alert('请输入验证码!');
            }
        },
        next3:async function(){
           if(this.input3&&this.input4){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/getpassword/setpassword',
                {user_name:self.user,password:self.input3,cpassword:self.input4})
                if(list.status==0){
                    sessionStorage.clear(); 
                    // this.setCookie("", "","", -1);
                    location.href="/successpassword"
                    
                }
                else{
                    this.$alert(list.message, {
                    confirmButtonText: '确定',
                    type:'error'
                    });
                }
            }else{
                alert('请输入新密码!');
            }
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
        this.user = sessionStorage.getItem('username');
        this.useremail = sessionStorage.getItem('email');
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
</style>