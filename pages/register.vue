<template>
    <div class="register">
        <article class="header">
            <header>
                <a
                href="/"
                class="site-logo" />
                <span class="login" style="color:white;font-size: 15px;">
                <a href="/" class="home">首页</a>
                <em class="bold">已有账号？</em>
                <a href="/login">立即登录</a>
                </span>
            </header>
        </article>
        <div class="registerbackground">
            <br><br><br>
        <section >
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm">
                <el-form-item
                label="昵称"
                prop="name">
                <el-input v-model="ruleForm.name" placeholder="昵称4~16字符之间"/>
                </el-form-item>
                <el-form-item
                label="邮箱"
                prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入邮箱"/>
                <div>
                    <el-button
                    size="mini"
                    round
                    @click="sendMsg">发送验证码</el-button>  
                    <span style="color: #666666;">{{ statusMsg }}</span>
                </div>
                </el-form-item>
                <el-form-item
                label="验证码"
                prop="code">
                <el-input
                    v-model="ruleForm.code"
                    maxlength="6" 
                    placeholder="请输入验证码"/>
                </el-form-item>
                <el-form-item
                label="密码"
                prop="pwd">
                <el-input
                    placeholder="请输入密码"
                    v-model="ruleForm.pwd"
                    type="password" />
                    <p style="color:#666">*注意：密码由字母和数字组成，字符串不少于6位</p>
                </el-form-item>
                <el-form-item
                label="确认密码"
                prop="cpwd">
                <el-input
                    placeholder="请确认密码"
                    v-model="ruleForm.cpwd"
                    type="password" />
                </el-form-item>
                <el-form-item
                label="真实姓名"
                prop="truename">
                <el-input v-model="ruleForm.truename" placeholder="请如实填写姓名"/>
                </el-form-item>
                <el-form-item
                label="联系方式"
                prop="phonenumber">
                <el-input v-model="ruleForm.phonenumber" placeholder="请填写联系方式"/>
                </el-form-item>
                <el-form-item>
                <el-button
                    type="primary"
                    @click="register('ruleForm')">同意以下协议并注册</el-button>
                <div class="error">{{ error }}</div>
                </el-form-item>
                <el-form-item>
                <!-- <a
                    class="f1"
                    href="http://www.meituan.com/about/terms"
                    target="_blank">《图书馆用户协议》</a> -->
                    <el-button type="text" @click="centerDialogVisible = true">《图书馆用户协议》</el-button>
                    <div class="error">{{ error }}</div>
                </el-form-item>
                <!-- {{message}} -->
            </el-form>
        </section>
        <br>
        </div>
        <el-dialog
        title="图书馆用户协议"
        :visible.sync="centerDialogVisible"
        width="50%"
        center>
            <p>欢迎您注册成为玉林市图书馆网站用户！请仔细阅读下面的协议，只有接受协议才能继续进行注册。</p>
            <p>1. 服务条款的确认和接纳</p>
            <p class="text">玉林市图书馆网站用户服务的所有权和运作权归玉林市图书馆网站拥有。玉林市图书馆网站所提供的服务将按照有关章程、服务条款和操作规则严格执行。用户通过注册程序点击“我同意” 按钮，即表示用户与玉林市图书馆网站达成协议并接受所有的服务条款。</p>
            <p>2. 用户隐私制度</p>
            <p class="text">尊重用户个人隐私是玉林市图书馆网站的 基本政策。玉林市图书馆网站不会公开、编辑或透露用户的注册信息，除非有法律许可要求，或玉林市图书馆网站在诚信的基础上认为透露这些信息在以下三种情况是必要的：</p>
            <p class="text">1)遵守有关法律规定，遵从合法服务程序。</p>
            <p class="text">2)保持维护玉林市图书馆网站的商标所有权。</p>
            <p class="text">3)在紧急情况下竭力维护用户个人和社会大众的隐私安全。</p>
            <p class="text">4)符合其他相关的要求。</p>
            <p>3. 用户的帐号，密码和安全性</p>
            <p class="text">一旦注册成功成为玉林市图书馆网站用户，您将得到一个密码和帐号。如果您不保管好自己的帐号和密码安全，将对因此产生的后果负全部责任。另外，每个用户都要对其帐户中的所有活动和事件负全责。您可随时根据指示改变您的密码，也可以结束旧的帐户重开一个新帐户。用户同意若发现任何非法使用用户帐号或安全漏洞的情况，立即通知玉林市图书馆网站。</p>
            <p>4. 免责条款</p>
            <p class="text">用户明确同意网站服务的使用由用户个人承担风险。</p>
            <p class="text">玉林市图书馆网站不作任何类型的担保，不担保服务一定能满足用户的要求，也不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保。用户理解并接受：任何通过玉林市图书馆网站服务取得的信息资料的可靠性取决于用户自己，用户自己承担所有风险和责任。</p>
            <p>5. 解释权</p>
            <p class="text">本注册协议的解释权归玉林市图书馆网站所有。如果其中有任何条款与国家的有关法律相抵触，则以国家法律的明文规定为准。</p>
        </el-dialog>
        
        <foot/>
    </div>
</template>

