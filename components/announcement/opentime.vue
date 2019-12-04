<template>
    <div class="opentime">
        <!-- 开馆时间 -->
        <div style=" overflow: hidden;width:100%">
            <div class="opentime_nav">
                <ul>
                    <li>
                        <div class="opentime_position">
                            <i class="el-icon-add-location"></i>当前位置 > 图书公告 > 开馆时间
                        </div>
                    </li>
                </ul>
            </div>
            <div class="opentime_nav1">
                <ul>
                    <li>
                        <div class="opentime_box1">
                            <h3 class="title">图书公告</h3>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 开馆时间</el-button>
                            </div>
                            <div>
                                <el-button @click="$emit('index2_2')"><i class="el-icon-arrow-right"></i> 图书馆公告</el-button>
                            </div>
                            <br>
                        </div>
                        <br>
                    </li>
                </ul>
            </div>
            <div class="opentime_nav2">
                <ul>
                    <li>
                        <div class="opentime_box2">
                            <h3>开馆时间</h3>
                            <div>
                                <p>本图书馆自建馆起实行免费开放，始终贯彻“读者第一、服务至上”的宗旨，坚持每天开馆8小时以上，一周开放7天，周六、周日、节假日均不闭馆。</p>
                                <p><b>周一至周五：8:00-21:00</b></p>
                                <p><b>周六至周日：9:00-18:00</b></p>
                                <p>最新情况请关注图书馆公告</p>  
                            </div>
                            <br>
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

}
</script>

<style>
.opentime{
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
.opentime .opentime_nav1,.opentime .opentime_nav{
    margin-left: 5%;
}
.opentime .opentime_nav1 ul li{
    float: left;
    width: 18%;
    list-style: none;
}
.opentime .opentime_nav2{
    margin-right: 3.3%;
    
}
.opentime .opentime_nav2 ul li{
    float: left;
    width: 71%;
    list-style: none;
    margin-left:1% ;
    
}
.opentime_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
    position:relative;
}
.opentime_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.opentime_box2{
    border: 1px solid #dad4d4;  
    height: 400px;
    background-color: white;
    padding: 0 4%;
}
.opentime_box1 .title{
    font-size: 22px;
    text-align: center;
    /* padding-left: 10%; */
    font-weight: normal;
    line-height: 44px;
    /* color: #CD3339; */
}
.opentime_box1 div{
    margin-left: 10%;
    line-height: 50px;
}
.opentime_box1 div .el-button{
    width: 90%;
    text-align: left;
}
.opentime_box2 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.opentime .opentime_box2 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.opentime_box2 p{
    text-align: justify;
    text-indent: 2em;
    line-height: 32px;
}
</style>