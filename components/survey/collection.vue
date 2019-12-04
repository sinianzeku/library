<template>
    <div class="collection">
        <div class="nav">
            <ul>
                <li>
                    <div class="position">
                        <i class="el-icon-add-location"></i>当前位置 > 本馆概况 > 馆藏分布
                    </div>
                </li>
            </ul>
        </div>
        <div class="nav1">
            <ul>
                <li>
                    <div class="box1">
                        <h3>馆藏分布</h3>
                        <div class="text">
                            <hr><br>
                            <div>东馆馆藏分布</div>
                            <el-table
                                :data="tableData1"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop="date"
                                label="楼层"
                                width="80">
                                </el-table-column>
                                <el-table-column
                                prop="name"
                                label="室名"
                                width="130">
                                </el-table-column>
                                <el-table-column
                                prop="address"
                                label="馆藏及服务">
                                </el-table-column>
                            </el-table>
                            <br>
                            <div>西馆馆藏分布</div>
                            <el-table
                                :data="tableData2"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop="date"
                                label="楼层"
                                width="80">
                                </el-table-column>
                                <el-table-column
                                prop="name"
                                label="室名"
                                width="130">
                                </el-table-column>
                                <el-table-column
                                prop="address"
                                label="馆藏及服务">
                                </el-table-column>
                            </el-table>
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
                                <el-button  @click="$emit('index5_1')"><i class="el-icon-arrow-right"></i> 本馆简介</el-button>
                            </div>
                            <div>
                                <el-button style="color: #CD3339;"><i class="el-icon-arrow-right"></i> 馆藏分布</el-button>
                            </div>
                            <br>
                        </div>
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
    data() {
      return {
        tableData1: [{
          date: '1楼',
          name: '密集书库',
          address: '本室收藏各类提存图书，过期报刊合订本。'
        }, {
          date: '2楼',
          name: '社会科学一室',
          address: '本室收藏社会科学类（G类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        }, {
          date: '2楼',
          name: '报刊阅览室',
          address: '本室收藏现期报纸、期刊及近3年期刊合订本，提供查询、阅览等服务（不外借）。'
        }, {
          date: '3楼',
          name: '社会科学二室',
          address: '本室收藏社会科学类（I类）图书，实行开架管理，提供查询、外借、阅览等服务。'
        },{
          date: '3楼',
          name: '社会科学三室',
          address: '本室收藏社会科学类（H类）图书，开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '4楼',
          name: '自然科学一室',
          address: '本室收藏自然科学类（N、O、P、Q、R、S类）图书，实行开架管理。提供检索、外借、阅览等服务。'
        },{
          date: '4楼',
          name: '社会科学二室',
          address: '本室收藏自然科学类（T、U、V、X、Z类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '5楼',
          name: '社会科学四室',
          address: '本室收藏社会科学类（A、B、C、D、E、F类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '5楼',
          name: '社会科学五室',
          address: '本室收藏社会科学类（J、K类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '7楼',
          name: '特藏室',
          address: '本室收藏古籍、工具书、桂东南资料、玉师文件提供检索、阅览等服务。（不外借）'
        }],
        tableData2: [{
          date: '2楼',
          name: '报刊阅览室',
          address: '本室收藏现期报纸、期刊，实行开架管理，提供查询、阅览等服务（不外借）。'
        }, {
          date: '2楼',
          name: '过期报刊室（一）',
          address: '本室收藏过期报刊合订本，提供查询、阅览等服务（不外借）。'
        }, {
          date: '2楼',
          name: '过期报刊室（二）',
          address: '本室收藏过期报刊合订本，提供查询、阅览等服务（不外借）。'
        },{
          date: '3楼',
          name: '综合一室',
          address: '本室收藏社科类（H、I、J类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '4楼',
          name: '综合二室',
          address: '本室收藏社会科学类（A、B、C、D、E、F、G、K类）图书，实行开架管理，提供检索、外借、阅览等服务。'
        },{
          date: '5楼',
          name: '提存书库',
          address: '	本室收藏各类提存图书（随叫随开）。'
        }],
      }
    },
    methods:{
        
    }

}
</script>

<style>
.collection{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.collection .nav1,.collection .nav{
    margin-left: 5%;
}
.collection .nav1 ul li{
    float: left;
    width: 63%;
    list-style: none;
}
.collection .nav2{
    /* margin-right: 5%; */
    
}
.collection .nav2 ul li{
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
.collection .box1 .text{
    padding: 0 5%;;
    text-align: justify;
    line-height: 24px;
    overflow: auto;
    text-align: center;
}
.collection .box1 .text .el-table{
    text-align: justify;
    line-height: 24px;
    overflow: auto;
    text-align: center;
}
</style>