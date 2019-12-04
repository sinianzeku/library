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
                            <div style="font-size:18px;color:#CD3339;text-align:center">活动预告 | 写给图书馆的三行情诗</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-09-01 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="font-weight:550">
                                    一、活动背景
                                </div>
                                <div style="text-indent:2em">
                                    余秋雨曾说过：“图书馆就是一个让我们安静地靠近着伟大灵魂的地方。”每个人心目中都有一个图书馆。为了提高广大师生对图书馆的了解，展现一个更立体、更多元化的图书馆面貌，加强图书馆与读者的沟通和联系，帮助读者进一步认识图书馆、了解图书馆、利用图书馆。超星集团广西分公司联合玉林师范学院图书馆共同举办 “写给图书馆的三行情书”活动。
                                </div>
                                <div style="font-weight:550">
                                    二、活动主题
                                </div>
                                <div style="text-indent:2em">
                                    写给图书馆的三行情书
                                </div>
                                <div style="font-weight:550">
                                    三、活动对象
                                </div>
                                <div style="text-indent:2em">
                                    XXX
                                </div>
                                <div style="font-weight:550">
                                    四、活动时间
                                </div>
                                <div style="text-indent:2em">
                                    2019-12-01--2019-12-07
                                </div>
                                <div style="font-weight:550">
                                    五、作品要求 
                                </div>
                                <div style="text-indent:2em">
                                    1.作品应围绕“写给图书馆的三行情书”为主题，展示读者与书、读者与图书馆、读者与读者之间的故事，内容积极向上，自然真实，要求原创。
                                </div>
                                <div style="text-indent:2em">
                                    2.每人限发布一幅作品；参赛作品可单照或组照，组照按一幅作品计。
                                </div>
                                <div style="text-indent:2em">
                                    3.所提交的作品凡涉及包括但不限于版权、肖像权、名誉权等法律责任由本人承担，图书馆拥有使用权。
                                </div>
                                <div style="text-indent:2em">
                                    4.活动最终解释权归图书馆所有。
                                </div>
                                <div style="font-weight:550">
                                    六、奖项及奖品设置
                                </div>
                                <div style="text-indent:2em">
                                    特等奖1名  kindl阅读器+荣誉证书
                                </div>
                                <div style="text-indent:2em">
                                    一等奖3名  小米手环+荣誉证书
                                </div>
                                <div style="text-indent:2em">
                                    二等奖6名  U盘+荣誉证书
                                </div>
                                <div style="text-indent:2em">
                                    三等奖10名 手持风扇+荣誉证书
                                </div>
                                <div style="text-indent:2em">
                                    优秀奖20名  荣誉证书
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