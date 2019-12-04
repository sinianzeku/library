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
                                <nuxt-link to="/announcement"><el-button><i class="el-icon-arrow-right"></i> 开馆时间</el-button></nuxt-link>
                            </div>
                            <div>
                                <router-link :to="{path: '/announcement', query: { index2:2 }}">
                                    <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 图书馆公告</el-button>
                                </router-link>
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
                            <div style="font-size:18px;color:#CD3339;text-align:center">图书馆开展“不忘初心，牢记使命”主题教育活动</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-10-1 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="text-indent:2em">
                                    2019年9月20日上午，XXX图书馆召开了“不忘初心、牢记使命”主题教育动员会。会议由XXX馆长主持召开，全馆干部职工参加了会议。
                                </div>
                                <div style="text-indent:2em">
                                    会上，XXX馆长带领大家学习了《习近平总书记在“不忘初心、牢记使命”主题教育工作会议上的讲话》和《习近平给国家图书馆老专家的回信》，强调作为图书馆人，我们要把握主题教育内容，明确目标任务，强化重点措施，有的放矢、精准发力、狠抓落实，努力在学懂上有新进步、弄通上有新突破、做实上有新境界，努力将市委市政府、市文化和旅游局决策部署不折不扣落到实处，确保主题教育取得扎扎实实的成效。
                                </div>
                                <div style="text-indent:2em">
                                    最后XXX馆长结合图书馆实际工作对全馆开展“不忘初心、牢记使命”主题教育活动提出了具体要求：
                                </div>
                                <div style="text-indent:2em">
                                    一、要不忘图书馆人的初心，干一行、爱一行；爱一行、专一行。只有热爱工作，才能做好工作，进而实现人生价值。“发自内心热爱图书馆事业、全身心服务好每一位读者”、“在平凡的工作岗位上脚踏实地把每一件小事做好、做细、做透”便是图书馆人的初心。
                                </div>
                                <div style="text-indent:2em">
                                    二、作为新时代的图书馆人，要有担当，不怕苦、不怕累，不计较个人得失，要有甘为人梯、敢为人先的职业精神。
                                </div>
                                <div style="text-indent:2em">
                                    三、要做到“真信”，把信仰提到前面，坚定自己的方向；最后要做到“真做”，把心思放到图书馆事业上来，真抓实干，勇敢面对新时期的机遇与挑战，以更高的标准要求自己，做一个真真正正的图书馆人。
                                </div>
                                <div style="text-indent:2em">
                                    四、在文旅融合的大背景下，我们图书馆人应该思考如何在保留图书馆自身特色的同时，让图书馆事业融入文旅融合发展中。
                                </div>
                                <div style="text-indent:2em">
                                    五、创新服务方式，积极应用现代信息技术提升服务效能，以优质阅读服务满足人民群众日益增长的精神文化需求，推动全民阅读，建设学习型社会，为打造书香寿城添砖加瓦。
                                </div>
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
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    padding: 3%;
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


</style>