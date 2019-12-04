<template>
    <div class="bookinformation">
        <div class="bookinformation_nav">
            <ul>
                <li>
                    <div class="bookinformation_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 书目检索 > 检索结果 > 详细内容
                    </div>
                </li>
            </ul>
        </div>
        <div class="bookinformation_nav1">
            <ul>
                <li>
                    <div class="bookinformation_box1">
                        <div v-for="(item,idx) in result2" :key="idx">
                            <div><p>题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{item.book_name}}</p></div>
                            <div><p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：{{item.book_auther}}</p></div>
                            <div><p>出&nbsp;&nbsp;版&nbsp;社：{{item.book_publisher}}</p></div>
                            <div><p>书籍编号：{{item.book_id}}</p></div>
                            <div style="width:8%;float:left"><p>图书简介：</p></div>
                            <div style="width:85%;margin-left:8%; text-align: justify"><p>{{item.book_synopsis}}</p></div>
                            <div style="width:100%;height:1px;overflow: hidden;"></div>
                            <div><p>文献类型：{{item.book_language}}</p></div>
                            <div><p>图书类型：{{item.book_category}}</p></div>
                            <div style="margin-top:15px;"></div>
                            
                        </div>
                        <div style="overflow:hidden">
                            <!-- <div style="float:right;font-size:14px;color:666;line-height:15px;cursor: pointer;">
                                <i class="el-icon-plus"></i>我的书架
                            </div> -->
                            <el-popover
                                placement="top-start"
                                width="auto"
                                trigger="hover"
                                content="添加到我的书架">
                                <div @click="bookshelf()" slot="reference" style="float:right;font-size:14px;color:666;line-height:15px;cursor: pointer;">
                                <i class="el-icon-plus"></i>我的书架
                            </div>
                            </el-popover>
                            <div class="bookinformation_line"></div>
                        </div>
                        <el-table
                            :data="result"
                            style="width: 100%;border: 1px solid #dad4d4;"
                            empty-text="暂时没有该书的馆藏！"
                            size="small"
                            >
                            <el-table-column
                            prop="id"
                            type="index"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop="book_id"
                            label="书籍编号"
                            width="auto"
                            style="cursor: pointer;">
                            </el-table-column>
                            <el-table-column
                            prop="book_room"
                            label="馆藏地"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_bookshelf"
                            label="架位"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="book_state"
                            label="书刊状态"
                            width="auto">
                            </el-table-column>
                        </el-table> 
                    </div>
                    <br>
                </li>
            </ul>
        </div>
        <div class="bookinformation_nav2">
            
            <br><br>
        </div>
        
        <foot/>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import foot from '../index/foot.vue'
import { async } from 'q';
export default {
    components: {
        foot,
    },
    data(){
        return{
            result:[],
            result1:[],
            result2:[],
            username:'',
            password:'',
            radios:'',
        }
    },
       
    methods:{
        bookshelf:async function(){
            if(this.username&&this.radios==1){
                alert('您是管理员，不能进行添加书架操作！')
            }else if(this.username){
                // console.log('ss',this.result2[0].book_id)
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/detailedcontent/bookshelf',
                {book_id :self.result2[0].book_id,user_name:self.username})
                // console.log(status,list)
                // console.log(this.result2.book_id)
                if(list.status==0){
                    this.$alert('添加成功', {
                        confirmButtonText: '确定',
                        type:'success'
                        });
                        // location.href="/detailedcontent"
                }else{
                    this.$alert(list.message, {
                        confirmButtonText: '确定',
                        type:'error'
                        });
                }
                
            }else{
                this.$confirm('请先登录', {
                    confirmButtonText: '前往登录',
                    cancelButtonText: '取消',
                    }).then(() => {
                        location.href="/mylibrary"
                        
                        
                    }).catch(() => {
                          console.log('xx',this.state)
                    });  
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
        this.getCookie();
        this.result1=JSON.parse(sessionStorage.getItem("searchresult"));

     },
    computed:{
        data1(){
            this.result=this.result1
            this.result2=this.result
        } 
    }
}
</script>

<style>
.bookinformation{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
}
ul li{
    list-style: none;
}
.bookinformation .bookinformation_nav2,.bookinformation .bookinformation_nav1,.bookinformation .bookinformation_nav{
    margin-left: 5%;
}
.bookinformation_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.bookinformation_box1{
    position: relative;
    width: 91.3%;
    border: 1px solid #dad4d4;
    height: auto;
    background-color: white;
    padding: 2%;
}
.bookinformation_nav2 ul li{
    /* width: 90%; */
    height: auto;
    border: 1px solid #dad4d4; 
    background-color: white;
}
.bookinformation_box2{
    width: 100%;
}
.bookinformation_box1 p{
    font-size: 15px;
    line-height: 30px;
    color: #666666;
}
.bookinformation_line{
    border-bottom:#ccc dashed 1px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.bookinformation_box1 .text{
    border: 1px solid #dad4d4; 

    text-align: justify;
    height: 110px;
    width: 90%;
    float: right;
    
}
</style>