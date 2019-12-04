<template>
    <div class="borrow">
        
        <div class="borrow_nav">
            <ul>
                <li>
                    <div class="borrow_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 借书
                    </div>
                    <div class="about">
                        <div class="borrow-name">
                            <el-input v-model="input1" size="small" clearable style="width:50%" placeholder="请输入借书人用户名"></el-input>
                            <el-button type="primary" size="small" @click="borrowuser()">搜索</el-button>
                            <br><br>
                            <el-table
                            size="small"
                            empty-text="没有此用户！" 
                            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                            style="width: 100%;border:1px solid #dad4d4">
                            <el-table-column
                            prop="user_account"
                            label="用户名"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_email"
                            label="邮箱"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            prop="user_registration_time"
                            label="注册时间"
                            width="auto">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">选择</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        small
                        :hide-on-single-page="value"
                        style="float:right;font-size:10px" 
                        background 
                        layout="total, sizes, prev, pager, next, jumper"
                        :page-sizes="[5, 10, 20]"
                        :page-size="pagesize"
                        :total="tableData.length"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange">
                        </el-pagination>
                        <br><br>
                        </div>
                        <div class="borrow-book">
                            <el-input v-model="input2" size="small" style="width:50%;padding-left: 5%;" placeholder="请输入书名"></el-input>
                            <el-button type="primary" size="small" @click="querybook()">搜索</el-button>
                            <br><br>
                            <section class="aui-flexView">
                                <div class="aui-list-theme-box">
                                    <a href="javascript:;" class="aui-list-item" v-for="(items,idx) in data.slice((currentPage1-1)*pagesize1,currentPage1*pagesize1)" :key="idx">
                                        <div class="aui-list-theme-img">
                                            <img :src="items.book_img_path" alt="" @click="getDetails(idx,items)">
                                        </div>
                                        <div class="aui-list-theme-message">
                                            <h3 class="aui-list-theme-title"  @click="getDetails(idx,items)">{{items.book_name}}</h3>
                                            <!-- <p>{{items.author}}</p> -->
                                            <el-popover
                                                style="background-color: #b5b5b5"
                                                placement="top-start"
                                                width="auto"
                                                trigger="hover"
                                                :content="'id:'+items.book_id+' '+'书名:'+items.book_name">
                                                <el-button slot="reference" type="primary" size="mini" @click="borrow(idx,items)">借阅</el-button>
                                            </el-popover>
                                            <!-- <p>甄嬛传甄嬛传</p> -->
                                            <!-- <el-button type="primary" size="mini" @click="borrow(idx)">借阅</el-button> -->
                                            
                                        </div>
                                    </a>
                                </div>
                                <div style="overflow: hidden;">
                                    <el-pagination
                                        :hide-on-single-page="value1"
                                        :pager-count="7"
                                        style="float:right;margin-right:2%;" 
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :page-sizes="[8, 12, 16]"
                                        :page-size="pagesize1"
                                        :total="data.length"
                                        @current-change="handleCurrentChange1"
                                        @size-change="handleSizeChange1"
                                        small>
                                    </el-pagination>
                                </div>
                            </section>
                            <!-- {{tableData}}{{data}} -->
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
            tableData:[],
            currentPage: 1,
            pagesize:5,
            currpage:1,
            value:true,
            data:[
            // {img:'images/book-010.png',name:'天才小农神',author:'嘉桦'},
            // {img:'images/book-011.png',name:'天才小农神',author:'嘉桦'},
            // {img:'images/book-012.png',name:'天才小农神',author:'嘉桦'},
            // {img:'images/book-013.png',name:'天才小农神',author:'嘉桦'},
            // {img:'images/book-013.png',name:'天才小农神',author:'嘉桦'}
            ],
            number:'',
            searchresult:[],
            currentPage1: 1,
            pagesize1:8,
            currpage1:1,
            value1:true,
        }
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
            this.input1=row.user_account;
        },
        async borrow(idx,items){
            if(this.input1){
                this.$confirm('“'+this.input1+'”'+" " +'借阅'+" " +'“'+this.data[idx].book_name+'”', '请确认以下信息', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    }).then(() => {
                        this.state(idx,items);
                    }).catch(() => {
                          console.log('xx',this.state)
                    });  
            }else{
                this.$alert('请选择借书用户', {
                    confirmButtonText: '确定',
                    type:'info'
                    });
            }
        },
        state:async function(idx,items){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/borrow/borrowbooks', 
            {book_id:items.book_id,user_name:self.input1})
            console.log(items.book_name)
            this.number=list.status
            if(this.number===0){
                this.$alert('借书成功', {
                confirmButtonText: '确定',
                type:'success'
                });
                this.number=''
                let {status,data:{list}} = await self.$axios.post('/borrow/querybook')
                self.data= list.data
                // location.href="/borrowbooks"
            }else{
                this.$alert('该用户借书数量已经达到7本，借书失败！', {
                confirmButtonText: '确定',
                type:'error'
                });
            }
           
        },
        querybook:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/borrow/querybook',
                {book_name:self.input2})
                console.log(status,list)
                self.data= list.data
        },
        borrowuser:async function(){
            if(this.input1){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/borrow/borrowuser',
                {user_name:self.input1})
                console.log(status,list)
                self.tableData= list.data
            }else{
                alert('请输入查询条件!');
            }
        },
        getDetails:async function(idx,items){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/detailedcontent/search',
            {book_id:items.book_id})
            console.log(status,list)
            self.searchresult=list.data
            var searchmessage = JSON.stringify(self.searchresult);
            sessionStorage.setItem("searchresult", searchmessage); 
            location.href='/detailedcontent';
        },
        handleSizeChange:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
        },
        handleSizeChange1:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize1=size;
        },
        handleCurrentChange1:function(currentPage1) {
        // console.log(`当前页: ${val}`);
            this.currentPage1=currentPage1;
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
.borrow{
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
.borrow .borrow_nav{
    margin-left: 5%;
    overflow: hidden;
}
.borrow .borrow_nav1{
    margin-left: 30%;
}
.borrow .borrow_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.borrow_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.borrow_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.borrow_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.borrow .borrow_box1 .information{
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
.borrow_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
    overflow: hidden;
}
.borrow_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}
.borrow-name{
    width: 50%;
    float: left;
    border-right: 1px solid #dad4d4;
    height: auto;
    overflow: hidden;
    padding-right: 3%;
}
.borrow-book{
    width: 50%;
    float: right;
    /* border: 1px solid #dad4d4; */
    overflow: hidden;
    /* padding-left: 3%; */
}
.borrow-book .aui-list-theme-box a {
    text-decoration: none;
    color: #000;
}
.borrow-book .aui-list-theme-box {
    padding: 0 0 0 1.8rem;
    overflow: hidden;
    position: relative;
    margin-left: 0;
}
.borrow-book .aui-list-item {
    width: 21%;
    float: left;
    margin: 0 4% 2% 0%;
    background: #fff;
    display: block;
    overflow: hidden;
}
.borrow-book .aui-list-theme-img {
    height: auto;
    width: 100%;
    position: relative;
}
.borrow-book .aui-list-theme-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}
.borrow-book .aui-list-theme-img span {
    position: absolute;
    left: 0;
    top: 0;
    background: #ff6d6d;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0 0 5px 0;
    padding: 0.2rem 0.8rem;
}
.aui-list-theme-message {
    background: #fff;
    padding: 0.3rem 0;
}
.borrow-book .aui-list-theme-title {
    color: #333;
    /* font-size: 0.85rem; */
    font-size: 15px;
    margin: 0.1rem 0;
    /* 字体省略 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-weight: normal;
    text-overflow: ellipsis;
}
.borrow-book .aui-list-theme-message p{
    color: #b5b5b5;
    font-size: 0.8rem;
}
</style>