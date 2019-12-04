<template>
    <div class="introduction">
        <div class="nav">
            <ul>
                <li>
                    <div class="position">
                        <i class="el-icon-add-location"></i>当前位置 > 本馆概况 > 本馆简介
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav1">
            <ul>
                <li>
                    <div class="box1">
                            <h3>本馆简介</h3>
                            <div class="text">
                                <hr>
                                <p>XXX图书馆分东馆和西馆，东馆建筑面积37126平方米，主要收藏理工、政治、历史、教育、外语、艺术、文学、经济、法律类文献；西馆建筑面积4344平方米，主要收藏初等教育、职业教育类文献。全馆阅览座位2000多个。馆内设办公室、信息资源部、信息服务部、信息技术部、参考咨询部。</p>
                                <p>图书馆馆藏纸质文献总量达187.65万册，电子图书可在线阅读及下载150万种，可传递书目285万种，可查询书目490万种，订购纸质中文期刊1665种，电子期刊4000多种40多类，日更新期刊100种以上。订购有CNKI中国知网、读秀学术搜索、超星移动图书馆、联图云数据库等电子资源数据库。实行学科专家选书制度，文献收集符合学院专业设置，为学校的教学和科学研究提供了切实有效的文献信息保障。</p>
                                <p>确立了“以教学为中心，以服务为宗旨”的办馆理念，书刊全部开架借阅，藏、借、阅、检、管、库室合一，每周开馆时间达98小时。电子资源使用免费，《走进图书馆》免费赠阅。</p>
                                <p>专业队伍由各种专业背景的硕士研究生、本专科毕业的业务、技术人员构成，很好地承担了我馆文献资源建设、文献加工整序、读者服务、情报咨询、系统维护等各项工作。</p>                               
                                <p>图书馆基本业务全面实现了计算机管理，拥有自动借还系统、自动文印系统、电子图书借阅机、读报机等现代化设备。图书馆信息管理系统选用代表国内先进水平的《汇文图书馆信息管理系统》。图书馆通过大型显示屏、微信公众平台、图书馆网站、ftp和e-mail开展新书推荐、馆藏查询、图书续借、图书预约、信息推送和文献检索咨询等各种服务；Web服务器24小时提供在线馆藏查询和中外文电子资源访问下载服务，实现了文献信息管理和服务的自动化、网络化。</p>
                                <br>
                            </div> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="nav2">
            <ul>
                <li>
                    <div class="navigation">
                        <div class="box2">
                            <h3 class="title">本馆概况</h3>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 本馆简介</el-button>
                            </div>
                            <div>
                                <el-button @click="$emit('index5_2')"><i class="el-icon-arrow-right"></i> 馆藏分布</el-button>
                            </div>
                            <br>
                        </div>
                    </div>
                    <br>
                    <notice/>
                    <br>
                </li>
            </ul>
        </div>
        <foot/>
    </div>
</template>

<script>
import foot from '../index/foot.vue'
import notice from '../index/notice.vue'
export default {
    components: {
        foot,
        notice,
    },

}
</script>

<style>
/* @import "@/static/css/iconfont.css"; */
.introduction{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.introduction .nav1,.introduction .nav{
    margin-left: 5%;
    /* overflow: hidden; */
}
.introduction .nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.introduction .nav2{
    /* margin-right: 5%; */
    
}
.introduction .nav2 ul li{
    float: left;
    width: 27%;
    list-style: none;
}
.position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.box2 .title{
    font-size: 22px;
    text-align: left;
    padding-left: 10%;
    font-weight: normal;
    line-height: 44px;
}
.box2 div{
    margin-left: 10%;
    line-height: 50px;
}
.box2 div .el-button{
    width: 90%;
    text-align: left;
}
.box1 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.introduction .box1 .text{
    padding: 0 5%;;
    text-align: justify;
    text-indent: 2em;
    line-height: 24px;
    overflow: auto;
}
</style>