<template>
    <div class="mylibrary" v-if="this.radios==0">
        <account/>
        <div class="seven">
            <div class="nav">
                <ul>
                    <nuxt-link to="/"><li class="index1">首页</li></nuxt-link>
                    <li class="index2"><router-link :to="{path: '/announcement', query: { index2:1 }}" class="router"><div>图书公告</div></router-link>
                        <ul>
                            <router-link :to="{path: '/announcement', query: { index2:1 }}"><li>开馆时间</li></router-link>
                            <router-link :to="{path: '/announcement', query: { index2:2 }}"><li>图书馆公告</li></router-link>
                        </ul>
                    </li>
                    <li class="index3"><nuxt-link to="/retrieval" class="router"><div>图书检索</div></nuxt-link>
                        <ul>
                            <nuxt-link to="/retrieval"><li>书目检索</li></nuxt-link>
                            <nuxt-link to="/classification"><li>分类浏览</li></nuxt-link>
                            <nuxt-link to="/newbook"><li>新书推荐</li></nuxt-link>
                            <nuxt-link to="/popularbook"><li>热门推荐</li></nuxt-link>
                        </ul>  
                    </li>
                    <li class="index4"><router-link :to="{path: '/activity', query: { index4:1 }}" class="router"><div>图书活动</div></router-link>
                        <ul>
                            <router-link :to="{path: '/activity', query: { index4:1 }}"><li>主题活动</li></router-link>
                            <router-link :to="{path: '/activity', query: { index4:2 }}"><li>公益讲座</li></router-link>
                            <router-link :to="{path: '/activity', query: { index4:3 }}"><li>志愿活动</li></router-link>
                        </ul>
                    </li>
                    <li class="index5"><router-link :to="{path: '/survey', query: { index5:1 }}" class="router"><div>本馆概况</div></router-link>
                        <ul>
                            <router-link :to="{path: '/survey', query: { index5:1 }}"><li>本馆简介</li></router-link>
                            <router-link :to="{path: '/survey', query: { index5:2 }}"><li>馆藏分布</li></router-link>
                        </ul>
                    </li>
                    <nuxt-link to="/feedback"><li class="index6">意见反馈</li></nuxt-link>
                    <nuxt-link to="/mylibrary"><li class="index7">我的图书馆</li></nuxt-link>
                </ul>
            </div>
        </div>
        <div class="mylibrary-informat">
            <template>
                <div class="index7_5" style="overflow: hidden;">
                    <ul>
                        <li>
                            <div class="aboutme_position" :data="data1">
                                <i class="el-icon-add-location"></i>当前位置 > 我的图书馆 > 借书记录
                            </div>
                            <div class="about_index7_5" style="float:left">
                                <div class="listname5">
                                    <div >
                                        <nuxt-link to="/mylibrary"><el-button><i class="el-icon-arrow-right"></i> 我的首页</el-button></nuxt-link>
                                    </div>

                                    <div>
                                        <a href="/mylibrary_informat"><el-button><i class="el-icon-arrow-right"></i> 个人资料</el-button></a>
                                    </div>
                                    <div>
                                        <a href="/updatepassword"><el-button><i class="el-icon-arrow-right"></i> 修改密码</el-button></a>
                                    </div>
                                    <div>
                                        <a href="/borrowedbooks"><el-button><i class="el-icon-arrow-right"></i> 已借图书</el-button></a>
                                    </div>
                                    <div>
                                        <a href="/mybookshelf"><el-button><i class="el-icon-arrow-right"></i> 我的书架</el-button></a>
                                    </div>
                                    <div>
                                        <a href="borrowing"><el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 借书记录</el-button></a>
                                    </div>
                                </div>
                                <div class="listbook5">
                                    <el-table
                                        size="small"
                                        :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                        style="width: 100%"
                                        @row-click="getDetails">
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
                                        prop="book_auther"
                                        label="作者"
                                        width="auto">
                                        </el-table-column>
                                        <el-table-column
                                        prop="book_publisher"
                                        label="出版社">
                                        </el-table-column>
                                        <el-table-column
                                        prop="borrow_time"
                                        label="借阅日期"
                                        width="auto">
                                        </el-table-column>
                                        <el-table-column
                                        prop="actual_return_time"
                                        label="归还日期"
                                        width="auto">
                                        </el-table-column>
                                        
                                    </el-table>
                                </div>
                                <el-pagination
                                :hide-on-single-page="single"
                                small
                                style="float:right" 
                                layout="total, sizes, prev, pager, next, jumper"
                                :page-sizes="[5, 10, 20]"
                                :page-size="pagesize"
                                :total="tableData3.length"
                                @current-change="handleCurrentChange"
                                @size-change="handleSizeChange">
                                </el-pagination>

                            </div>
                        </li>
                    </ul>
                </div>
            </template>
            <br><br><br>
            <foot/>
           
        </div>

    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import account from '../components/account.vue'
