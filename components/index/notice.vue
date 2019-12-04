<template>
    <div class="notice">
        <div class="search_box2">
            <h3 class="title">
                <div style="float:left"><img style="border-radius: 20%;margin-top:16px" src="http://47.96.139.19:6868/library/images/icon_1.png"/></div>
                <p style="text-indent: 0.4em;float:left">图书馆公告</p>
                <router-link :to="{path: '/announcement', query: { index2:2 }}" style="float:right;font-size:14px;color: #666666;">更多>></router-link>
            </h3>
            <div><span></span><a href="/library_announcement_1">1. 活动预告 | 写给图书馆的三行情诗 </a>
            </div>
            <p style="color: #666666;text-indent:1em">2019-11-25</p>
            <div><span></span><a href="/library_announcement_2">2. 公益讲座 | 读书的重要性 </a>   
            </div>
            <p style="color: #666666;text-indent:1em">2019-10-24</p>
            <div><span></span><a href="/library_announcement_3">3. 图书馆开展“不忘初心，牢记使命”主题教育活动 </a> 
            </div>
            <p style="color: #666666;text-indent:1em">2019-10-01</p>
            <div><span></span><a href="/library_announcement_4">4. 书香童年;2019年“我的第一本线装书”体验活动 </a>
            </div>
            <p style="color: #666666;text-indent:1em">2019-09-28</p>
            <div><span></span><a href="/library_announcement_5">5. 绘享童年·相伴成长”亲子绘本故事会通知 </a>
            </div>
            <p style="color: #666666;text-indent:1em">2019-09-25</p>                   
            <br>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.search_box2{
    border: 1px solid #dad4d4;  
    height: 300px;
    background-color: white;
    border-top: 3px solid blue;
    width: 100%;
    padding: 0 5%;
    /* overflow: hidden; */
}
.search_box2 .title{
    font-size: 18px;
    font-weight: normal;
    line-height: 60px;
    /* float: left; */
    text-align: left;
    width: 100%;
    overflow: hidden;
}
.search_box1 .el-input{
    width: 70%;
}
.search_box2 div{
    font-size: 15px;
    line-height: 25px;  
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    word-break: break-all;
    overflow: hidden;
    /* -webkit-line-clamp:1;
    -webkit-box-orient: vertical; */
    
}
.search_box2 a{
    text-decoration: none;
    color: black;
}
.search_box2 a:hover{
    color:#CD3339;
}
.search_box2_1{
    border: 1px solid #dad4d4;  
    height: 166px;
    background-color: white;
    /* border-top: 3px solid blue; */
    width: 100%;
    padding: 20px 40px;
    line-height: 30px;
}
.search_box2_1 a{
    text-decoration: none;
}
.search-box-login{
    border: 1px solid #dad4d4;  
    height: 166px;
    background-color: white;
    padding: 10px 20px;
}
.search-administrators{
    /* border: 1px solid #dad4d4;   */
    height: 166px;
}
.search-administrators .el-button{
    height: 75px;
    float: left;
    width: 49%;
    /* line-height: 75px;
    text-align: center; */

}
</style>