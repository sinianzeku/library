<template>
    <div class="classification">
        <div class="classification_nav">
            <ul>
                <li>
                    <div class="classification_position" :data="data5">
                        <i class="el-icon-add-location"></i>当前位置 > 图书检索 > 分类浏览
                    </div>
                </li>
            </ul>
        </div>
        <div class="classification_nav1">
            <ul>
                <li>
                    <div class="classification_box1">
                        <div class="selectNumberScreen">

                            <div id="selectList" class="screenBox screenBackground">
                            
                                <dl class="listIndex1" attr="terminal_brand_s">
                                    <dt>文献类型：</dt>
                                    <dd>
                                        <a @click="category1(idx)" href="javascript:void(0)" values2="" values1="" attrval="apple" v-for="(item,idx) in data1" :key="idx">{{item.text1}}</a> 
                                        <!-- <a href="javascript:void(0)" values2="" values1="" attrval="小米">小米</a>
                                        <a href="javascript:void(0)" values2="" values1="" attrval="华为">华为</a>  -->
                                        
                                    </dd>
                                </dl>
                                
                                <dl class="listIndex2" attr="价格范围">
                                    <dt>类  型  一：</dt>
                                    <dd>
                                        <a @click="category2(idx)" href="javascript:void(0)" values2="499" values1="1" attrval="1-499" v-for="(item,idx) in data2" :key="idx">{{item.text2}}</a> 
                                        <!-- <a href="javascript:void(0)" values2="999" values1="500" attrval="500-999">500-999</a>
                                        <a href="javascript:void(0)" values2="1999" values1="1000" attrval="1000-1999">1000-1999</a>
                                        <a href="javascript:void(0)" values2="2999" values1="2000" attrval="2000-2999">2000-2999</a>
                                        <a href="javascript:void(0)" values2="4999" values1="3000" attrval="3000-4999">3000-4999</a>
                                        <a href="javascript:void(0)" values2="0" values1="5000" attrval="5000以上">5000以上</a> -->
                                    </dd>
                                </dl>
                                
                                <dl class=" listIndex3" attr="terminal_os_s">
                                    <dt>类 型 二：</dt>
                                    <dd>
                                        <a @click="category3(idx)" href="javascript:void(0)" values2="" values1="" attrval="ios" v-for="(item,idx) in data3" :key="idx">{{item.text3}}</a> 
                                        <!-- <a href="javascript:void(0)" values2="" values1="" attrval="android">安卓</a> 
                                        <a href="javascript:void(0)" values2="" values1="" attrval="symbian">塞班</a>
                                        <a href="javascript:void(0)" values2="" values1="" attrval="百度易平台">百度易平台</a> -->
                                    </dd>
                                </dl>
                                
                            </div>
                            
                            <div class="hasBeenSelected">
                                <dl>
                                    <dt>您已选择：</dt>
                                    <dd style="display:none" class="clearDd">
                                        <div class="clearList"></div>
                                        <div style="display:none;" class="eliminateCriteria">清除筛选条件</div>
                                    </dd>
                                </dl>
                            </div>

                        </div>
                        <section class="aui-flexView">
                            <div class="aui-list-theme-box">
                                <a href="#" class="aui-list-item" v-for="(item,idx) in result.slice((currentPage-1)*pagesize1,currentPage*pagesize1)" :key="idx"  @click="getDetails(idx,item)">
                                    <div>
                                        <div class="aui-list-theme-img">
                                            <img :src="item.book_img_path" alt="">
                                        </div>
                                        <div class="aui-list-theme-message">
                                            <h3 class="aui-list-theme-title">{{item.book_name}}</h3>
                                            <p>{{item.book_auther}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <el-pagination
                                :hide-on-single-page="single"
                                style="float:right;margin-right:2%" 
                                layout="total, sizes, prev, pager, next, jumper"
                                :page-sizes="[21, 28, 35]"
                                :page-size="pagesize1"
                                :total="result.length"
                                @current-change="handleCurrentChange"
                                @size-change="handleSizeChange">
                            </el-pagination>
                            <br>
                        </section>
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        
        <div class="classification_nav2">
            
            <br><br>
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
    props:['listb'],
    data(){
        return{
            currentPage: 1,
            pagesize1:21,
            currpage:1,
            single:true,
            test1:'',
            test2:'',
            test3:'',
            test4:'',
            test5:'',
            data1:[{text1:'中文图书'},{text1:'西文图书'}],
            data2:[{text2:'文学'},{text2:'流行'},{text2:'文化'},{text2:'生活'},{text2:'科技'}],
            data3:[{text3:'小说'},{text3:'散文'},{text3:'诗歌'},{text3:'武侠'},{text3:'传记'},{text3:'励志'},{text3:'编程'},{text3:'音乐'},{text3:'历史'},{text3:'哲学'}],
            text1:'',
            text2:'',
            text3:'',
            result:[],

        }
    },
    head:{
        script:[
            // {src:'js/jquery-1.4.3.min.js'},
        ],
        link: [
            // { rel: 'stylesheet', href: 'css/classification.css' },
        ]
    }, 
    methods:{
        category1:async function(idx){
            this.text1=this.data1[idx].text1
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/category',
            {language:self.text1,category1:self.text2,category2:self.text3})
            console.log(status,list)
            self.result= list.data
        },
        category2:async function(idx){
            this.text2=this.data2[idx].text2
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/category',
            {language:self.text1,category1:self.text2,category2:self.text3})
            console.log(status,list)
            self.result= list.data
        },
        category3:async function(idx){
            this.text3=this.data3[idx].text3
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/retrieval/category',
            {language:self.text1,category1:self.text2,category2:self.text3})
            console.log(status,list)
            self.result= list.data
        },
        getDetails:async function(idx,item){
            console.log(item.book_id)
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/detailedcontent/search',
            {book_id:item.book_id})
            console.log(status,list)
            self.searchresult=list.data
            var searchmessage = JSON.stringify(self.searchresult);
            sessionStorage.setItem("searchresult", searchmessage);  
            location.href='/detailedcontent';
        },
        handleSizeChange:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize1=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
        },
        test:function(){
            var dlNum  =$("#selectList").find("dl");
            var i
            for (i = 0; i < dlNum.length; i++) {
            	$(".hasBeenSelected .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
            }
            var refresh = "true";
            $(".listIndex1 a ").live("click",function(){
                var text =$(this).text();
                var selectedShow = $(".selectedShow");
                var textTypeIndex =$(this).parents("dl").index();
                var textType =$(this).parent("dd").siblings("dt").text();
                var index
                index = textTypeIndex -(2);
                $(".clearDd").show();
                $(".selectedShow").eq(index).show();
                $(this).addClass("selected").siblings().removeClass("selected");
                selectedShow.eq(index).find("span").text(textType);
                selectedShow.eq(index).find("label").text(text);
                var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
                console.log(text)
            
                sessionStorage.setItem("test1",text );
                this.test3='ddd';
                if (show > 1) {
                    $(".eliminateCriteria").show();
                    
                }
            
            });
            $(".listIndex2 a ").live("click",function(){
                var text =$(this).text();
                var selectedShow = $(".selectedShow");
                var textTypeIndex =$(this).parents("dl").index();
                var textType =$(this).parent("dd").siblings("dt").text();
                var index
                index = textTypeIndex -(2);
                $(".clearDd").show();
                $(".selectedShow").eq(index).show();
                $(this).addClass("selected").siblings().removeClass("selected");
                selectedShow.eq(index).find("span").text(textType);
                selectedShow.eq(index).find("label").text(text);
                var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
                console.log(text)
            
                sessionStorage.setItem("test2",text );
                this.test3='ddd';
                if (show > 1) {
                    $(".eliminateCriteria").show();
                    
                }
            
            });
            $(".listIndex3 a ").live("click",function(){
                var text =$(this).text();
                var selectedShow = $(".selectedShow");
                var textTypeIndex =$(this).parents("dl").index();
                var textType =$(this).parent("dd").siblings("dt").text();
                var index
                index = textTypeIndex -(2);
                $(".clearDd").show();
                $(".selectedShow").eq(index).show();
                $(this).addClass("selected").siblings().removeClass("selected");
                selectedShow.eq(index).find("span").text(textType);
                selectedShow.eq(index).find("label").text(text);
                var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
                console.log(text)
            
                sessionStorage.setItem("test3",text );
                this.test3='ddd';
                if (show > 1) {
                    $(".eliminateCriteria").show();
                    
                }
            
            });
            $(".listIndex4 a ").live("click",function(){
                var text =$(this).text();
                var selectedShow = $(".selectedShow");
                var textTypeIndex =$(this).parents("dl").index();
                var textType =$(this).parent("dd").siblings("dt").text();
                var index
                index = textTypeIndex -(2);
                $(".clearDd").show();
                $(".selectedShow").eq(index).show();
                $(this).addClass("selected").siblings().removeClass("selected");
                selectedShow.eq(index).find("span").text(textType);
                selectedShow.eq(index).find("label").text(text);
                var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
                console.log(text)
            
                sessionStorage.setItem("test4",text );
                this.test3='ddd';
                if (show > 1) {
                    $(".eliminateCriteria").show();
                    
                }
            
            });
            $(".listIndex5 a ").live("click",function(){
                var text =$(this).text();
                var selectedShow = $(".selectedShow");
                var textTypeIndex =$(this).parents("dl").index();
                var textType =$(this).parent("dd").siblings("dt").text();
                var index
                index = textTypeIndex -(2);
                $(".clearDd").show();
                $(".selectedShow").eq(index).show();
                $(this).addClass("selected").siblings().removeClass("selected");
                selectedShow.eq(index).find("span").text(textType);
                selectedShow.eq(index).find("label").text(text);
                var show = $(".selectedShow").length - $(".selectedShow:hidden").length;
                console.log(text)
            
                sessionStorage.setItem("test5",text );
                this.test3='ddd';
                if (show > 1) {
                    $(".eliminateCriteria").show();
                    
                }
            
            });
            
            $(".selectedShow em").live("click",function(){
                $(this).parents(".selectedShow").hide();
                var textTypeIndex =$(this).parents(".selectedShow").index();
                index = textTypeIndex;
                $(".listIndex").eq(index).find("a").removeClass("selected");
                // console.log(textTypeIndex)
                if($(".listIndex .selected").length < 2){
                    $(".eliminateCriteria").hide();
                    // console.log(this.test1)
                    console.log(".listIndex")
                }
            });

            $(".eliminateCriteria").live("click",function(){
                $(".selectedShow").hide();
                $(this).hide();
                $(".listIndex a ").removeClass("selected");
                 console.log()
                 sessionStorage.clear('test1'); 
                 sessionStorage.clear('test2'); 
                 sessionStorage.clear('test3'); 
                 sessionStorage.clear('test4'); 
                 sessionStorage.clear('test5'); 
                 location.href="/classification"
            }); 
        },
        // obtain(idx){
        //     console.log('ss');
        //     console.log(idx);
        //     console.log(this.data[idx])
        //     console.log(this.data[idx].name,this.data[idx].author)
        // }
       
        
    },
    mounted:function(){
        //  this.items.name= localStorage.getItem("name");  
        this.test(this.test5); 
        this.test1=sessionStorage.getItem('test1')
        this.test2=sessionStorage.getItem('test2')
        this.test3=sessionStorage.getItem('test3')
        this.test4=sessionStorage.getItem('test4')
        this.test5=sessionStorage.getItem('test5')
     },
    computed:{
        data5(){
            this.result=this.listb
        } 
    }
}
</script>

