<template>
    <div class="popular" >
        <!-- 开馆时间 -->
        <div style=" overflow: hidden;width:100%">
            <div class="popular_nav">
                <ul>
                    <li>
                        <div class="popular_position" :data="data5">
                            <i class="el-icon-add-location"></i>当前位置 > 图书检索 > 热门推荐
                        </div>
                    </li>
                </ul>
            </div>
            <div class="popular_nav1">
                <ul>
                    <li>
                        <div class="popular_box1">
                            <h3 class="title">图书检索</h3>
                            <div>
                                <a href="/retrieval"><el-button><i class="el-icon-arrow-right"></i> 书目检索</el-button></a>
                            </div>
                            <div>
                                <a href="/classification"><el-button><i class="el-icon-arrow-right"></i> 分类浏览</el-button></a>
                            </div>
                            <div>
                                <a href="/newbook"><el-button><i class="el-icon-arrow-right"></i> 新书推荐</el-button></a>
                            </div>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 热门推荐</el-button>
                            </div>
                            <br>
                        </div>
                        <br>
                    </li>
                </ul>
            </div>
            <div class="popular_nav2" >
                <ul>
                    <li style="float: left;width: 71%;">
                        <div class="popular_box2">
                            <div class="cation-content">
                                <div style="height:10px"></div> <!-- 可以删除 -->
                                <div class="cation-middle">
                                    <dl class="cation-list cation-list1">
                                        <dt>文献类型</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="mode" class="default">全部</a> -->
                                            <a href="#" name="system" class="default" v-for="(item,idx) in data1" :key="idx" @click="classdata1(idx)">{{item.text1}}</a>
                                            <!-- <a  rel="家电数码" name="mode" class="default">国外书籍</a> -->
                                            <!-- <a href="#" rel="英文外贸" name="mode" class="default">英文外贸</a>
                                            <a href="#" rel="综合通用" name="mode" class="default">综合通用</a>
                                            <a href="#" rel="食品保健" name="mode" class="default">食品保健</a>
                                            <a href="#" rel="团购模板" name="mode" class="default">团购模板</a> -->
                                            
                                        </dd>
                                    </dl>
                                    <dl class="cation-list cation-list2">
                                        <dt>类 别 一</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="theme" class="on">全部</a> -->
                                            <a href="#" name="system" class="default" v-for="(item,idx) in data2" :key="idx" @click="classdata2(idx)">{{item.text2}}</a>
                                            <!-- <a href="#" rel="可爱温馨" name="theme" class="default">可爱温馨</a>
                                            <a href="#" rel="时尚简约" name="theme" class="default">时尚简约</a>
                                            <a href="#" rel="潮流酷炫" name="theme" class="default">潮流酷炫</a>
                                            <a href="#" rel="节日庆典" name="theme" class="default">节日庆典</a> -->
                                        </dd>
                                    </dl>
                                    <dl class="cation-list cation-list3">
                                        <dt>类 别 二</dt>
                                        <dd>
                                            <!-- <a href="#" rel="" name="system" class="on">全部</a> -->
                                            <a href="#" name="system" class="default" v-for="(item,idx) in data3" :key="idx" @click="classdata3(idx)">{{item.text3}}</a>
                                            <!-- <a href="#" rel="橙色" name="system" class="default">近1个月</a>
                                            <a href="#" rel="粉色" name="system" class="default">近3个月</a>
                                            <a href="#" rel="红色" name="system" class="default">近半年</a>
                                            <a href="#" rel="绿色" name="system" class="default">近一年</a> -->
                                            <!-- <a href="#" rel="蓝色" name="system" class="default">蓝色</a>
                                            <a href="#" rel="黑色" name="system" class="default">黑色</a> -->
                                        </dd>
                                    </dl>
                                    <!-- <dl class="cation-list4">
                                        <dt>价格</dt>
                                        <dd>
                                            <a href="#" rel="" name="price" class="on">全部</a>
                                            <a href="#" rel="2000 - 6000" name="price" class="default">2000 - 6000</a>
                                            <a href="#" rel="6000 - 10000" name="price" class="default">6000 - 10000 </a>
                                            <a href="#" rel="10000 - 14000" name="price" class="default">10000 - 14000 </a>
                                            <a href="#" rel="18000 - 22000" name="price" class="default">18000 - 22000</a>
                                            <a href="#" rel="26000 - 30000" name="price" class="default">26000 - 30000</a>
                                        </dd>
                                    </dl> -->
                                </div>
                            </div>
                            <section class="aui-flexView">
                                <!-- <div class="aui-flex">
                                    <div class="aui-flex-box">
                                        <h2>热门推荐<a href="#"><span style="color:black;float:right;font-weight:550;font-size:0.875rem;margin-right:2rem;">更多 >> </span></a></h2>
                                    </div>
                                </div> -->
                                <br>
                                <div class="aui-list-theme-box">
                                    <a href="javascript:;" class="aui-list-item" v-for="(items,idx) in result.slice((currentPage-1)*pagesize3,currentPage*pagesize3)" :key="idx" @click="getDetails(idx,items)">
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
                                    :page-size="pagesize3"
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
            text1:'',
            text2:'',
            text3:'',
            result:'',
            searchresult:'',
            currentPage: 1,
            pagesize3:18,
            currpage:1,
            single:true,
        }
    },
    methods:{
        classdata1:async function(idx){
            this.text1=this.data1[idx].text1;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/propularcategory',
            {language:self.text1,category1:self.text2,category2:self.text3})
            console.log(status,list)
            self.result= list.data
        },
        classdata2:async function(idx){
            this.text2=this.data2[idx].text2;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/propularcategory',
            {language:self.text1,category1:self.text2,category2:self.text3})
            console.log(status,list)
            self.result= list.data
        },
        classdata3:async function(idx){
            this.text3=this.data3[idx].text3;
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/propularcategory',
            {language:self.text1,category1:self.text2,category2:self.text3})
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
         this.pagesize3=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
        },
    },
    mounted(){
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
.popular{
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
.popular .popular_nav1,.popular .popular_nav{
    margin-left: 5%;
}
.popular .popular_nav1 ul li{
    float: left;
    width: 18%;
    list-style: none;
}
.popular .popular_nav2{
    margin-right: 3.3%;
    
}
.popular .popular_nav2 ul li{
    
    list-style: none;
    margin-left:1% ;
}
.popular_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
    position:relative;
}
.popular_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.popular_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
}
.popular_box1 .title{
    font-size: 22px;
    text-align: center;
    /* padding-left: 10%; */
    font-weight: normal;
    line-height: 44px;
    /* color: #CD3339; */
}
.popular_box1 div{
    margin-left: 10%;
    line-height: 50px;
}
.popular_box1 div .el-button{
    width: 90%;
    text-align: left;
}

/* 新书推荐  热门推荐 */
.popular_box2 .aui-list-theme-box a {
    text-decoration: none;
    color: #000;
}
.popular_box2 .aui-list-theme-box {
    padding: 0 0 0 1.8rem;
    overflow: hidden;
    position: relative;
}
.popular_box2 .aui-list-item {
    width: 13.5%;
    float: left;
    margin: 0 3% 2% 0;
    background: #fff;
    display: block;
    overflow: hidden;
}
.popular_box2 .aui-list-theme-img {
    height: auto;
    width: 100%;
    position: relative;
}
.popular_box2 .aui-list-theme-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}
.popular_box2 .aui-list-theme-img span {
    position: absolute;
    left: 0;
    top: 0;
    background: #ff6d6d;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0 0 5px 0;
    padding: 0.2rem 0.8rem;
}
.popular_box2 .aui-list-theme-message {
    background: #fff;
    padding: 0.3rem 0;
}
.popular_box2 .aui-list-theme-title,.aui-list-theme-message p{
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
.popular_box2 .aui-list-theme-message p {
    color: #b5b5b5;
    font-size: 0.8rem;
}
/* 新书推荐  热门推荐 结束*/
</style>