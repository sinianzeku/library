<template>
    <div class="newbook">
        <!-- 开馆时间 -->
        <div style=" overflow: hidden;width:100%">
            <div class="newbook_nav">
                <ul>
                    <li>
                        <div class="newbook_position" :data="data5">
                            <i class="el-icon-add-location"></i>当前位置 > 图书检索 > 新书推荐
                        </div>
                    </li>
                </ul>
            </div>
            <div class="newbook_nav1">
                <ul>
                    <li>
                        <div class="newbook_box1">
                            <h3 class="title">图书检索</h3>
                            <div>
                                <a href="/retrieval"><el-button><i class="el-icon-arrow-right"></i> 书目检索</el-button></a>
                            </div>
                            <div>
                                <a href="/classification"><el-button><i class="el-icon-arrow-right"></i> 分类浏览</el-button></a>
                            </div>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 新书推荐</el-button>
                            </div>
                            <div>
                                <a href="/popularbook"><el-button ><i class="el-icon-arrow-right"></i> 热门推荐</el-button></a>
                            </div>
                            <br>
                        </div>
                        <br>
                    </li>
                </ul>
            </div>
            <div class="newbook_nav2">
                <ul>
                    <li style="width: 71%;float: left;">
                        <div class="newbook_box2">
                            <div class="cation-content">
                                <div style="height:10px"></div> <!-- 可以删除 -->
                                <div class="cation-middle">
                                    <dl class="cation-list cation-list1">
                                        <dt>文献类型</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="mode" class="default">全部</a> -->
                                            <a href="#" rel="服装鞋包" name="mode" class="default" v-for="(item,idx) in data1" :key="idx" @click="classdata1(idx)">{{item.text1}}</a>
                                            
                                        </dd>
                                    </dl>
                                    <dl class="cation-list cation-list2">
                                        <dt>类 别 一</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="theme" class="on">全部</a> -->
                                            <a href="#" rel="古典雅致" name="theme" class="default" v-for="(item,idx) in data2" :key="idx" @click="classdata2(idx)">{{item.text2}}</a>
   
                                        </dd>
                                    </dl>
                                    <dl class="cation-list cation-list2">
                                        <dt>类 别 二</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="theme" class="on">全部</a> -->
                                            <a href="#" rel="古典雅致" name="theme" class="default" v-for="(item,idx) in data3" :key="idx" @click="classdata3(idx)">{{item.text3}}</a>
            
                                        </dd>
                                    </dl>
                                    <dl class="cation-list cation-list3">
                                        <dt>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="system" class="on">全部</a> -->
                                            <a href="#" rel="多彩" name="system" class="default" v-for="(item,idx) in data4" :key="idx" @click="classdata4(idx)">{{item.text4}}</a>
                                  
                                      
                                        </dd>
                                    </dl>
                                   
                                </div>
                            </div>
                            <p id="demo"></p>
                            <section class="aui-flexView">
                                <br>
                                <div class="aui-list-theme-box">
                                    <a href="javascript:;" class="aui-list-item" v-for="(items,idx) in result.slice((currentPage-1)*pagesize2,currentPage*pagesize2)" :key="idx" @click="getDetails(idx,items)">
                                        <div class="aui-list-theme-img">
                                            <img :src="items.book_img_path" alt="">
                                        </div>
                                        <div class="aui-list-theme-message">
                                            <h3 class="aui-list-theme-title">{{items.book_name}}</h3>
                                            <p>{{items.book_auther}}</p>
                                        </div>
                                    </a>
                                </div>
                                <el-pagination
                                    :hide-on-single-page="single"
                                    style="float:right;margin-right:3%" 
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :page-sizes="[18, 24, 30]"
                                    :page-size="pagesize2"
                                    :total="result.length"
                                    @current-change="handleCurrentChange"
                                    @size-change="handleSizeChange">
                                </el-pagination>
                                <br><br>
                            </section>
               
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
        <br>
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
    props:['listb'],
    data(){
        return{
            data:[],
            data1:[
                {text1:'中文图书'},
                {text1:'西文图书'}
            ],
            data2:[
                {text2:'文学'},
                {text2:'流行'},
                {text2:'文化'},
                {text2:'生活'},
                {text2:'科技'}
            ],
            data3:[
                {text3:'小说'},
                {text3:'散文'},
                {text3:'诗歌'},
                {text3:'武侠'},
                {text3:'传记'},
                {text3:'励志'},
                {text3:'编程'},
                {text3:'音乐'},
                {text3:'历史'},
                {text3:'哲学'}],
            data4:[
                {text4:'最近一周'},
                {text4:'近一个月'},
                {text4:'近三个月'},
                {text4:'近半年'},
                {text4:'近一年'},
            ],
            text1:'',
            text2:'',
            text3:'',
            text4:'',
            result:'',
            searchresult:'',
            currentPage: 1,
            pagesize2:18,
            currpage:1,
            single:true,
        }
    },
    
    head:{
        script:[
            // {src:'js/jquery.min.js'},
        ],
        link: [
            // { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        classdata1:async function(idx){
            this.text1=this.data1[idx].text1;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/newbookcategory',
            {language:self.text1,category1:self.text2,category2:self.text3,time:self.text4})
            console.log(status,list)
            self.result= list.data
        },
        classdata2:async function(idx){
            this.text2=this.data2[idx].text2;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/newbookcategory',
            {language:self.text1,category1:self.text2,category2:self.text3,time:self.text4})
            console.log(status,list)
            self.result= list.data
        },
        classdata3:async function(idx){
            this.text3=this.data3[idx].text3;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/newbookcategory',
            {language:self.text1,category1:self.text2,category2:self.text3,time:self.text4})
            console.log(status,list)
            self.result= list.data
        },
        classdata4:async function(idx){
            this.text4=this.data4[idx].text4;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/newbookcategory',
            {language:self.text1,category1:self.text2,category2:self.text3,time:self.text4})
            console.log(status,list)
            self.result= list.data      
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
        updateclass(){
            $(function () {
                $(".default").click(function () {
                    $(this).removeClass("default");
                    $(this).addClass("on");
                    $(this).siblings().removeClass("on");
                    $(this).siblings().addClass("default");
                });
            });
            
        },
        handleSizeChange:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize2=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
        },
        
    },
    mounted:function(){
        this.updateclass();

    },
    computed:{
        data5(){
            this.result=this.listb
        } 
    }

}
</script>

