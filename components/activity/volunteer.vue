<template>
    <div class="volunteer">
        <!-- 志愿服务 -->
        <div class="volunteer_nav">
            <ul>
                <li>
                    <div class="volunteer_position">
                        <i class="el-icon-add-location"></i>当前位置 > 图书活动 > 志愿服务
                    </div>
                </li>
            </ul>
        </div>
        <div class="volunteer_nav1">
            <ul>
                <li>
                    <div class="volunteer_box1">
                        <h3>志愿服务</h3>
                        <div class="information">
                            <hr><br>
                            <div class="volunteer_activity" v-show="shows">
                                <img width="100%" height="100%" src="http://47.96.139.19:6868/library/images/theme.jpg">
                                <div><b style="line-height:2rem;font-size:1rem;color:black">2019社会实践</b></div>
                                <div>预约开始时间：2019-01-01</div>
                                <div>预约结束时间：2019-12-31</div>
                                <div>预约结束时间：2019-12-31</div>
                                <div>正式开始时间：2019-01-01</div>
                                <div>正式结束时间：2019-12-31</div>
                                <el-button type="primary" size="medium" @click="entryentry()">报名入口</el-button>
                                <br><br>
                            </div>
                            <div v-show="!shows">
                                <img width="100%" height="100%" src="http://47.96.139.19:6868/library/images/theme.jpg">
                                <div style="width:50%;float:left;font-size:17px;color:#666666;line-height:30px;">
                                    <div>主办方：xxx图书馆</div>
                                    <div>活动地点：xxx图书馆</div>
                                </div>
                                <div style="width:50%;float:left;color:#666666;line-height:30px;margin-bottom:30px;font-size:16px;">
                                    <div>预约开始时间：2019-01-01</div>
                                    <div>预约结束时间：2019-12-31</div>
                                    <div>预约结束时间：2019-12-31</div>
                                    <div>正式开始时间：2019-01-01</div>
                                    <div>正式结束时间：2019-12-31</div>
                                </div>
                                <div>
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                                        <el-form-item label="姓名" prop="input1">
                                            <el-input v-model="ruleForm.input1"  placeholder="请填写姓名" style="width:50%;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系方式" prop="input2">
                                            <el-input v-model="ruleForm.input2"  placeholder="请填写联系方式" style="width:50%;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="邮箱" prop="input3">
                                            <el-input v-model="ruleForm.input3"  placeholder="请填写邮箱" style="width:50%;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="预约时间" required>
                                            <el-col :span="9">
                                            <el-form-item prop="data1">
                                                <el-date-picker 
                                                type="date" 
                                                placeholder="选择日期" 
                                                v-model="date1" 
                                                style="width: 100%;"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                >
                                                </el-date-picker>
                                            </el-form-item>
                                            </el-col>
                                            <el-col class="line" :span="0.6">-</el-col>
                                            <el-col :span="9">
                                            <el-form-item prop="date3">
                                                <el-time-picker 
                                                placeholder="选择时间" 
                                                v-model="date3" 
                                                style="width: 100%;"
                                                format="hh 时 mm 分 ss 秒"
                                                value-format="hh:mm:ss">
                                                </el-time-picker>
                                            </el-form-item>
                                            </el-col>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="warning" @click="submitForm('ruleForm')">在线预约</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                            <br><br><br>
                        </div> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="volunteer_nav2">
            <ul>
                <li>
                    <div class="volunteer_box2">
                        <h3 class="title">图书活动</h3>
                        <div>
                            <el-button @click="$emit('index4_1')"><i class="el-icon-arrow-right"></i> 主题活动</el-button>
                        </div>
                        <div>
                            <el-button @click="$emit('index4_2')"><i class="el-icon-arrow-right"></i> 公益讲座</el-button>
                        </div>
                        <div>
                            <el-button style="color: #CD3339;" @click="$emit('index4_3')"><i class="el-icon-arrow-right"></i> 志愿活动</el-button>
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
                date1: '',
                date2: '',
                input3: '', 
            },
            date1:'',
            date3:'',
            test:'',
            rules: {
                input1: [
                    { required: true, message: '请输入条码号', trigger: 'blur' },
                ],
                input2: [
                    { required: true, message: '请输入书名', trigger: 'blur' },
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                input3: [
                    { required: true, message: '请输入出版社', trigger: 'blur' },
                ],
            }
        }
    },
    methods:{
        entryentry(){
            this.shows=!this.shows;
        },
        submitForm(formName){
             this.$refs[formName].validate((valid) => {
            if (valid) {
                // alert('预约成功后请留意信息以及活动开始时间');
                if(this.username&&this.radios==='1'){
                    alert('您是管理员，不能预约！')
                }else if(this.username&&this.radios==='0'){
                    this.$confirm('预约成功后请留意信息以及活动开始时间。', '提醒', {
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
            let {status,data:{list}} = await self.$axios.post('/activity/volunteer', 
            {user_name:self.username,contestant:self.ruleForm.input1,phone:self.ruleForm.input2,email:self.ruleForm.input3,days:self.date1,times:self.date3})
            this.test=list.status
            if(this.test==0){
                this.$alert('预约成功', {
                confirmButtonText: '确定',
                type:'success'
                });
                this.ruleForm.input1='';
                this.ruleForm.input2='';
                this.ruleForm.input3='';
                this.ruleForm.date1='';
                this.ruleForm.date3='';

            }else{
                this.$alert('预约失败，您已预约', {
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
.volunteer{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.volunteer .volunteer_nav1,.volunteer .volunteer_nav{
    margin-left: 5%;
}
.volunteer .volunteer_nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.volunteer .volunteer_nav2{
    /* margin-right: 5%; */
    
}
.volunteer .volunteer_nav2 ul li{
    float: left;
    width: 27%;
    list-style: none;
}
.volunteer_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.volunteer_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.volunteer_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.volunteer_box2 .title{
    font-size: 22px;
    text-align: left;
    padding-left: 10%;
    font-weight: normal;
    line-height: 44px;
}
.volunteer_box2 div{
    margin-left: 10%;
    line-height: 50px;
}
.volunteer_box2 div .el-button{
    width: 90%;
    text-align: left;
}
.volunteer_box1 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.volunteer .volunteer_box1 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.information .el-input{
    float: inherit;
    text-align: left;
}
.volunteer_activity{
    width: 45%;
    height: auto;
    border: 1px solid #dad4d4; 
}
.volunteer_activity div{
    color: #666666;
    /* font-size: 3vh; */
    text-indent: 2em;
    /* width: 100%;
    height: 100%;; */
}
.volunteer_activity .el-button{
    margin-top: 10px;
    margin-left: 30%;
}
</style>