<template>
    <div class="administratorrights">
        
        <div class="administratorrights_nav">
            <ul>
                <li>
                    <div class="administratorrights_position">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员
                    </div>
                    <div class="about">
                        <div class="administrator-data">
                            <div class="administrator-information" style="float: left;height: 250px;width: 48.5%;margin-left:0;border: 1px solid #dad4d4;">
                                <div class="administrator-information-left">
                                    <!-- <div class="administrator-portrait">
                                        <img src="images/book-001.png" width="100%" height="100%;" style="border-radius: 50%;"/>
                                    </div> -->
                                    <div style="text-align:center">
                                        <el-avatar :size="100" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                                    </div>
                                    <div style="text-align:center;color:black;font-size:15px;line-height:30px;">管理员</div>
                                </div>
                                <div class="administrator-information-right" >
                                    <div style="color:black;font-size:15px;margin-bottom:10px;">网站信息</div>
                                    <div style="line-height:33px;">注册用户：{{this.listb.user_number}}
                                        <nuxt-link to="/usermanagement"><el-button type="primary" plain size="mini" style="float:right">用户管理</el-button></nuxt-link></div>
                                    <div style="line-height:33px;">馆藏书籍：{{this.listb.book_number}}
                                        <nuxt-link to="/collection"><el-button type="primary" plain size="mini" style="float:right">查看详情</el-button></nuxt-link></div>
                                    <div style="border-bottom: #dad4d4 solid 1px;margin-top:10px;"></div>
                                    <div style="color:black;font-size:15px;margin-bottom:10px;margin-top:10px;">借阅信息</div>
                                    <div style="line-height:33px;">借出书籍：{{this.listb.borrowing_number}} 
                                        <nuxt-link to="/lentout"><el-button type="primary" plain size="mini" style="float:right">查看详情</el-button></nuxt-link></div>
                                    <div style="line-height:33px;">借阅记录：{{this.listb.record_number}}
                                        <nuxt-link to="/borrowingrecords"><el-button type="primary" plain size="mini" style="float:right">查看详情</el-button></nuxt-link></div>
                                </div>
                                
                            </div>
                            <div class="administrator-echarts" style="height: 250px;width: 48.5%;border: 1px solid #dad4d4;">
                                <div style="padding-left:3%;font-size:16px;color:black;margin-top:5px;">图书借阅条形图</div>
                                <div id="container" style=" width: 100%;height: 250px;margin-top:-30px;"></div>
                            </div>

                        </div>
                        <br>
                        <div class="administrator-operation">
                            <nuxt-link to="/borrowbooks"><el-button type="primary" style="margin-left:0;">借书</el-button></nuxt-link>
                            <nuxt-link to="/returnbooks"><el-button type="success">还书</el-button></nuxt-link>
                            <nuxt-link to="/newbooksinstorage"><el-button type="warning">新书入库</el-button></nuxt-link>
                            <nuxt-link to="/newbookshelves">
                       
                                <el-button type="danger">收件箱</el-button>
                               
                            </nuxt-link>
                        </div>                        
                 
                    </div>
                </li>
            </ul>
        </div>
        
        <br>
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
export default {
    components: {
        foot,
    },
    props:['listb'],
    data(){
        return{
            username: '',
            password: '',
            radios:'',

        }
    },
    head:{
        script:[
            {src:'js/echarts.common.min.js'},

        ],
        link: [
            // { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        echarts(){
            var dom = document.getElementById("container");
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            app.title = '图书借阅数据柱形图';
            var namedate = [this.listb.borrowing_condition.month[5], this.listb.borrowing_condition.month[4], this.listb.borrowing_condition.month[3], this.listb.borrowing_condition.month[2], this.listb.borrowing_condition.month[1],this.listb.borrowing_condition.month[0],];
            var numdate = [this.listb.borrowing_condition.number[5], this.listb.borrowing_condition.number[4], this.listb.borrowing_condition.number[3], this.listb.borrowing_condition.number[2], this.listb.borrowing_condition.number[1], this.listb.borrowing_condition.number[0]];
            var colorlist = [];
            numdate.forEach(element => {
                if (element < 60) {
                    colorlist.push(["#fc7095", "#fa8466"])
                } else if (element >= 60 && element < 90) {
                    colorlist.push(["#386ffd", "#74b3ff"])
                } else {
                    colorlist.push(["#1aa8ce", "#49d3c6"])
                }
            });
            option = {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: namedate,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#4dd1c4",
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#999'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 次',
                            show: true,
                            textStyle: {
                                color: '#999'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#4dd1c4",
                                width: 1
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#ddd'
                            }
                        }

                    }
                ],
                series: [
                    {
                        name: '借阅次数',
                        type: 'bar',
                        barWidth: '60%',
                        data: numdate,
                        itemStyle: {
                            normal: {
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 1, color: 'red'},
                                //         {offset: 0, color: 'orange'}
                                //     ]
                                // )
                                color: function (params) {
                                    // var colorList = colorlist;
                                    // return colorList[params.dataIndex];
                                    var colorList = colorlist

                                    var index = params.dataIndex;
                                    // if(params.dataIndex >= colorList.length){
                                    //         index=params.dataIndex-colorList.length;
                                    // }
                                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                        [
                                            { offset: 1, color: colorList[index][0] },
                                            { offset: 0, color: colorList[index][1] }
                                        ]);


                                }
                            }
                        }
                    }
                ]
            };
            
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
                }
            },
        getCookie: function() {
        // console.log(document.cookie)
        if (document.cookie.length > 0) {
            var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
            for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split("=="); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "username") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.username = bytes.toString(CryptoJS.enc.Utf8); //保存到保存数据的地方
            } else if (arr2[0] == "token") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.password = bytes.toString(CryptoJS.enc.Utf8);
            }else if (arr2[0] == "radios") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.radios = bytes.toString(CryptoJS.enc.Utf8);
                // console.log('ss',this.password)
                }
                }
            }
        },
        
    },
    mounted:function(){
        //  this.items.name=localStorage.getItem("name");
        this.getCookie();
        this.echarts();
    },

}
</script>

