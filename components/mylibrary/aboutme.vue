<template>
    <div class="aboutuser">
        
        <template v-if="username&&radios==0">
            <div class="aboutuser_nav">
                <ul>
                    <li>
                        <div class="aboutuser_position" :data="data1">
                            <i class="el-icon-add-location"></i>当前位置 > 我的图书馆
                        </div>
                        <div class="about">
                            <div class="name">
                                <div class="block" style="margin-left:3%;">
                                    <el-avatar v-if="imageUrl" :size="100" :src="imageUrl" style="float:left;margin-right:2%;"></el-avatar>
                                    <el-avatar v-else :size="100" :src="tableData.img" style="float:left;margin-right:2%;"></el-avatar>
                                </div>
                                <br>
                                <div>{{username}}</div>
                                <br>
                                <a href="/mylibrary_informat"><el-button type="primary" size="small">个人资料</el-button></a>
                                <a href="/updatepassword"><el-button type="primary" size="small">修改密码</el-button></a>
                                
                            </div>
                            <br>
                            <div style="margin-left:3.8%">
                                <el-button  style="position: relative;" type="primary" plain size="small">更换头像
                                    <input class="change-photo-btn" type="file" accept="image/jpg,image/png,image/jpeg,image/bmp" @change="chooseImg">
                                </el-button>
                                </div>
                            <br><br>
                            <div class="book">
                                <div class="box1">
                                    <div>
                                        <a href="/borrowedbooks"><el-button style="background:#9abc32;" icon="el-icon-reading" circle>
                                        </el-button></a>
                                        已借图书
                                    </div>
                                    <br>
                                    <div class="line1"></div>
                                    <div class="list1" > 
                                        {{tableData.borrowing}}
                                    </div>
                                    <br><br><br><br>
                                </div>
                                <div class="box2_2">
                                    <div>
                                        <a href="/mybookshelf"><el-button style="background:#6fb3e0;" icon="el-icon-folder-add" circle>
                                            </el-button></a>
                                            我的书架
                                        </div>
                                    <br>
                                    <div class="line2"></div>
                                    <div class="list2"> 
                                        {{tableData.bookshelf}}
                                    </div>
                                    <br><br><br><br>
                                </div>
                                <div class="box3">
                                    <div>
                                        <a href="borrowing"><el-button style="background:#f79263;" icon="el-icon-setting" circle>
                                        </el-button></a>
                                        借书记录
                                    </div>
                                    <br>
                                    <div class="line3"></div>
                                    <div class="list3"> 
                                        {{tableData.borrow}}
                                    </div>
                                    <br><br><br><br>
                                    
                                </div>
                                
                            </div>
                           
                            <br><br><br><br><br><br><br><br>
                        </div>
                    </li>
                </ul>
            </div>
        </template>
        
        <template v-else>
            
            <div class="aboutuser_nav">
                <ul>
                    <li>
                        <div class="aboutuser_position">
                            <i class="el-icon-add-location"></i>当前位置 > 我的图书馆
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="aboutuser_nav1">
                
                <ul>
                    <li>
                        
                        <div class="aboutuser_box1_login">
                            
                            <h3>登录我的图书馆</h3>
                            <div class="inform1ation1">
                                <hr><br>
                                <div class="form1">
                                    <h4
                                    v-if="error"
                                    class="tips"><i/>{{ error }}</h4>
                                    <p><span style="float:left;font-size:15px;color:#666">账号： </span></p>
                                    <el-input
                                    v-model="username1"
                                    size="medium"/>
                                    <p><span style="float:left;font-size:15px;color:#666">密码： </span></p>
                                    <el-input
                                    v-model="password1"
                                    type="password"
                                    show-password
                                     size="medium"/>
                                    <div class="foot">
                                    <el-radio-group v-model="radio1" size="mini" style="margin-left:5px;">
                                        <el-radio label="0" >用户</el-radio>
                                        <el-radio label="1" style="margin-left:-20px;">管理员</el-radio>
                                    </el-radio-group>
                                    <div>
                                        <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
                                        <a href="/getpassword" @click="clearCookie"><b style="cursor: pointer;">忘记密码？</b></a>
                                    </div>
                                    </div>
                                    <el-button
                                    class="btn-login"
                                    type="success"
                                    size="mini"
                                    @click="login()">登录</el-button>
                                </div>
                                <br>
                            </div> 
                        </div>
                        <br><br><br><br>
                    </li>
                </ul>
            </div>
        </template>
        <br>
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
export default {
    components: {
        foot,
    },
    props:['list'],
    data(){
        return{
            state:'',
            radio1:'0',
            checked: '',
            username1: '',
            password1: '',
            error: '',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            username:'',
            password:'',
            radios:'',
            token:'',
            tableData:[],
            imageUrl:'',
            base64:'',

        }
    },
    head:{
        script:[
            // {src:'js/jquery.min.js'},
            // {src:'js/echarts-all.js'},
            // {src:'js/jquery.min.js'},
            
        ],
        link: [
            // { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        chooseImg (event) {
            let file = event.target.files[0]
            let reader = new FileReader()
            let img = new Image()
            // 读取图片
            reader.readAsDataURL(file)
            // 读取完毕后的操作
            reader.onloadend = (e) => {
                img.src = e.target.result
                // 这里的e.target就是reader
                // console.log(reader.result)
                // reader.result就是图片的base64字符串
                this.base64 = reader.result
                let  self=this
                self.$axios.post('/mylibrary/change_photo',
                    {username:self.username,photo:self.base64})
                    .then(({status,data:{list}})=>{
                        this.imageUrl=list.data
                        console.log(list)
                    })
                if(status==0){
                    console.log('sss')
                    this.states()
                }
            }
            this.imageUrl=URL.createObjectURL(file);

        },
        states:async function(){
            console.log('dd')
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/mylibrary/usermylibrary', 
            {user_account:self.username,tokens:self.token})
            self.tableData=list.data
            console.log('ss',list.data)
            location.href="/mylibrary"
        },
        login:async function(){
            // localStorage.setItem("name", self.user.data);
            if(this.username1==''){
                this.$message('对不起，请输入账号！');
                }
            else if(this.password1==''){
                this.$message('对不起，请输入密码！');
            }else{ 
                let self = this;
                self.$axios.post('/user/login',
                {username:self.username1,password:self.password1,code:self.radio1,time:self.checked})
                .then(({status,data:{list}})=>{
                const loginstatus=list.status
                const loginmessage = list.message
                if(status===200){
                    if(loginstatus===0){
                            this.$alert('登录成功', {
                            confirmButtonText: '确定',
                            type:'success'
                            });
                            var name = self.username1;
                            //保存的密码
                            var pass = list.data;
                            //判断复选框是否被勾选 勾选则调用配置cookie方法
                            var code = self.radio1;
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
                            location.href='/mylibrary'
                    }
                }else{
                    self.error=`服务器出错`
                }
                })
            }
            
        },
        clearCookie: function(){
            document.cookie  = "username=;path=/";
            document.cookie  = "token=;path=/";
            document.cookie  = "radios=;path=/";
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
                this.token = bytes.toString(CryptoJS.enc.Utf8);
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
    computed:{
        data1(){
            this.tableData=this.list
        } 
    }

}
</script>

<style>
#jg_s .col-md-4{
	padding: 10px 10px;
	border-radius: 5px;
}
#jg_s .col-md-4:hover{
	background: #eeeeee;
}
.aboutuser{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.aboutuser .aboutuser_nav{
    margin-left: 5%;
}
.aboutuser .aboutuser_nav1{
    margin-left: 30%;
}
.aboutuser .aboutuser_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.aboutuser_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.aboutuser_box1_login{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.aboutuser_box1_login h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.aboutuser .aboutuser_box1_login .inform1ation1{
    padding: 0 10%;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
    width: 100%;
}
.inform1ation1 .form1{
    line-height: 50px;
}
.inform1ation1 .form1 .el-input{
    width: 75%;
    /* margin-left: 2%; */
    /* margin-left: -30px; */
}
.aboutuser_box1_login a{
    text-decoration: none;
}
/* .inform1ation1 .form1 .el-button{
    float: right;
} */
.aboutuser_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
}
.aboutuser_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}
.book .box1,.book .box2_2,.book .box3{
    border: 1px solid #dad4d4;
    width: 30.3%;
    padding: 1% 2%;
    font-size: 20px;
}
.book div{
    float: left;
    margin-right: 3%;
}
.about .book{
    margin-left: 3%;
}
.book .box1{
    text-align: center;
    color: #9abc32;
    border-color: #9abc32;
    border-top: 3px solid #9abc32;
    border-bottom: 3px solid #9abc32;
}
.book .box2_2{
    /* text-align: center; */
    color: #6fb3e0;
    border-color: #6fb3e0;
    border-top: 3px solid #6fb3e0;
    border-bottom: 3px solid #6fb3e0;
}
.book .box3{
    text-align: center;
    color: #f79263;
    border-color: #f79263;
    border-top: 3px solid #f79263;
    border-bottom: 3px solid #f79263;
}
.book .box1 .line1{
    border: dashed 1px #9abc32;
    width: 100%;
    margin: 2% 0;
}
.book .box2_2 .line2{
    border: dashed 1px #6fb3e0;
    width: 100%;
    margin: 2% 0;
}
.book .box3 .line3{
    border: dashed 1px #f79263;
    width: 100%;
    margin: 2% 0;
}
.book .box1 .list1,.book .box2_2 .list2,.book .box3 .list3{
    font-size: 40px;
    /* line-height: 70px; */
    margin-left: 45%;
}
.change-photo-btn{ 
  position: absolute; 
  top: 0; 
  left: 0; 
  opacity: 0; 
  cursor: pointer; 
  height: 40px; 
  width: 88px;
}
</style>