import aboutme from '../components/mylibrary/aboutme.vue'
import foot from '../components/index/foot.vue'
export default {
    components: {
        account,
        aboutme,
        foot,
    },
    data(){
        return{
            currentPage: 1,
            pagesize:10,
            currpage:1,
            single:true,
            username:'',
            password:'',
            radios:'',
            tableData3: [],
            list:[],
        }
    },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/echarts.common.min.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        
        borrowing:async function(){
            if(this.radios==0){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/mylibrary/borrowing', 
                {user_account:self.username,tokens:self.password})
                if(list.status==0){
                    self.list=list.data
                }else{
                    console.log('ddd')
                    this.$alert( '服务器出错，请重新登录！' , {
                            confirmButtonText: '确定',
                            type: 'error'
                            });
                    location.href="/login"
                    document.cookie  = "username=;path=/";
                    document.cookie  = "token=;path=/";
                    document.cookie  = "radios=;path=/";  
                }
            }else{
                location.href="/login"
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
        this.borrowing();

    },
    created: function () {
        
    },
    computed:{
        data1(){
            this.tableData3=this.list
        } 
    }

}
</script>

<style>
.mylibrary{
    width:100%;
    min-width: 1200px;
    
}
ul li{
    list-style: none;
}
.seven{
    height: 60px;
    background: rgb(240, 240, 240);
}
.seven .nav{
    margin-left: 5%;
    position: relative;
    z-index: 3; 
}
.seven .nav li{
    float: left;
    width: 13.07%;
    text-align: center;
    list-style: none;
    line-height: 60px;
    color: black;
}
.seven .nav li:hover{
    background: rgba(255, 51, 0, 0.815);
}
.seven .nav:hover .index7{
    background:none;
}
.seven .nav .index7{
    background: rgba(255, 51, 0, 0.815);
}
.seven .nav .index7:hover{
    background: rgba(255, 51, 0, 0.815);
}
.index2 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index2 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index2:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;   
}
.index2:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index3 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index3 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index3:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index3:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index4 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index4 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index4:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index4:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index5 ul li{
    position: absolute;
    display: none;
    transition: opacity 2s ease-in;
}
.index5 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index5:hover ul li{
    position: relative;
    z-index: 3;
    display: block;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index5:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.mylibrary-informat{
    position: absolute;
    z-index: 1;
    width: 100%;
    overflow: hidden;
}
.router{
    text-decoration: none;
    color:black;
}
.aboutme_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}

/* index7_1 /index7_2*/
.index7_1, .index7_2{
    margin-left: 5%;
    min-width: 1200px;
}
.index7_1 .about_index7_1,.index7_2 .about_index7_1{
    border: 1px solid #dad4d4;
    width: 90%;
    background-color: white;
    padding: 3% 3%;
}
.about_index7_1 .listname{
    width: 20%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white; 
    float: left;
}
.about_index7_1 .listbook{
    width: 78%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white;
    float: right;
    margin-left: 2%;
    padding: 3%;
    color: #666666;
    font-size: 15px;
}
.about_index7_1 .listname .el-button{
    width: 100%;
    text-align: left;
}
.about_index7_1 .listbook .el-input{
    width: 30%;
}
.about_index7_1 .listbook div{
    line-height: 50px;
}
/* index7_3 /index7_4*/
.index7_3, .index7_4, .index7_5{
    margin-left: 5%;
    min-width: 1200px;
}
.index7_3 .about_index7_3,
.index7_4 .about_index7_4,
.index7_5 .about_index7_5{
    border: 1px solid #dad4d4;
    width: 91.3%;
    background-color: white;
    padding: 3% 3%;
}
.about_index7_3 .listname3,
.about_index7_4 .listname4,
.about_index7_5 .listname5{
    width: 20%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white; 
    float: left;
}
.about_index7_3 .listbook3,
.about_index7_4 .listbook4,
.about_index7_5 .listbook5{
    width: 78%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white;
    float: right;
    margin-left: 2%;
    padding: 0 3%;
    color: #666666;
}
.about_index7_3 .listname3 .el-button,
.about_index7_4 .listname4 .el-button,
.about_index7_5 .listname5 .el-button{
    width: 100%;
    text-align: left;
}


</style>