<template>
    <div class="theme">
        <!-- 主题活动 -->
        <div class="theme_nav">
            <ul>
                <li>
                    <div class="theme_position">
                        <i class="el-icon-add-location"></i>当前位置 > 图书活动 > 主题活动
                    </div>
                </li>
            </ul>
        </div>
        <div class="theme_nav1">
            <ul>
                <li>
                    <div class="theme_box1"  style="overflow: hidden;">
                            <h3>主题活动</h3>
                            <div class="information">
                                <hr><br>
                                <div v-show="shows">
                                    <div class="theme_activity">
                                        <img src="http://47.96.139.19:6868/library/images/them1.jpg" width="40%" height="100%" style="float:left; cursor: pointer;" @click="writing()"/>
                                        <div style="padding:0 2% 0 42%;">
                                            <div style="font-size:18px;line-height:30px;"><b>写给图书馆的三行情诗</b></div>
                                            <div style="color:#666666;font-size:15px;line-height:30px">余秋雨曾说过：“图书馆就是一个让我们安静地靠近着伟大灵魂的地方。”</div>
                                            <div style="color:#666666;font-size:15px;line-height:30px">比赛时间：2019-12-01--2019-12-07</div>
                                            <div style="color:#666666;font-size:15px;line-height:30px">参赛方式：网上报名提交</div>
                                            <el-button size="small" style="background: #58c3b1;color:white;font-size:16px;margin-top:10px;width:35%" @click="writing()">我要写诗</el-button>
                                        </div>
                                    </div>
                                    <br><br><br><br><br><br><br><br><br><br><br>
                                </div>
                                <div v-show="!shows"  style="overflow: hidden;">
                                    <img src="http://47.96.139.19:6868/library/images/them2.jpg" width="100%" height="100%" style="text-align:cneter"/>
                                   
                                    <div style="width:13%"><b style="float:left">活动简介：</b></div>
                                    <div style="width:87%;float:right">余秋雨曾说过：“图书馆就是一个让我们安静地靠近着伟大灵魂的地方。”每个人心目中都有一个图书馆。为了提高广大人民对图书馆的了解，展现一个更立体、更多元化的图书馆面貌，加强图书馆与读者的沟通和联系，帮助读者进一步认识图书馆、了解图书馆、利用图书馆。为此，图书馆举办 “写给图书馆的三行情书”活动。</div>
                                    <div style="width:100%;height:10px;overflow: hidden;"></div>
                                    <div style="width:13%"><b style="float:left">作品要求：</b></div>
                                    <div style="width:87%;float:right">作品应围绕“写给图书馆的三行情书”为主题，展示读者与书、读者与图书馆、读者与读者之间的故事，内容积极向上，自然真实，要求原创。每人限提交一幅作品</div>
                                    <div style="width:100%;height:10px;overflow: hidden;"></div>
                                    <div style="width:13%"><b style="float:left">获奖奖品：</b></div>
                                    <div style="width:87%;float:right">
                                        <div>一等奖3名  &nbsp;&nbsp;&nbsp;小米手环+图书馆颁发的荣誉证书</div>
                                        <div>二等奖6名  &nbsp;&nbsp;&nbsp;U盘+图书馆颁发的荣誉证书</div>
                                        <div>三等奖10名 &nbsp;手持风扇+图书馆颁发的荣誉证书</div>
                                    </div>
                                    <div style="width:100%;height:10px;overflow: hidden;"></div>
                                    <div><b>活动时间：</b> 2019-12-01至2019-12-07</div>
                                    <div style="margin-top:10px;margin-bottom:10px;"><b>参赛方式：</b> 网上报名提交</div>
                                    <div style="margin-top:10px;margin-bottom:10px;"><b>主办方联系方式：</b>133xxxxxxxx</div>
                                    <img src="http://47.96.139.19:6868/library/images/them3.jpg" width="50%;" style="float:left"/>
                                    <img src="http://47.96.139.19:6868/library/images/them4.jpg" width="50%;"/>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="姓名" prop="input1">
                                        <el-input v-model="ruleForm.input1" placeholder="请填写姓名" style="width:50%;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="邮箱" prop="input2">
                                        <el-input v-model="ruleForm.input2" placeholder="请填写邮箱" style="width:50%;"></el-input>
                                        <div style="color:#666666">*注：报名成功后将收到主办方发送的邮件！如未收到邮件请及时和主办方联系。</div>
                                        </el-form-item>
                                        <el-form-item label="联系方式" prop="input3">
                                            <el-input v-model="ruleForm.input3" placeholder="请填写联系方式" style="width:50%;"></el-input>
                                            <div style="color:#666666">*注：请如实填写联系方式，活动结束后将通过短信告知获奖名单！</div>
                                        </el-form-item>
                                        <el-form-item label="三行情诗" prop="desc">
                                            <el-input type="textarea" v-model="ruleForm.desc" :rows="5" placeholder="三行情诗" style="width:60%;"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')" size="medium" style="width:20%;">立即提交</el-button>
                                        </el-form-item>
                                    </el-form>
                                    <br>
                                </div>
                            </div> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="theme_nav2">
            <ul>
                <li>
                    <div class="theme_box2">
                        <h3 class="title">图书活动</h3>
                        <div>
                            <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 主题活动</el-button>
                        </div>
                        <div>
                            <el-button @click="$emit('index4_2')"><i class="el-icon-arrow-right"></i> 公益讲座</el-button>
                        </div>
                        <div>
                            <el-button @click="$emit('index4_3')"><i class="el-icon-arrow-right"></i> 志愿活动</el-button>
                        </div>
                        <br>
                    </div>
                    <br>
                    <notice/>
                </li>
            </ul>
        </div>
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
import notice from '../index/notice.vue'
import { async } from 'q';
export default {
    components: {
        foot,
        notice,
    },
    data(){
        return{
            username:'',
            password:'',
            radios:'',
            shows:true,
            ruleForm: {
            input1: '',
            input2: '',
            input3: '',
            desc: ''
            },
            rules: {
            input1: [
                { required: true, message: '请填写姓名', trigger: 'blur' },
            ],
            input2: [
                { required: true, message: '请填写邮箱', trigger: 'blur' },
            ],
            input3: [
                { required: true, message: '请填写联系方式', trigger: 'blur' },
            ],
            desc: [
                { required: true, message: '三行情诗', trigger: 'blur' }
            ]
            },
            test:'',
        }
    },
    methods:{
        writing(){
            this.shows=!this.shows;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.username&&this.radios==='1'){
                    alert('您是管理员，不能提交！')
                }else if(this.username&&this.radios==='0'){
                    this.$confirm('请再次确认你的信息，点击“确定"提交', '提示信息', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    }).then(() => {
                        this.state()                         
                            
                    }).catch(() => {
                             
                    });
                }else{
                    this.$alert('请先进行登录', {
                    confirmButtonText: '确定',
                    type:'error'
                    });
                }
                
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        state:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/activity/theme', 
            {user_name:self.username,contestant:self.ruleForm.input1,phone:self.ruleForm.input3,works:self.ruleForm.desc,email:self.ruleForm.input2})
            this.test=list.status
            if(this.test==0){
                this.$alert('提交成功', {
                confirmButtonText: '确定',
                type:'success'
                });
                this.ruleForm.input1='';
                this.ruleForm.input2='';
                this.ruleForm.input3='';
                this.ruleForm.desc='';
            }
            else{
                this.$alert('提交失败，您已报名，一个用户只能提交一次', {
                confirmButtonText: '确定',
                type:'error'
                });
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
    },

}
</script>

<style>
.theme{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.theme .theme_nav1,.theme .theme_nav{
    margin-left: 5%;
}
.theme .theme_nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.theme .theme_nav2{
    /* margin-right: 5%; */
    
}
.theme .theme_nav2 ul li{
    float: left;
    width: 27%;
    list-style: none;
}
.theme_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.theme_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.theme_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.theme_box2 .title{
    font-size: 22px;
    text-align: left;
    padding-left: 10%;
    font-weight: normal;
    line-height: 44px;
}
.theme_box2 div{
    margin-left: 10%;
    line-height: 50px;
}
.theme_box2 div .el-button{
    width: 90%;
    text-align: left;
}
.theme_box1 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.theme .theme_box1 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.information .el-input{
    float: inherit;
    width: 49.5%;
    text-align: left;
}
.theme_activity{
    width: 100%;
    height: auto;
    border: 1px solid #dad4d4; 
    overflow: hidden;
}
</style>