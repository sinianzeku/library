<template>
    <div class="welfare">
        <!-- 公益讲座 -->
        <div class="welfare_nav">
            <ul>
                <li>
                    <div class="welfare_position">
                        <i class="el-icon-add-location"></i>当前位置 > 图书活动 > 公益讲座
                    </div>
                </li>
            </ul>
        </div>
        <div class="welfare_nav1">
            <ul>
                <li>
                    <div class="welfare_box1">
                        <h3>公益讲座</h3>
                        <div class="information">
                            <hr><br>
                            <div v-show="shows">
                                <div style="border:1px solid #dad4d4;overflow: hidden">
                                    <img src="http://47.96.139.19:6868/library/images/welfare1.jpg" width="40%" height="50%" style="float:left; cursor: pointer;"  @click="entryentry()"/>
                                    <div style="padding:0 2% 0 42%;">
                                        <div style="font-size:15px;line-height:35px;margin-top:5px;"><b>讲题：</b>图书的重要性</div>
                                        <div style="font-size:15px;line-height:35px;"><b>讲座时间：</b>2019年10月26日（周六 14：00）</div>
                                        <div style="font-size:15px;line-height:35px;"><b>主讲人：</b>xxx</div>
                                        <div style="font-size:15px;line-height:35px;"><b>主办单位：</b>xxx图书馆</div>
                                        <div style="font-size:15px;line-height:35px;"><b>讲座地点：</b>xxx图书馆</div>
                                    </div>
                                </div>
                                <br><br>
                                <br><br>
                                <br><br>
                                <br><br>
                                <br><br>
                            </div>
                            <div v-show="!shows">
                                <div style="text-align:center;font-size:18px;margin-bottom:10px;color:#333"><b>图书的重要性</b></div>
                                <div class="welfare_activity" style="overflow: hidden;"> 
                                    <img src="http://47.96.139.19:6868/library/images/welfare1.jpg" width="40%" height="50%" style="float:left"/>
                                    <div style="padding:0 2% 0 42%;">
                                        <div style="font-size:15px;line-height:35px;margin-top:5px;"><b>讲题：</b>图书的重要性</div>
                                        <div style="font-size:15px;line-height:35px;"><b>讲座时间：</b>2019年10月26日（周六 14：00）</div>
                                        <div style="font-size:15px;line-height:35px;"><b>主讲人：</b>xxx</div>
                                        <div style="font-size:15px;line-height:35px;"><b>主办单位：</b>xxx图书馆</div>
                                        <div style="font-size:15px;line-height:35px;"><b>讲座地点：</b>xxx图书馆</div>
                                    </div>
                                    <div style="width:100%;height:10px;overflow: hidden;"></div>
                                    <div style="padding:0 2% 0 2%;"><b style="float:left">讲座概要：</b></div>
                                    <div style="padding:0 2% 0 2%;">
                                        <div style="line-height:30px;">古人云：“书中自有黄金屋。” 书是一切文明的起源，它带领着我们领略了古代中国的文明，也讲述了当代中国的繁荣昌盛。
                                            莎士比亚也说过：“书籍是世界的营养品。它就宛如一个大型超市，在那里，我们可以各取所需。取长补短，
                                            用那优美的语言来充实自己，特别针对我这一类型的‘患者’—词穷，它可以使干燥的草地，变换成美丽的草原，使我的森林更加生动、
                                            真实。使我原本要关门大吉的大脑，又重新开张。书真是我的知音，它每次都站在我的角度为我思考。
                                            宛如照看我的亲人，总是那么的无微不至。当我生气、愤怒时，它轻轻的在耳际讲述一个故事，使我汹涌澎湃的大海立刻变成宁静的湖水。
                                            当我哭泣时，它会轻轻的诉说起那古老的历史，为我们打开心灵的窗户。"
                                        </div>
                                    </div>
                                    <div style="width:100%;height:100px;overflow: hidden;"></div>
                                </div>
                            </div>
                            <br><br>
                        </div> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="welfare_nav2">
            <ul>
                <li>
                    <div class="welfare_box2">
                        <h3 class="title">图书活动</h3>
                        <div>
                            <el-button @click="$emit('index4_1')"><i class="el-icon-arrow-right"></i> 主题活动</el-button>
                        </div>
                        <div>
                            <el-button style="color: #CD3339;" @click="$emit('index4_2')"><i class="el-icon-arrow-right"></i> 公益讲座</el-button>
                        </div>
                        <div>
                            <el-button @click="$emit('index4_3')"><i class="el-icon-arrow-right"></i> 志愿活动</el-button>
                        </div>
                        <br>
                    </div>
                    <br>
                    <notice/>
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
    data(){
        return{
            shows:true,
        }
    },
    methods:{
        entryentry(){
            this.shows=!this.shows;
        }
    }

}
</script>

<style>
.welfare{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.welfare .welfare_nav1,.welfare .welfare_nav{
    margin-left: 5%;
}
.welfare .welfare_nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.welfare .welfare_nav2{
    /* margin-right: 5%; */
    
}
.welfare .welfare_nav2 ul li{
    float: left;
    width: 27%;
    list-style: none;
}
.welfare_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.welfare_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.welfare_box2{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 3px solid blue;
}
.welfare_box2 .title{
    font-size: 22px;
    text-align: left;
    padding-left: 10%;
    font-weight: normal;
    line-height: 44px;
}
.welfare_box2 div{
    margin-left: 10%;
    line-height: 50px;
}
.welfare_box2 div .el-button{
    width: 90%;
    text-align: left;
}
.welfare_box1 h3{
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    line-height: 44px;
    color: #CD3339;
}
.welfare .welfare_box1 .information{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
}
.information .el-input{
    float: inherit;
    width: 49.5%;
    text-align: left;
}
.welfare_activity{
    width: 100%;
    height: auto;
    border: 1px solid #dad4d4; 
}

</style>