<template>
    <div class="login">
        <article class="header">
            <header>
                <!-- <a href="/index">首页</a> -->
                <span class="login" style="color:white;font-size: 15px;">
                <a href="/" class="home">首页</a>
                <em class="bold">未有账号？</em>
                <a href="/register">立即注册</a>
                </span>
            </header>
        </article>
        <!-- <section>
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm">
                <el-form-item
                label="账号"
                prop="name">
                <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item
                label="密码"
                prop="password">
                <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
                <b>忘记密码？</b>
                </el-form-item>
                <el-form-item>
                <el-button
                    class="btn-login"
                    type="success"
                    size="mini"
                    @click="login">登录</el-button>
                </el-form-item>
                
            </el-form>
        </section> -->
        <div class="backgroud" style="overflow: hidden;">
            <div class="signin" style="overflow: hidden;">
                <h4
                v-if="error"
                class="tips"><i/>{{ error }}</h4>
                <p><span style="float:left;font-size:15px;color:#666666;">账号： </span></p>
                <el-input
                placeholder="请输入昵称"
                v-model="username"/>
                <p><span style="float:left;font-size:15px;color:#666666;">密码： </span></p>
                <el-input
                placeholder="请输入密码"
                v-model="password"
                type="password"
                show-password/>
                <div class="foot">
                <div>
                    <el-radio-group v-model="radio" size="mini" >
                        <el-radio label="0" >用户</el-radio>
                        <el-radio label="1" >管理员</el-radio>
                    </el-radio-group>
                </div>                
                <el-checkbox v-model="checked" style="line-height:60px">7天内自动登录</el-checkbox>
                <a href="/getpassword"><b><span @click="clearCookie" style="cursor: pointer;">忘记密码？</span></b></a>
                </div>
                <el-button
                class="btn-login"
                type="success"
                size="mini"
                @click="login()">登录</el-button>
            </div>
        </div>
        <!-- <br><br> -->
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../components/index/foot.vue'
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
        token:'',
        }
    },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/echarts.common.min.js'},
            // {src:'js/bootstrap.min.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        login:async function(){
            // localStorage.setItem("name", self.user.data);
            if(this.username==''){
                this.$message('对不起，请输入账号！');
                }
            else if(this.password==''){
                this.$message('对不起，请输入密码！');
            }else{ 
                let self = this;
                self.$axios.post('/user/login',
                {username:self.username,password:self.password,code:self.radio,time:self.checked})
                .then(({status,data:{list}})=>{
                const loginstatus=list.status
                const loginmessage = list.message
                // console.log('token',list.data)
                if(status===200){
                    if(loginstatus===0){
                            this.$alert('登录成功', {
                            confirmButtonText: '确定',
                            type:'success'
                            });
                            // self.password=list.data
                            var name = self.username;
                            //保存的密码
                            var pass = list.data;
                            //判断复选框是否被勾选 勾选则调用配置cookie方法
                            var code = self.radio;
                            if (self.checked) {
                                //传入账号名，密码，和保存天数3个参数
                                this.setCookie(name, pass, code, 7);
                            }else{
                                this.setCookie(name, pass, code, 1);
                            }
                            location.href='/'
                    }else{
                            this.$alert( loginmessage , '登录失败', {
                            confirmButtonText: '确定',
                            type: 'error'
                            });
                            location.href='/login'
                    }
                }else{
                    self.error=`服务器出错`
                }
                })
            }
            
        },
        //设置cookie
        setCookie(c_name, c_pwd,c_code, exdays) {

        // Encrypt，加密账号密码
        var cipherPortId = CryptoJS.AES.encrypt(
            c_name+'',
            "secretkey123"
        ).toString();
        var cipherPsw = CryptoJS.AES.encrypt(c_pwd+'', "secretkey123").toString();
        var usercode = CryptoJS.AES.encrypt(c_code+'', "secretkey123").toString();
        console.log(cipherPortId+'/'+cipherPsw+'/'+usercode)//打印一下看看有没有加密成功
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie =
            "username" + "==" + cipherPortId + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
            "token" + "==" + cipherPsw + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
            "radios" + "==" + usercode + ";path=/;expires=" + exdate.toGMTString();
        // console.log(document.cookie)
        },
        
        //读取cookie
        getCookie: function() {
        console.log(document.cookie)
        if (document.cookie.length > 0) {
            var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
            for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split("=="); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "username") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.username = bytes.toString(CryptoJS.enc.Utf8); //保存到保存数据的地方
                // console.log('ss',this.username)
            } else if (arr2[0] == "token") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.token = bytes.toString(CryptoJS.enc.Utf8);
                // console.log('ss',this.password)
            }else if (arr2[0] == "radios") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.radios = bytes.toString(CryptoJS.enc.Utf8);
                // console.log('ss',this.radio)
            }
            }
        }
        },
        //清除cookie
        clearCookie: function() {
            this.setCookie("", "","", -1); //修改2值都为空，天数为负1天就好了
        }
    },
    mounted:function(){
        this.getCookie(); 
    },

}
</script>

<style>
.login{
    width:100%;
    min-width: 1200px;
    
}
.backgroud{
    background:  url('../static/images/login1.jpg');
    background-size: 100% 100%;
    height: 580px;
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
.login header .login a{
    /* margin-left: 10px; */
    margin-right: 10px;
    text-decoration: none;
    color: white;
}
.login header .login a:hover{
    color: khaki;
}
header .login .home{
    text-decoration: none;
    color:black;
}
header .login .home:hover{
    color: khaki;
}
.login .signin{
    /* margin-left: 100px; */
    
    margin-top:50px;
    margin-bottom:50px;
    /* line-height: 60px; */
    border: 1px solid #dad4d4;
    padding: 60px 40px;
    width: 400px;
    height:400px;
    float: right;
    margin-right: 10%;
    background-color: #fafafa;
}
.signin .el-input{
    width: 250px;
    /* padding-left: -30px; */
    line-height: 60px;
}
.signin p{
    line-height: 60px;
}
.signin a{
    text-decoration: none;
}
</style>