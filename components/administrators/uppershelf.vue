<template>
    <div class="uppershelf">
        
        <div class="uppershelf_nav">
            <ul>
                <li>
                    <div class="uppershelf_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 收件箱
                    </div>
                    <div class="about">
                        <el-tabs :tab-position="tabPosition" type="border-card" >
                            <el-tab-pane label="未处理">
                                <el-input style="width:40%;" size="medium" v-model="input1" placeholder="请输入要搜索的用户名" clearable></el-input>
                                <el-button type="primary" size="medium" @click="searchmessage1()">搜索</el-button>
                                <br><br>
                                <el-table
                                size="small"
                                empty-text="暂时没有需要处理的信件！"
                                :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                style="width: 100%;border:1px solid #dad4d4">
                                    <el-table-column
                                    prop="user_account"
                                    label="用户名"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column
                                    prop="readers"
                                    label="读者姓名"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column
                                    prop="time"
                                    label="发件时间"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template slot-scope="scope">
                                            <el-button
                                            size="mini"
                                            @click="handleEdit1(scope.$index, scope.row)">查看</el-button>
                                            <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination
                                :hide-on-single-page="single"
                                small
                                style="float:right" 
                                layout="total, sizes, prev, pager, next, jumper"
                                :page-sizes="[5, 10, 20]"
                                :page-size="pagesize"
                                :total="tableData1.length"
                                @current-change="handleCurrentChange"
                                @size-change="handleSizeChange">
                                </el-pagination>
                                <br><br>
                                <el-dialog
                                :modal-append-to-body="false"
                                :visible.sync="dialogVisible1"
                                width="40%"
                                title="未处理信息"
                                >
                                <span style="line-height:25px;font-size:15px;">
                                    <div style="margin-top:-20px">用户名：{{messenge1}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        时间：{{messenge2}}</div>
                                    <div style="text-indent:2em">{{messenge3}}</div>
                                </span>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible1 = false" size="small">取 消</el-button>
                                    <el-button type="primary" @click="handle()" size="small">处 理</el-button>
                                </span>
                                </el-dialog>
                           
                            </el-tab-pane>
                            <el-tab-pane label="已处理">
                                <el-input style="width:40%;" size="medium" v-model="input2" placeholder="请输入搜索条件" clearable></el-input>
                                <el-button type="primary" size="medium" @click="searchmessage2()">搜索</el-button>
                                <br><br>
                                <el-table
                                size="small"
                                empty-text="暂时没有已处理的信件！"
                                :data="tableData2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                style="width: 100%;border:1px solid #dad4d4">
                                    <el-table-column
                                    prop="user_account"
                                    label="用户名"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column
                                    prop="readers"
                                    label="读者姓名"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column
                                    prop="time"
                                    label="发件时间"
                                    width="auto">
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template slot-scope="scope">
                                            <el-button
                                            size="mini"
                                            @click="handleEdit2(scope.$index, scope.row)">查看</el-button>
                                            <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination
                                :hide-on-single-page="single"
                                small
                                style="float:right" 
                                layout="total, sizes, prev, pager, next, jumper"
                                :page-sizes="[5, 10, 20]"
                                :page-size="pagesize"
                                :total="tableData2.length"
                                @current-change="handleCurrentChange"
                                @size-change="handleSizeChange">
                                </el-pagination>
                                <br><br>
                                <el-dialog
                                :modal-append-to-body="false"
                                :visible.sync="dialogVisible2"
                                width="40%"
                                title="已处理信息"
                                >
                                <span style="line-height:25px;font-size:15px;">
                                    <div style="margin-top:-20px">用户名：{{messenge4}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        时间：{{messenge5}}</div>
                                    <div style="text-indent:2em">{{messenge6}} </div>
                                </span>
                                <span slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="dialogVisible2 = false" size="small">确 定</el-button>
                                </span>
                                </el-dialog>  

                            </el-tab-pane>   
                        </el-tabs>
                                    
                 
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
            state:'',
            checked: '',
            username: '',
            password: '',
            radios:'',
            error: '',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            username:'',
            userPwd:'',
            input1:'',
            input2:'',
            tableData1:[],
            tableData2:[],
            currentPage: 1,
            pagesize:10,
            currpage:1,
            single:true,
            tabPosition: 'top',
            dialogVisible1: false,
            messenge1:'',
            messenge2:'',
            messenge3:'',
            id1:'',
            dialogVisible2: false,
            messenge4:'',
            messenge5:'',
            messenge6:'',
            id2:'',
        }
    },
    methods:{
        handleEdit1(index, row) {
            console.log(index, row);
            this.dialogVisible1=true;
            this.messenge1=row.user_account;
            this.messenge2=row.time;
            this.messenge3=row.feedbacks;
            this.id1=row.id;
        },
        searchmessage1:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbookshelves/searchmessage1',
            {input:self.input1})
            console.log(status,list)
            self.tableData1= list.data
        },
        handleDelete1:async function(index, row) {
            console.log(index, row);
            this.$confirm('确定删除此信息？', '请确认以下信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(() => {
                    this.state1(row);
                    
                    
                    // location.href="/newbookshelves"/newbookshelves/messagelist'
                }).catch(() => {
                        console.log('xx',this.state)
                });  
        },
        state1:async function(row){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbookshelves/delete',
            {id:row.id})
            console.log(status,list)
            if(list.status==0){
                this.$alert('删除成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                let {status,data:{list}} = await self.$axios.post('/newbookshelves/messagelist',)
                self.tableData1=list.data.untreated;
                self.tableData2=list.data.processed
            }
            
                // let {status1,data:{list1}} = await self.$axios.post('/newbookshelves/messagelist',)
                // self.tableData1=list1.untreated;
                // self.tableData2=list1.processed
                // location.href="/newbookshelves"
        },
        handleEdit2(index, row) {
            console.log(index, row);
            this.dialogVisible2=true;
            this.messenge4=row.user_account;
            this.messenge5=row.time;
            this.messenge6=row.feedbacks;
            this.id2=row.id;
        },
        searchmessage2:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbookshelves/searchmessage2',
            {input:self.input1})
            console.log(status,list)
            self.tableData2= list.data
        },
        handleDelete2(index, row) {
            console.log(index, row);
            this.$confirm('确定删除此信息？', '请确认以下信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(() => {
                    this.state2(row);
                    
                    // location.href="/newbookshelves"
                }).catch(() => {
                        console.log('xx',this.state)
                });
        },
        state2:async function(row){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbookshelves/delete',
            {id:row.id})
            console.log(status,list)
            if(list.status==0){
                this.$alert('删除成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                let {status,data:{list}} = await self.$axios.post('/newbookshelves/messagelist',)
                self.tableData1=list.data.untreated;
                self.tableData2=list.data.processed
            }
        },
        handle:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbookshelves/handle',
            {id:self.id1})
            this.dialogVisible1=false;
            if(list.status==0){
                this.$alert('处理成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                let {status,data:{list}} = await self.$axios.post('/newbookshelves/messagelist',)
                self.tableData1=list.data.untreated;
                self.tableData2=list.data.processed
            }
            
            // location.href="/newbookshelves"
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
        this.getCookie();
    },
    computed:{
        data1(){
            this.tableData1=this.listb.untreated;
            this.tableData2=this.listb.processed
        }
    }

}
</script>

<style>
.uppershelf{
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
.uppershelf .uppershelf_nav{
    margin-left: 5%;
    overflow: hidden;
}
.uppershelf .uppershelf_nav1{
    margin-left: 30%;
}
.uppershelf .uppershelf_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.uppershelf_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.uppershelf_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.uppershelf_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.uppershelf .uppershelf_box1 .information{
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
.uppershelf_nav .about{
    /* border: 1px solid #dad4d4; */
    width: 91.3%;
    height: auto;
    background-color: white;
    /* padding: 3% 3%; */
    overflow: hidden;
    /* position: relative;
    z-index: 6; */
}
.uppershelf_nav .about .name div{
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