<style>
@import '@/static/css/newbookclass.css';
.newbook{
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
.newbook .newbook_nav1,.newbook .newbook_nav{
    margin-left: 5%;
}
.newbook .newbook_nav1 ul li{
    float: left;
    width: 18%;
    list-style: none;
}
.newbook .newbook_nav2{
    margin-right: 3.3%;
    
}
.newbook .newbook_nav2 ul li{
    
    
    list-style: none;
    margin-left:1% ;
}
.newbook_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
    position:relative;
}
.newbook_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.newbook_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    
}
.newbook_box1 .title{
    font-size: 22px;
    text-align: center;
    /* padding-left: 10%; */
    font-weight: normal;
    line-height: 44px;
    /* color: #CD3339; */
}
.newbook_box1 div{
    margin-left: 10%;
    line-height: 50px;
}
.newbook_box1 div .el-button{
    width: 90%;
    text-align: left;
}
.newbook .newbook_box2 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
/* 新书推荐  热门推荐 */
.newbook_box2 .aui-list-theme-box a {
    text-decoration: none;
    color: #000;
}
.newbook_box2 .aui-list-theme-box {
    padding: 0 0 0 1.8rem;
    overflow: hidden;
    position: relative;
}
.newbook_box2 .aui-list-item {
    width: 13.5%;
    float: left;
    margin: 0 3% 2% 0;
    background: #fff;
    display: block;
    overflow: hidden;
}
.newbook_box2 .aui-list-theme-img {
    height: auto;
    width: 100%;
    position: relative;
}
.newbook_box2 .aui-list-theme-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}
.newbook_box2 .aui-list-theme-img span {
    position: absolute;
    left: 0;
    top: 0;
    background: #ff6d6d;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0 0 5px 0;
    padding: 0.2rem 0.8rem;
}
.newbook_box2 .aui-list-theme-message {
    background: #fff;
    padding: 0.3rem 0;
}
.newbook_box2 .aui-list-theme-title,.aui-list-theme-message p{
    color: #333;
    /* font-size: 0.85rem; */
    font-size:15px;
    margin: 0.1rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-weight: normal;
    text-overflow: ellipsis;
}
.newbook_box2 .aui-list-theme-message p {
    color: #b5b5b5;
    font-size: 0.8rem;
}
/* 新书推荐  热门推荐 结束*/
</style>