<style>
@import "../../static/css/classification.css";
.classification{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.classification .classification_nav2,.classification .classification_nav1,.classification .classification_nav{
    margin-left: 5%;
}
.classification_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.classification_box1{
    position: relative;
    width: 91.3%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white;
    padding: 2%;
}
.classification_nav2 ul li{
    /* width: 90%; */
    height: auto;
    border: 1px solid #dad4d4; 
    background-color: white;
}
.classification_box2{
    width: 100%;
}
/* 新书推荐  热门推荐 */

.classification_box1 .aui-list-theme-box a {
    text-decoration: none;
    color: #000;
}
.classification_box1 .aui-list-theme-box {
    padding: 0 0 0 1.8rem;
    overflow: hidden;
    position: relative;
}
.classification_box1 .aui-list-item {
    width: 11.2%;
    float: left;
    margin: 0 3% 2% 0;
    background: #fff;
    display: block;
    overflow: hidden;
}
.classification_box1 .aui-list-theme-img {
    height: auto;
    width: 100%;
    position: relative;
}
.classification_box1 .aui-list-theme-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}
.classification_box1 .aui-list-theme-img span {
    position: absolute;
    left: 0;
    top: 0;
    background: #ff6d6d;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0 0 5px 0;
    padding: 0.2rem 0.8rem;
}
.classification_box1 .aui-list-theme-message {
    background: #fff;
    padding: 0.3rem 0;
}
.classification_box1 .aui-list-theme-title,.classification_box1 p {
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
.classification_box1 .aui-list-theme-message p {
    color: #b5b5b5;
    font-size: 0.8rem;
}
/* 新书推荐  热门推荐 结束*/


</style>