<style>
.administratorrights{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
    overflow: hidden;
}
ul li{
    list-style: none;
}
.administratorrights .administratorrights_nav{
    margin-left: 5%;
    overflow: hidden;
}
.administratorrights .administratorrights_nav1{
    margin-left: 30%;
}
.administratorrights .administratorrights_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.administratorrights_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.administratorrights_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.administratorrights_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.administratorrights .administratorrights_box1 .information{
    padding: 0 10%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
    width: 100%;
}
.information .form{
    line-height: 50px;
}
.information .form .el-input{
    width: 75%;
    margin-left: 2%;
}
/* .information .form .el-button{
    float: right;
} */
.administratorrights_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
}
.administratorrights_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}
.administrator-operation{
    /* border: 1px solid #dad4d4; */
    width: 100%;
}
.administrator-operation .el-button{
    width: 23%;
    margin-left: 2%;
    height: 120px;
    font-size: 18px;
}
.administrator-data{
    /* border: 1px solid #dad4d4; */
    position: relative;
    overflow: hidden;
    margin: 0;
    font-size: 14px;
    color: #666666;
}
.administrator-information{
    margin-left:0;
    overflow: hidden;
    padding: 20px 2%;
}
.administrator-echarts{
    float:right;
    overflow: hidden;
    margin-right:0.5%;

}
.administrator-information-left{
    width: 30%;
    border-right:1px solid #dad4d4;
    height: 210px;
    overflow: hidden;
    float: left;
    padding-right: 4%;
}
.administrator-portrait{
    border:1px solid #dad4d4;
    height: 105px;
    border-radius: 50%;
    /* padding:0 4%; */
}
.administrator-information-right{
    width: 70%;
    height: 210px;
    overflow: hidden;
    padding-left:4%;
    
}
</style>