<template>
    <div class="message">
        <div class="message_nav">
            <ul>
                <li>
                    <div class="message_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 意见反馈
                    </div>
                </li>
            </ul>
        </div>
        <div class="message_nav1">
            <ul>
                <li>
                    <div class="message_box1">
                            <h3>意见反馈</h3>
                            <div class="information">
                                <hr><br>
                                <el-input
                                type="textarea"
                                :rows="10"
                                placeholder="请输入内容"
                                v-model="textarea">
                                </el-input>
                                <div style="margin-top: 15px;margin-bottom: 15px;">
                                    <el-input placeholder="姓名" v-model="input1">
                                        <template slot="prepend">读者姓名</template>
                                    </el-input>
                                    <el-input placeholder="联系方式" v-model="input2">
                                        <template slot="prepend">联系方式</template>
                                    </el-input>
                                </div>
                                <el-button type="primary" size="medium" style="float:right" :plain="true" @click="feedback()">提交</el-button>
                                <br><br><br>
                            </div> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="message_nav2">
            <ul>
                <li>
                    <div class="message_box2">
                        <h3 class="title">意见反馈</h3>
                        <div class="messegelist" v-for="(item,idx) in data" :key="idx">
                            <div style="border: 0.5px dashed #dad4d4;margin-top:6px;margin-bottom:6px;"></div>
                            <div>
                                提交时间：{{item.time}}
                                <el-button type="primary" plain size="mini" style="float:right" @click="seemessege(idx)">查 看</el-button>
                            </div>
                        </div>
                        <br>
                    </div>
                    <br>
                    <notice/>
                    <br>
                </li>
            </ul>
        </div>
        <el-dialog
            :modal-append-to-body="false"
            :visible.sync="dialogVisible"
            width="40%"
            title="信息反馈"
            >
            <span style="line-height:25px;font-size:15px;">
                <div style="margin-top:-20px">提交时间：{{text1}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    信息状态：<span style="color:blue">{{text2}}</span></div>
                <div style="text-indent:2em">{{text3}}</div>
            </span>
            <span slot="footer" class="dialog-footer">
                <div style="font-size:14px;color:#666;float:left">*注：信息保存时间为一个月</div>
                <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
            </span>
            </el-dialog> 
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
import notice from '../index/notice.vue'
// import axios from 'axios'
export default {
    components: {
        foot,
        notice,
    },
    props:['list'],
    data(){
        return{
            textarea:'',
            input1:'',
            input2:'',
            message1:'',
            data:[],
            dialogVisible:false,
            username:'',
            password:'',
            radios:'',
            text1:'',
            text2:'',
            text3:'',
        }
    },
       
    methods:{
        seemessege(idx){
            this.dialogVisible=true
            this.text1=this.data[idx].time
            this.text2=this.data[idx].state
            this.text3=this.data[idx].feedbacks
        },
        feedback(){
            if(this.textarea==''){
                this.$message('对不起，请输入内容！');
            }
            else if(this.input1==''){
                this.$message('对不起，请输入姓名！');
            }
            else if(this.input2==''){
                this.$message('对不起，请输入联系方式！');
            }
            else{
            if(this.username&&this.radios==='1'){
                    alert('您是管理员，不能进行信息反馈！')
                }else if(this.username&&this.radios==='0'){
                    this.$confirm('点击 “确定” 提交', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    }).then(() => {
                        this.state();

                    }).catch(() => {
                            console.log('xx',this.state)
                    });
                }else{
                    this.$alert('请先进行登录', {
                    confirmButtonText: '确定',
                    type:'error'
                    });
                }
            }     
        },
        state:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/feedback/message', 
            {user_name:self.username,feedbacks:self.textarea,reader:self.input1,phone:self.input2})
            if(list.status==0){
                this.$alert('提交成功', {
                confirmButtonText: '确定',
                type:'success'
                });
                let {status,data:{list}} = await self.$axios.post('/feedback/getfeedback', 
                {user_name:self.username})
                self.data=list.data
            }
            
            // location.href="/feedback"
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
    computed:{
        data1(){
            this.data=this.list
        } 
    }
}
</script>

<style>
.message{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.message .message_nav1,.message .message_nav{
    margin-left: 5%;
}
.message .message_nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.message .message_nav2{
    /* margin-right: 5%; */
    
}
.message .message_nav2 ul li{
    float: left;
    width: 27%;
    list-style: none;
}
.message_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.message_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.message_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
    padding: 0 10%;
}
.message_box2 .title{
    font-size: 22px;
    text-align: left;
    font-weight: normal;
    line-height: 44px;
}
.message_box2 div{
    /* margin-left: 10%; */
    line-height: 30px;
}
/* .message_box2 div .el-button{
    width: 90%;
    text-align: left;
} */
.message_box1 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.message .message_box1 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.information .el-input{
    float: inherit;
    width: 49%;
    text-align: left;
}
.messegelist{
    color: #666666;
    font-size: 15px;
}
.messegelist:hover{
    color:cornflowerblue;
    cursor: pointer;
}
</style>