<script>
import { async } from 'q'
import foot from '../components/index/foot.vue'
export default {
    components: {
        foot,
    },
    data() {
        return {
            items:{
                name:null
            },
            regidsterstatus:[],
            message:[],
            centerDialogVisible:false,
            statusMsg: '',
            error: '',
            test:0,
            ruleForm: {
                name: '',
                code: '',
                pwd: '',
                cpwd: '',
                email: '',
                truename:'',
                phonenumber:'',
            },
            rules: {
            name: [{
                required: true,
                type: 'string',
                message: '请输入昵称',
                trigger: 'blur'
            }],
            email: [{
                required: true,
                type: 'email',
                message: '请输入邮箱',
                trigger: 'blur'
            }],
            pwd: [{
                required: true,
                message: '创建密码',
                trigger: 'blur'
            }],
            cpwd: [{
                required: true,
                message: '确认密码',
                trigger: 'blur'
            }, {
                validator: (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.pwd) {
                    callback(new Error('两次输入密码不一致'))
                } else {
                    callback()
                }
                },
                trigger: 'blur'
            }],
            truename: [{
                required: true,
                type: 'string',
                message: '请填写姓名',
                trigger: 'blur'
            }],
            phonenumber: [{
                required: true,
                type: 'string',
                message: '请填写联系方式',
                trigger: 'blur'
            }],
            }
        }
        },
        head:{
            script:[
                {src:'js/jquery1.42.min.js'},
                {src:'js/echarts.common.min.js'},
            ],
            link: [
                // { rel: 'stylesheet', href: 'css/style.css' },
                // { rel: 'stylesheet', href: 'css/all.css' },
            ]
        },
        methods:{
            sendMsg:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/user/verification',{email: self.ruleForm.email})
                console.log(status,list)
                if (self.timerid) {
                    return false
                }
                let count = 60;
                    self.statusMsg = `验证码已发送,剩余${count--}秒`
                    self.timerid = setInterval(function () {
                      self.statusMsg = `验证码已发送,剩余${count--}秒`
                      if (count === 0) {
                        clearInterval(self.timerid)
                        self.statusMsg=''
                      }
                    }, 1000)
            },
            register:async function(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let self = this;
                        self.$axios.post('/user/register',
                        {useraccount:self.ruleForm.name,password:self.ruleForm.pwd,cpassword:self.ruleForm.cpwd,
                        verifycode:self.ruleForm.code,email:self.ruleForm.email,username:self.ruleForm.truename,
                        userphone:self.ruleForm.phonenumber})
                        .then(({status,data:{list}})=>{
                        const regidsterstatus=list.status
                        const message = list.message
                        if(status===200){
                            if(regidsterstatus===0){
                                    this.$alert('注册成功', {
                                    confirmButtonText: '确定',
                                    type:'success'
                                    });
                                    location.href='/login'
                            }else{
                                    this.$alert( message , '注册失败', {
                                    confirmButtonText: '确定',
                                    type: 'error'
                                    });
                                    location.href='/register'
                            }
                        }else{
                            self.error=`服务器出错`
                        }
                        })
                        } else {
                        console.log('error submit!!');
                    return false;
                    }
                });
            //     if(this.ruleForm.name==''){
            //         this.$message('对不起，请输入昵称！');
            //     }
            //     else if(this.ruleForm.email==''){
            //         this.$message('对不起，请输入邮箱！');
            //     }
            //     else if(this.ruleForm.code==''){
            //         this.$message('对不起，请输入验证码！');
            //     }
            //     else if(this.ruleForm.pwd==''){
            //         this.$message('对不起，请设置密码！');
            //     }
            //     else if(this.ruleForm.cpwd==''){
            //         this.$message('对不起，请确认密码！');
            //     }
            //     else{
            //         let self = this;
            //         self.$axios.post('/user/register',
            //         {username : self.ruleForm.name,password:self.ruleForm.pwd,cpassword:self.ruleForm.cpwd,verifycode:self.ruleForm.code,email:self.ruleForm.email})
            //         .then(({status,data:{list}})=>{
            //         const regidsterstatus=list.status
            //         const message = list.message
            //         if(status===200){
            //             if(regidsterstatus===0){
            //                     this.$alert('注册成功', {
            //                     confirmButtonText: '确定',
            //                     type:'success'
            //                     });
            //                     location.href='/login'
            //             }else{
            //                     this.$alert( message , '注册失败', {
            //                     confirmButtonText: '确定',
            //                     type: 'error'
            //                     });
            //                     location.href='/register'
            //             }
            //         }else{
            //             self.error=`服务器出错`
            //         }
            //         })
            //     }

            },
            // notice(){
            //     jQuery(".rolling").slide({titCell:".roll-title ul",mainCell:".content ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:1,delayTime:1000,trigger:"click"});
            // },
        //     register:async function(){
            
        //     console.log('fff')
        //     let self = this;
        //     let {status,data:{list}} = await self.$axios.post('/user/register',
        //     {username : self.ruleForm.name,password:self.ruleForm.pwd,verifycode:self.ruleForm.code,email:self.ruleForm.email})
        //     console.log(status,list)
            
        //     self.message = list
        //     // localStorage.setItem("name", self.message1.message);
        //     // location.href='/';
        // },
        },
        mounted:function(){
        }

}
</script>

<style>
.register{
    width: 100%;
    min-width: 1200px;
}
.registerbackground{
    background:  url('../static/images/registerbackground.jpg');
    background-size: 100% 100%;
}
.register .header{
    height: 105px;
    background:  url('../static/images/top.png');
    background-size: 100%;
    margin: 0;
}
.register header{
    float: right;
    margin-top: 80px;
    margin-right: 5%;
}
.register header .login a{
    /* margin-left: 10px; */
    margin-right: 10px;
    text-decoration: none;
    color:white;
    font-size: 15px;
}
.register header .login a:hover{
    color:khaki;
}
header .login .home{
    text-decoration: none;
}
header .login .home:hover{
    color: khaki;
}
.register section{
    /* margin-top: 50px; */
    margin-left: 5%;
}
section .el-form .el-form-item .el-input{
    width: 300px;
}
.text{
    text-indent: 2em;
}
</style>