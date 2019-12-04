<template>
    <div class="collectionbooks">
        
        <div class="collectionbooks_nav">
            <ul>
                <li>
                    <div class="collectionbooks_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 馆藏书籍
                    </div>
                    <div class="about">
                        <!-- <el-input v-model="input" size="medium" placeholder="请输入搜索条件" clearable style="width:40%;">
                            <el-select style="width: 75px;" v-model="select" slot="prepend" size="small">
                                <el-option label="书名" value="书名" ></el-option>
                                <el-option label="编号" value="书籍编号" ></el-option>
                            </el-select>
                        </el-input> -->
                        <div style="color:#333;font-size:15px;">
                        书籍编号：<el-input v-model="input1" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                        书名：<el-input v-model="input2" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                        出版社：<el-input v-model="input3" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                        馆藏地：<el-input v-model="input4" clearable size="medium" placeholder="请输入搜索条件" style="width:15%;"></el-input>&nbsp;&nbsp;
                        </div>
                        <div style="color:#333;font-size:15px;margin-top:10px;">
                        图书状态：<el-select v-model="input5" size="medium" placeholder="请选择" style="width:15%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                        </el-select>&nbsp;&nbsp;
                        <el-button type="primary" size="medium" @click="searchbook()">搜索</el-button>
                        </div>
                        <br><br>
                        <el-table
                        size="small"
                        empty-text="很遗憾，没有找到你想要的书籍！" 
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
                            prop="book_room"
                            label="馆藏地"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_state"
                            label="图书状态"
                            width="auto">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
                        :total="tableData.length"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange">
                        </el-pagination>
                        <div class="dialog">
                            <el-dialog
                            :modal-append-to-body="false"
                            :visible.sync="dialogVisible"
                            width="60%"
                            hieght="auto"
                            title="修改图书信息"
                            >
                            <span style="line-height:25px;font-size:15px;">
                                <div style="overflow: hidden;">
                                    <div style="width:50%;float:left;padding-right:3%;border-right:1px solid #dad4d4;">
                                        <div>书籍编号：
                                            <el-input v-model="messege1" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div style="line-height:50px;">条&nbsp;&nbsp;码&nbsp;号：
                                            <el-input v-model="messege2" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div >书&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：
                                            <el-input v-model="messege3" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div style="line-height:50px;">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：
                                            <el-input v-model="messege4" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div >出&nbsp;&nbsp;版&nbsp;社：
                                            <el-input v-model="messege5" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div style="line-height:50px;">图书简介：
                                            <el-input
                                            type="textarea"
                                            :rows="5"
                                            placeholder="请输入内容"
                                            v-model="messege6">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div style="width:50%;float:left;padding-left:3%;">
                                        <div>类&nbsp;&nbsp;型&nbsp;一：
                                            <el-select v-model="messege7" placeholder="请选择"  size="medium" style="width:50%;">
                                                <el-option
                                                v-for="item in options1"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <!-- <el-input v-model="messege7" clearable size="medium" style="width:50%;"></el-input> -->
                                        </div>
                                        <div style="line-height:50px;">类&nbsp;&nbsp;型&nbsp;二：
                                            <el-select v-model="messege8" placeholder="请选择"  size="medium" style="width:50%;">
                                                <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <!-- <el-input v-model="messege8" clearable size="medium" style="width:50%;"></el-input> -->
                                        </div>
                                        <div >藏&nbsp;&nbsp;书&nbsp;室：
                                            <el-input v-model="messege9" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div style="line-height:50px;">书&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;架：
                                            <el-input v-model="messege10" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div >出版时间：
                                            <el-input v-model="messege11" clearable size="medium" style="width:50%;"></el-input>
                                        </div>
                                        <div style="line-height:50px;">文献类型：
                                            <el-select v-model="messege12" placeholder="请选择"  size="medium" style="width:50%;">
                                                <el-option
                                                v-for="item in options3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <!-- <el-input v-model="messege12" clearable size="medium" style="width:50%;"></el-input> -->
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                                <el-button type="primary"  size="small" @click="modifybook()">修 改</el-button>
                            </span>
                            </el-dialog>
                        </div> 
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
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            tableData:[],
            currentPage: 1,
            pagesize:10,
            currpage:1,
            single:true,
            dialogVisible:false,
            options: [{
            value: '在馆',
            label: '在馆'
            }, {
            value: '已借出',
            label: '已借出'
            },],
            messege1:'',
            messege2:'',
            messege3:'',
            messege4:'',
            messege5:'',
            messege6:'',
            messege7:'',
            options1: [{
            value: '文学',
            label: '文学'
            }, {
            value: '流行',
            label: '流行'
            },{
            value: '文化',
            label: '文化'
            }, {
            value: '生活',
            label: '生活'
            },{
            value: '科技',
            label: '科技'
            },],
            messege8:'',
            options2: [{
            value: '小说',
            label: '小说'
            }, {
            value: '散文',
            label: '散文'
            },{
            value: '诗歌',
            label: '诗歌'
            }, {
            value: '武侠',
            label: '武侠'
            },{
            value: '传记',
            label: '传记'
            }, {
            value: '励志',
            label: '励志'
            },{
            value: '编程',
            label: '编程'
            }, {
            value: '音乐',
            label: '音乐'
            },],
            messege9:'',
            messege10:'',
            messege11:'',
            messege12:'',
            options3: [{
            value: '中文图书',
            label: '中文图书'
            }, {
            value: '西文图书',
            label: '西文图书'
            },],
        }
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible=true;
            this.messege1=row.book_id;
            this.messege2=row.book_code;
            this.messege3=row.book_name;
            this.messege4=row.book_auther;
            this.messege5=row.book_publisher;
            this.messege6=row.book_synopsis;
            this.messege7=row.category1;
            this.messege8=row.category2;
            this.messege9=row.book_room;
            this.messege10=row.book_bookshelf;
            this.messege11=row.book_publication_date;
            this.messege12=row.book_language;
        },
        modifybook:async function(){
            this.$confirm('点击“确定”修改', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(() => {
                    this.modify();
                    
                }).catch(() => {
                        console.log('xx',this.state)
                });

        },
        modify:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/collection/modifybook',
            {book_id:self.messege1,book_code:self.messege2,book_name:self.messege3,book_auther:self.messege4,book_publisher:self.messege5,book_synopsis:self.messege6,
            category1:self.messege7,category2:self.messege8,book_room:self.messege9,book_bookshelf:self.messege10,book_publication_date:self.messege11,book_language:self.messege12})
            console.log(status,list)
            if(list.status==0){
                this.$alert('修改成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                    this.dialogVisible=false;
                    let {status,data:{list}} = await self.$axios.post('/collection/booklist')
                    self.tableData=list.data
            }
            // location.href="/collection"
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.$confirm('“'+row.book_name+'”'+'目前处于'+'“'+row.book_state+'”'+'状态，'+' '+'是否要删除此书！', '请确认以下信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(() => {
                    this.state(row);
                    
                }).catch(() => {
                        console.log('xx',this.state)
                });
            
        },
        state:async function(row){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/collection/userdelete',
            {book_id:row.book_id})
            console.log(status,list)
            if(list.status==0){
                this.$alert('删除成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                    let {status,data:{list}} = await self.$axios.post('/collection/booklist')
                    self.tableData=list.data

            }
            // location.href="/collection"'/collection/booklist'
        },
        searchbook:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/collection/searchbook',
            {book_id:self.input1,book_name:self.input2,book_publisher:self.input3,book_room:self.input4,book_state:self.input5})
            console.log(status,list)
            self.tableData= list.data
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
            this.tableData=this.listb
        } 
    }
}
</script>

<style>
.collectionbooks{
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
.collectionbooks .collectionbooks_nav{
    margin-left: 5%;
    overflow: hidden;
}
.collectionbooks .collectionbooks_nav1{
    margin-left: 30%;
}
.collectionbooks .collectionbooks_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.collectionbooks_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.collectionbooks_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.collectionbooks_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.collectionbooks .collectionbooks_box1 .information{
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
.collectionbooks_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
}
.collectionbooks_nav .about .name div{
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