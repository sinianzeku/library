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
                            <div style="font-size:18px;color:#CD3339;text-align:center">书香童年;2019年“我的第一本线装书”体验活动</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-09-28 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="text-indent:2em">
                                    一根线，连接了古今；一本书，传承了文化，那手中的针线，是穿越了几千年的光阴。线装书之美，首在其古朴素雅。藏青色的封面，竖式的题签，一份沉静之美便隐然浸润出来，如芝兰之香，如清茶之味，如古琴之韵，久而弥醇弥厚。作为中国传统文化的重要载体，线装书是和长城、故宫一样具有代表性的元素，承载着造纸印刷两大文明和近六百年文脉，展露着独一无二的“中国范儿”。
                                </div>
                                <div style="text-indent:2em">
                                    在这信息化时代移动互联，每天生活的节奏越来越快，闲云野鹤的生活只能在遐想......
                                </div>
                                <div style="text-indent:2em">
                                    来吧，我们和你“穿越”与跟着古人来一场对话！6月9日玉市图书馆开展线装书体验活动，诚邀小读者到现场亲身体验线装书制作，给自己制作一本线装书！
                                </div>
                                <div style="text-indent:2em">
                                    活动对象：6—12岁的孩子。
                                </div>
                                <div style="text-indent:2em">
                                    报名方式：请持少儿图书借阅证于2019年9月1日起到XXX图书馆门卫室报名，限30名，报满即止。
                                </div>
                                <div style="text-indent:2em">
                                    活动时间：2019年9月5日上午10：40——11:30
                                </div>
                                <div style="text-indent:2em">
                                    活动地点：XXX图书馆一楼多功能厅
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