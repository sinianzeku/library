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
                            <div style="font-size:18px;color:#CD3339;text-align:center">绘享童年·相伴成长”亲子绘本故事会通知</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-09-25 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="text-indent:2em">
                                    您还在为没时间陪孩子读书而烦恼吗？
                                </div>
                                <div style="text-indent:2em">
                                    您还在担心该如何为孩子选择绘本吗？
                                </div>
                                <div style="text-indent:2em">
                                    您还在考虑该如何提高孩子的阅读能力吗？
                                </div>
                                <div style="text-indent:2em">
                                    如果您有种种疑惑！
                                </div>
                                <div style="text-indent:2em">
                                    亲爱的家长、小朋友，来参加我们每周一期的亲子绘本故事会吧！
                                </div>
                                <div style="text-indent:2em">
                                    本周日（2019年9月17日） 上午10:00绘本故事开讲！
                                </div>
                                <div style="text-indent:2em">
                                    主讲绘本：《长颈鹿不会跳舞》，适应人群：3-7岁
                                </div>
                                <div style="text-indent:2em">
                                    主讲人：XXX老师
                                </div>
                                <div style="text-indent:2em">
                                    活动参与规则与注意事项：
                                </div>
                                <div style="text-indent:2em">
                                    1、玉林市图书馆亲子绘本故事会是公益性全免费活动，无需报名，直接参与。
                                </div>
                                <div style="text-indent:2em">
                                    2、参加绘本故事会的幼儿需由一名监护人陪同。
                                </div>
                                <div style="text-indent:2em">
                                    3、请提前15分钟到场，方便参加活动，避免错过故事会环节。
                                </div>
                                <div style="text-indent:2em">
                                    活动地点：XXX图书馆门楼一楼亲子阅览室
                                </div>
                                <div style="text-indent:2em">
                                    绘本故事《长颈鹿不会跳舞》简介：
                                </div>
                                <div style="text-indent:2em">
                                    杰拉德是只长颈鹿，长脖子优美而纤细。可惜膝盖向外弯曲，腿瘦得骨头连着皮。杰拉德不太会跳舞。每年他都担心灰在丛林舞会出丑。但是在一个美丽的月圆之夜，杰拉德发现，原来换一首音乐来跳舞，就可以变得独一无二……
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