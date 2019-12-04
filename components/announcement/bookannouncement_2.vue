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
                            <div style="font-size:18px;color:#CD3339;text-align:center">公益讲座 | 读书的重要性</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-10-24 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="font-weight:550">
                                    一、讲座背景
                                </div>
                                <div style="text-indent:2em">
                                    读书，是一个民族，一个国家，通往富强，通往幸福的智慧通道！毛泽东同志说：“三天不努力，赶不上刘少奇”，同理可证！你不努力就会退步，最快提升自己的方式是阅读，阅读是经典的智慧产物赋予你的绿色通道，书籍是人类生生不息的精神粮食，是通向智慧的基石。
                                </div>
                                <div style="font-weight:550">
                                    二、讲座主题
                                </div>
                                <div style="text-indent:2em">
                                    读书的重要性
                                </div>
                                <div style="font-weight:550">
                                    三、讲座对象
                                </div>
                                <div style="text-indent:2em">
                                    XXX
                                </div>
                                <div style="font-weight:550">
                                    四、讲座时间
                                </div>
                                <div style="text-indent:2em">
                                    2019年10月26日（周六 14：00）
                                </div>
                                <div style="font-weight:550">
                                    五、主讲人 
                                </div>
                                <div style="text-indent:2em">
                                    XXX
                                </div>
                                <div style="font-weight:550">
                                    六、主办单位
                                </div>
                                <div style="text-indent:2em">
                                    xxx图书馆
                                </div>
                                <div style="font-weight:550">
                                    七、讲座地点
                                </div>
                                <div style="text-indent:2em">
                                    xxx图书馆
                                </div>
                                <div style="font-weight:550">
                                    八、讲座概要
                                </div>
                                <div style="text-indent:2em">
                                    古人云：“书中自有黄金屋。” 书是一切文明的起源，它带领着我们领略了古代中国的文明，也讲述了当代中国的繁荣昌盛。 莎士比亚也说过：“书籍是世界的营养品。它就宛如一个大型超市，在那里，我们可以各取所需。取长补短， 用那优美的语言来充实自己，特别针对我这一类型的‘患者’—词穷，它可以使干燥的草地，变换成美丽的草原，使我的森林更加生动、 真实。使我原本要关门大吉的大脑，又重新开张。书真是我的知音，它每次都站在我的角度为我思考。 宛如照看我的亲人，总是那么的无微不至。当我生气、愤怒时，它轻轻的在耳际讲述一个故事，使我汹涌澎湃的大海立刻变成宁静的湖水。 当我哭泣时，它会轻轻的诉说起那古老的历史，为我们打开心灵的窗户。"
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