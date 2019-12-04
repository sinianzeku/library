<template>
    <div class="lend">
        
        <div class="lend_nav">
            <ul>
                <li>
                    <div class="lend_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 借出书籍
                    </div>
                    <div class="about">
                        <!-- <el-input v-model="input" size="medium" placeholder="请输入搜索条件" clearable style="width:40%;">
                            <el-select style="width: 75px;" v-model="select" slot="prepend" size="small">
                                <el-option label="书名" value="书名" ></el-option>
                                <el-option label="编号" value="书籍编号" ></el-option>
                            </el-select>
                        </el-input> -->
                        <div style="color:#666;font-size:15px;">
                            书籍编号：<el-input v-model="input1" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                            书名：<el-input v-model="input2" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                            出版社：<el-input v-model="input3" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                            借书人：<el-input v-model="input4" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                            </div>
                            <div style="color:#666;font-size:15px;margin-top:10px;">
                            借书时间范围：
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>
                            至
                            <el-date-picker
                            v-model="value2"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>&nbsp;&nbsp;

                            <el-button type="primary" size="medium" @click="searchlendbook()">搜索</el-button>
                        </div>
                        <br><br>
                        <el-table
                        size="small"
                        empty-text="暂时没有借出记录！"
                        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        style="width: 100%;border:1px solid #dad4d4">
                            <el-table-column
                            prop="book_id"
                            label="书籍编号"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_name"
                            label="书名"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_publisher"
                            label="出版社"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="borrow_time"
                            label="借出时间"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="return_time"
                            label="应还时间"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_account"
                            label="借阅人"
                            width="auto">
                            </el-table-column>
                            
                        </el-table>
                        <el-pagination
                        :hide-on-single-page="single"
                        small
                        style="float:right" 
                        layout="total, sizes, prev, pager, next, jumper"
                        :page-sizes="[5, 10, 20]"
                        :page-size="pagesize"
                        :total="tableData.length"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange">
                        </el-pagination>
                        <br> 
                 
                    </div>
                </li>
            </ul>
        </div>
        
        <br>
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
import { async } from 'q';
export default {
    components: {
        foot,
    },
    props:['listb'],
    data(){
        return{
            username: '',
            password: '',
            radios:'',
            tableData:[],
            currentPage: 1,
            pagesize:10,
            currpage:1,
            single:true,
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            value1:'',
            value2:'',

        }
    },
    methods:{
        searchlendbook:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/lentout/searclendbook', 
            {book_id:self.input1,book_name:self.input2,book_publisher:self.input3,borrow_time_satrt:self.value1,borrow_time_end:self.value2,user_name:self.input4})
            self.tableData=list.data
        },
        handleSizeChange:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
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
        //  this.items.name=localStorage.getItem("name");
        this.getCookie();
    },
    computed:{
        data1(){
            this.tableData=this.listb
        }
    }

}
</script>

<style>
.lend{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
    overflow: hidden;
}
ul li{
    list-style: none;
}
.lend .lend_nav{
    margin-left: 5%;
    overflow: hidden;
}
.lend .lend_nav1{
    margin-left: 30%;
}
.lend .lend_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.lend_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.lend_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.lend_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.lend .lend_box1 .information{
    padding: 0 10%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
    width: 100%;
}
.information .form{
    line-height: 50px;
}
.information .form .el-input{
    width: 75%;
    margin-left: 2%;
}
/* .information .form .el-button{
    float: right;
} */
.lend_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
}
.lend_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}
.administrator-operation{
    /* border: 1px solid #dad4d4; */
    width: 100%;
}
.administrator-operation .el-button{
    width: 23%;
    margin-left: 2%;
    height: 120px;
    font-size: 18px;
}
.administrator-data{
    /* border: 1px solid #dad4d4; */
    position: relative;
    overflow: hidden;
    margin: 0;
    font-size: 14px;
    color: #666666;
}
.administrator-information{
    margin-left:0;
    overflow: hidden;
    padding: 20px 2%;
}
.administrator-echarts{
    float:right;
    overflow: hidden;
    margin-right:0.5%;

}
.administrator-information-left{
    width: 30%;
    border-right:1px solid #dad4d4;
    height: 210px;
    overflow: hidden;
    float: left;
    padding-right: 4%;
}
.administrator-portrait{
    border:1px solid #dad4d4;
    height: 105px;
    border-radius: 50%;
    /* padding:0 4%; */
}
.administrator-information-right{
    width: 70%;
    height: 210px;
    overflow: hidden;
    padding-left:4%;
    
}
</style>