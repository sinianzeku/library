<template>
    <div class="bookannouncement">
        <!-- 开馆时间 -->
        <div style=" overflow: hidden;width:100%">
            <div class="bookannouncement_nav">
                <ul>
                    <li>
                        <div class="bookannouncement_position">
                            <i class="el-icon-add-location"></i>当前位置 > 图书公告 > 图书馆公告
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bookannouncement_nav1">
                <ul>
                    <li>
                        <div class="bookannouncement_box1">
                            <h3 class="title">图书公告</h3>
                            <div>
                                <el-button @click="$emit('index2_1')"><i class="el-icon-arrow-right"></i> 开馆时间</el-button>
                            </div>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 图书馆公告</el-button>
                            </div>
                            <br>
                        </div>
                        <br>
                    </li>
                </ul>
            </div>
            <div class="bookannouncement_nav2">
                <ul>
                    <li>
                        <div class="bookannouncement_box2" style="overflow: hidden;">
                            <!-- <h3>图书馆公告</h3> -->
            
                            <div class="list2" > <!--右边结束-->
                                <div class="one" style="background:white;">
                                    <h3>图书馆公告</h3> 
                                    <div></div>
                                    <div class="notice">
                                        <ul v-show="shows">
                                            <li><a href="/library_announcement_1">1、活动预告 | 写给图书馆的三行情诗 <span style="overflow: hidden;float:right;font-size:0.875rem">2019-11-25</span></a></li>
                                            <li><a href="/library_announcement_2">2、公益讲座 | 读书的重要性<span style="overflow: hidden;float:right;font-size:0.875rem">2019-10-24</span></a></li>
                                            <li><a href="/library_announcement_3">3、图书馆开展“不忘初心，牢记使命”主题教育活动<span style="overflow: hidden;float:right;font-size:0.875rem">2019-10-01</span></a></li>
                                            <li><a href="/library_announcement_4">4、书香童年;2019年“我的第一本线装书”体验活动<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-28</span></a></li>
                                            <li><a href="/library_announcement_5">5、绘享童年·相伴成长”亲子绘本故事会通知<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-25</span></a></li>
                                            <li><a href="/library_announcement_1">6、阅读，让生活更美好<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-23</span></a></li>
                                            <li><a href="/library_announcement_2">7、阅读，从图书馆出发<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-20</span></a></li>
                                            <li><a href="/library_announcement_3">8、创新引领时代 智慧点亮生活<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-18</span></a></li>
                                            <li><a href="/library_announcement_4">9、腹有诗书气自华，读书万卷始通神<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-15</span></a></li>
                                            <li><a href="/library_announcement_5">10、读经典 学新知 链接美好生活<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-12</span></a></li>
                                        </ul> 
                                        <ul v-show="!shows">
                                            <li><a href="/library_announcement_6">11、图书馆：让社会充满书香<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-11</span></a></li>
                                            <li><a href="/library_announcement_6">12、《图书管理规定》<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09-01</span></a></li>
                                        </ul>                              
                                    </div>
                                </div><!--新书上架结束--> 
                            </div>
                            <div class="pages" v-show="shows" style="float:right;margin-top:-20px;overflow: hidden;">
                                <button @click="prev()">上一页</button>
                                <a href="#" @click="prev()"><span style="margin-left:10px;color:#CD3339;">1</span></a>
                                <a href="#" @click="next()"><span style="margin-left:10px;">2</span></a>
                                <button style="margin-left:10px;" @click="next()">下一页</button>
                            </div>
                            <div class="pages" v-show="!shows" style="float:right;margin-top:-20px;overflow: hidden;">
                                <button @click="prev()">上一页</button>
                                <a href="#" @click="prev()"><span style="margin-left:10px;">1</span></a>
                                <a href="#" @click="next()"><span style="margin-left:10px;color:#CD3339">2</span></a>
                                <button style="margin-left:10px;" @click="next()">下一页</button>
                            </div>
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
import floatVue from '../index/float.vue';
export default {
    components: {
        foot,
        list:[],

    },
    data(){
        return{
            shows:true,
        }
    },
    
    methods:{
        prev(){
            this.shows=true
            },
        next(){
            this.shows=false
        },  
    },
        
    mounted(){

    },
    computed: {

    }

}
</script>

<style>
.bookannouncement{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
   
}
ul li{
    list-style: none;
}
.bookannouncement .bookannouncement_nav1,.bookannouncement .bookannouncement_nav{
    margin-left: 5%;
}
.bookannouncement .bookannouncement_nav1 ul li{
    float: left;
    width: 18%;
    list-style: none;
}
.bookannouncement .bookannouncement_nav2{
    margin-right: 3.3%;
    
}
.bookannouncement .bookannouncement_nav2 ul li{
    float: left;
    width: 71%;
    list-style: none;
    margin-left:1% ;
}
.bookannouncement_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.bookannouncement_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.bookannouncement_box2{
    /* border: 1px solid #dad4d4;   */
    height: auto;
    /* background-color: white; */
    
}
.bookannouncement_box1 .title{
    font-size: 22px;
    text-align: center;
    /* padding-left: 10%; */
    font-weight: normal;
    line-height: 44px;
    /* color: #CD3339; */
}
.bookannouncement_box1 div{
    margin-left: 10%;
    line-height: 50px;
}
.bookannouncement_box1 div .el-button{
    width: 90%;
    text-align: left;
}
.bookannouncement_box2 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.bookannouncement .bookannouncement_box2 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.bookannouncement_box2 .list2 a{
    text-decoration:none;
    color:#333; 
    outline:none;
    width: 100%
}
.bookannouncement_box2 .list2 a:hover{
    color:#CD3339;
}
.bookannouncement_box2 .list2{
    width:100%;
    float:right;
    margin:0 0 1.9rem; 
}
.bookannouncement_box2 .list2 .one{
    border: 1px solid #dcdddd;
}
.bookannouncement_box2 .list2 div{
    /* font-size:1rem;  */
    /* height:2.5rem;  */
    /* line-height:2.5rem;   */
    background:white; 
    /* padding-left:1.25rem; */
    border-bottom: 0.06rem solid #EBEFEF;
    overflow: hidden;
}
.bookannouncement_box2 .list2 .notice{
    margin:0.6rem -1.3rem 1.87px; 
    height:350px; 
    overflow: hidden; 
    list-style:none;
}
.bookannouncement_box2  .list2 ul li{ 
    height:2.18rem; 
    line-height:1.87rem;
    border-bottom: 0.06rem  dashed #dcdddd; 
    padding-top:0.31rem;
    width:93%;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:normal;
}
/* <!--新书上架结束--> */
.pages a{
    text-decoration:none;
    color: #333;
}

</style>