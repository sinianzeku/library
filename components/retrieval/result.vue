<template>
    <div class="result">
        <div class="result_nav">
            <ul>
                <li>
                    <div class="result_position">
                        <i class="el-icon-add-location"></i>当前位置 > 书目检索 > 检索结果
                    </div>
                </li>
            </ul>
        </div>
        <div class="result_nav1">
            <ul>
                <li>
                    <div class="result_box1">
                        
                        <el-input v-model="input" size="small" placeholder="请输入关键字" clearable style="width:30%;">
                            <el-select style="width: 75px;" v-model="select" slot="prepend" size="small">
                                <el-option label="书名" value="书名" ></el-option>
                                <el-option label="作者" value="作者" ></el-option>
                            </el-select>
                        </el-input>
                        <el-button type="primary" size="small" @click="query()">搜索</el-button>
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="result_nav2">
            <ul>
                <li style="width:91.3%;">
                    <div class="result_box2">
                        <el-table
                            :data="result.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                            style="width: 100%;cursor: pointer;"
                            empty-text="没有数据，换个关键字试试！"
                            size="small"
                            @row-click="getDetails">
                            <el-table-column
                            prop="id"
                            type="index"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop="book_name"
                            label="书名"
                            width="auto"
                            style="cursor: pointer;">
                            </el-table-column>
                            <el-table-column
                            prop="book_auther"
                            label="作者"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_publisher"
                            label="出版社"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_id"
                            label="书籍编号"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_language"
                            label="文献类型"
                            width="auto">
                            </el-table-column>
                        </el-table>     
                    </div>
                    <el-pagination
                    style="float:right;"
                    background 
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-sizes="[5, 10, 20]"
                    :page-size="pagesize"
                    :total="result.length"
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange">
                    </el-pagination>
                </li>
            </ul>
            <!-- {{list}} -->
            <br><br><br>
        </div>
        
        <foot/>
    </div>
</template>

<script>
import foot from '../index/foot.vue'
import { async } from 'q';
export default {
    components: {
        foot,
    },
    data(){
        return{
            input:'',
            select:'书名',
            currentPage: 1,
            pagesize:10,
            currpage:1,
            result:[],
            list:[],
            searchresult:[],
            result1:[],
            
        }
    },
       
    methods:{
        query:async function(){
            if(this.input){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.input,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search'           
            }else{
                alert('请输入查询条件!');
            }
        },
        getDetails:async function(row){
            console.log(row)//此时就能拿到整行的信息
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/detailedcontent/search',
            {book_id:row.book_id})
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
    },
    mounted:function(){
        //  this.items.name= localStorage.getItem("name");   
        this.result=JSON.parse(sessionStorage.getItem("queryresultskey"));
        this.result1=JSON.parse(sessionStorage.getItem("searchresult"));
     }
}
</script>

<style>
.result{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
    /* min-height: 700px; */
    /* overflow: hidden; */
}
ul li{
    list-style: none;
}
.result .result_nav2,.result .result_nav1,.result .result_nav{
    margin-left: 5%;
}
.result_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.result_box1{
    width: 90%;
    /* border: 1px solid #dad4d4; */
    height: auto;
    /* background-color: white; */
}
.result_nav2 ul li{
    /* width: 90%; */
    height: auto;
    border: 1px solid #dad4d4; 
    background-color: white;
}
.result_box2{
    width: 100%;
}
/* .el-select {
    width: 75px;
} */
</style>