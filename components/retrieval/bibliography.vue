<template>
    <div class="bibliography" >
        <!-- 开馆时间 -->
        <div style=" overflow: hidden;width:100%">
            <div class="bibliography_nav">
                <ul>
                    <li>
                        <div class="bibliography_position" :data="data5">
                            <i class="el-icon-add-location"></i>当前位置 > 图书检索 > 书目检索
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bibliography_nav1">
                <ul>
                    <li>
                        <div class="bibliography_box1">
                            <div class="bibliography-left">
                                <div class="bibliography-header">
                                    <a href="#" style="color:#CD3339;"><span><b>书目浏览</b></span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="/classification"><span>分类浏览</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="newbook"><span>新书推荐</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="popularbook"><span>热门推荐</span></a>
                                </div>

                                <el-input v-model="input" placeholder="请输入关键字" clearable style="width:70%;margin-top:30px;">
                                    <el-select style="width: 75px;" v-model="select" slot="prepend" size="small">
                                        <el-option label="书名" value="书名" ></el-option>
                                        <el-option label="作者" value="作者" ></el-option>
                                    </el-select>
                                </el-input>
                                <el-button type="primary" @click="query()">搜索</el-button>
                                <div class="left-foot">
                                    <h4>热门搜索：&nbsp;&nbsp;</h4>
                                    <a href="#" @click="search1()"><span>vue</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="#" @click="search2()"><span>会记</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="#" @click="search3()"><span>十宗罪</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="#" @click="search4()"><span>考研书籍</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="#" @click="search5()"><span>计算机等级考试</span></a>
                                    <el-divider direction="vertical"></el-divider>
                                    <a href="#" @click="search6()"><span>摄影</span></a>
                                </div>
                            </div>
                            <div class="bibliography-right">
                                <div class="right-borrowing">
                                    <h3>热门借阅</h3>
                                    <a href="#" v-for="(item,idx) in data" :key="idx" @click="popularnewbook(item)"><p><i class="el-icon-caret-right" ></i>{{item.book_name}}</p></a>
                                    <!-- <a href="#"><p><i class="el-icon-caret-right"></i>寂静的春天</p></a>
                                    <a href="#"><p><i class="el-icon-caret-right"></i>国学论集</p></a>
                                    <a href="#"><p><i class="el-icon-caret-right"></i>浮生六迹</p></a>
                                    <a href="#"><p><i class="el-icon-caret-right"></i>倾城之恋</p></a>
                                    <a href="#"><p><i class="el-icon-caret-right"></i>平凡的世界</p></a>
                                    <a href="#"><p><i class="el-icon-caret-right"></i>红楼梦</p></a> -->
                                </div>
                            </div>
                        </div>
                        <br>
                    </li>
                </ul>
            </div>
            <!-- <div class="bibliography_nav2" >
                <ul>
                    <li>
                        <div class="bibliography_box2">
                            
                        </div>
                    </li>
                </ul>
            </div> -->
        </div>
        <foot/>
    </div>
</template>

<script>
import foot from '../index/foot.vue'
export default {
    components: {
        foot,
    },
    props:['listb'],
    data(){
        return{
            input:'',
            select:'书名',
            text1:'vue',
            text2:'会记',
            text3:'十宗罪',
            text4:'考研书籍',
            text5:'计算机等级考试',
            text6:'摄影',
            data:[
                // {book_name:'一千零一夜'},
                // {book_name:'寂静的春天'},
                // {book_name:'国学论集'},
                // {book_name:'浮生六迹'},
                // {book_name:'倾城之恋'},
                // {book_name:'平凡的世界'},
                // {book_name:'红楼梦'},
                ]
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
        search1:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text1,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        search2:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text2,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        search3:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text3,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        search4:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text4,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        search5:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text5,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        search6:async function(){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.text6,query_mode:self.select})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search' 
        },
        popularnewbook:async function(item){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/index/popular_new_book',
            {book_name:item.book_name})
            console.log(status,list)
            self.searchresult=list.data
            var searchmessage = JSON.stringify(self.searchresult);
            sessionStorage.setItem("searchresult", searchmessage);  
            location.href='/detailedcontent';         
        },
    },
    mounted:function(){
        // this.result=JSON.parse(sessionStorage.getItem("queryresultskey"));
    },
    computed:{
        data5(){
            this.data=this.listb
        } 
    }
}
</script>

<style>
.bibliography{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
    z-index: 1;
}
ul li{
    list-style: none;
}
.bibliography .bibliography_nav1,.bibliography .bibliography_nav{
    margin-left: 5%;
}
.bibliography .bibliography_nav1 ul li{
    /* float: left; */
    width: 91%;
    list-style: none;
}
.bibliography .bibliography_nav2{
    /* margin-right: 5%; */
    
}
.bibliography .bibliography_nav2 ul li{
    float: left;
    width: 71%;
    list-style: none;
    margin-left:1% ;
}
.bibliography_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
    position:relative;
}
.bibliography_box1{
    border: 1px solid #dad4d4;
    width: 100.3%;
    height: 400px;
    background-color: white;
    /* padding:2% 3%; */
    /* border-top: 3px solid blue; */
}
.bibliography_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
}
.bibliography-left{
    width: 70%;
    /* border: #666666 solid 1px; */
    float: left;
    padding: 3% 8%;
}
.bibliography-left .bibliography-header a{
    text-decoration: none;
    color: #333333;
    line-height: 35px;
}
.bibliography-left .bibliography-header a:hover{
    color: cornflowerblue;
}
.bibliography-left .left-foot{
    line-height: 50px;
}
.bibliography-left .left-foot h4{
    font-size: 15px;
    text-decoration: none;
    float: left;
}
.bibliography-left .left-foot a{
    font-size: 14px;
    text-decoration: none;
    /* cursor: pointer;
    color: blue; */
}
.bibliography-left .left-foot a:hover{
    text-decoration:underline;
}
.bibliography-right{
    width: 30%;
    /* border: #666666 solid 1px; */
    height: 100px;
    float: right;
    border-left: #ccc solid 1px;
    padding: 3% 3%;
}
.bibliography-right .right-borrowing h3{
    /* text-decoration: none; */
    line-height: 35px;
    font-size: 18px;
}
.bibliography-right .right-borrowing a{
    text-decoration: none;
    line-height: 25px;
    color: #333333;
    font-size: 15px;
}
.bibliography-right .right-borrowing a:hover{
    text-decoration: none;
    line-height: 25px;
    color: cornflowerblue
}
</style>