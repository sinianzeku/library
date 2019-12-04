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
                            <div style="font-size:18px;color:#CD3339;text-align:center">《图书管理规定》</div>
                            <div style="font-size:14px;color:#666;text-align:center;line-height:40px;">发布时间：2019-09-01 | 作者：图书馆</div>
                            <div style="border:0.5px solid #ccc;"></div>
                            <div style="line-height:32px;color:#333;margin-top:10px;">
                                <div style="text-indent:2em;"><b>第一条</b>
                                    图书实行开架借阅，进入书库不得携带个人物品。
                                </div>
                                <div style="text-indent:2em;"><b>第二条</b>
                                    读者选书时应正确使用书位牌，选好图书后到借阅处办理借阅手续。办借阅手续前，读者要仔细查看书中有无缺页和污损，如发现图书已有损坏，要及时告知图书管理人员并加盖破损章。否则，在还书时发现以上情况，应由借书人负责。
                                </div>
                                <div style="text-indent:2em;"><b>第三条</b>
                                    读者还书须到借阅处办理还书。
                                </div>
                                <div style="text-indent:2em;"><b>第四条</b>
                                    图书续借，每册图书只能续借一次。如有图书逾期未还时，不能续借。
                                </div>
                                <div style="text-indent:2em;"><b>第五条</b>
                                    借书数量及期限。每人可借图书5册，借阅期限为30天。
                                </div>
                                <div style="text-indent:2em;"><b>第六条</b>
                                    图书馆的书刊资料是国有固定财产，读者应爱护，不得污损、圈注、折叠、剪裁、 描画和遗失。若发生以上情况，应照章赔偿。
                                </div>
                                <div style="text-indent:2em;"><b>第七条</b>
                                    图书馆的书刊资料是国有固定财产，读者应爱护，不得污损、圈注、折叠、剪裁、 描画和遗失。若发生以上情况，应照章赔偿。
                                    <div style="text-indent:2em;">
                                        （一）读者在还书时如发现有缺页、污损现象而无破损章的，除批评教育外，予以罚款处理。
                                    </div>
                                    <div style="text-indent:2em;">
                                        （二）撕破书页或缺页两页者处以原价的50%罚款；三至五页者处以原价罚款；五页以上者按丢失图书处理。
                                    </div>
                                    <div style="text-indent:2em;">
                                        （三）污损图书者处以原价的20%至3倍的罚款。
                                    </div>
                                </div>
                                <div style="text-indent:2em;"><b>第八条</b>
                                    图书条形码的完好是保证图书正常流通的重要条件。损坏条形码，罚款5元。
                                </div>
                                <div style="text-indent:2em;"><b>第九条</b>
                                    随书光盘是图书资料的一部分，丢失、损坏随书光盘，罚款10元。
                                </div>
                                <div style="text-indent:2em;"><b>第十条</b>
                                    图书超期按以下规定予以处罚。
                                    <div style="text-indent:2em">
                                        （一）为了提高图书流通率，保护读者权益，对未能在规定日期之前归还的读者，本馆实行借阅逾期处罚制度，外借图书超过借阅期，停借图书2周。
                                    </div>
                                    <div style="text-indent:2em">
                                        （二）读者长期到外地实习时，应在实习前还清所有图书，否则按逾期处理。
                                    </div>
                                </div>
                                <div style="text-indent:2em;"><b>第十一条</b>
                                    所遗失的书刊经赔偿后，又找到原书刊时，可将其交还图书馆，原赔偿款收据经图书馆负责人签字认可后可退还赔偿金，限定在遗失当学期内办理退赔手续。
                                </div>
                                <div style="text-indent:2em;"><b>第十二条</b>
                                    阅览室是公共学习场所，读者要注意言谈举止、文明礼貌。要求仪容整洁，不穿背心、拖鞋入馆；保持室内安静，禁止大声喧哗，不得在阅览室内接打电话，以免影响他人。
                                </div>
                                <div style="text-indent:2em;"><b>第十三条</b>
                                    本管理制度解释权归学校图书馆，自发布之日起施行。
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