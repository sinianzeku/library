<template>
    <div class="user">
        <div class="user_nav">
            <ul>
                <li>
                    <div class="user_position" :data="data1">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 用户管理
                    </div>
                    <div class="about">
                        <el-input style="width:40%;" size="medium" v-model="input" placeholder="请输入用户名"></el-input>
                        <el-button type="primary" size="medium" @click="searchuser()">搜索</el-button>
                        <br><br>
                        <el-table
                        size="small"
                        empty-text="很遗憾，没有用户！"
                        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        style="width: 100%;border:1px solid #dad4d4">
                            <el-table-column
                            prop="user_account"
                            label="用户名"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_name"
                            label="姓名"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_phone"
                            label="联系方式"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_email"
                            label="邮箱"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="user_registration_time"
                            label="注册时间"
                            width="auto">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <!-- <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        :hide-on-single-page="value"
                        small
                        style="float:right" 
                        layout="total, sizes, prev, pager, next, jumper"
                        :page-sizes="[5, 10, 20]"
                        :page-size="pagesize"
                        :total="tableData.length"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange">
                        </el-pagination>
                        <br>
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
            input:'',
            tableData:[],
            currentPage: 1,
            pagesize:10,
            currpage:1,
            value:true,

        }
    },
    methods:{
        // handleEdit(index, row) {
        //     console.log(index, row);
        // },
        handleDelete(index, row) {
            console.log(index, row);
            this.$confirm('删除此用户其所有信息都将被删除，请谨慎操作！'+'点击“确定”删除用户'+ ' ' +'“'+row.user_account+'”', '请确认以下信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(() => {
                    this.state(row);
                   
                    
                }).catch(() => {
                        console.log('xx',this.state) 
                });  
        },
        state:async function(row){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/usermanagement/userdelete', 
            {user_name:row.user_account})

            if(list.status==0){
                this.$alert('删除成功', {
                    confirmButtonText: '确定',
                    type:'success'
                    });
                    let {status,data:{list}} = await self.$axios.post('/usermanagement/userlist')
                    self.tableData=list.data
            }
            
        },
        searchuser:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/usermanagement/searchuser', 
            {user_name:self.input})
            self.tableData=list.data
        },
        handleSizeChange:function(size) {
          // console.log(`每页 ${val} 条`);
         this.pagesize=size;
        },
        handleCurrentChange:function(currentPage) {
        // console.log(`当前页: ${val}`);
            this.currentPage=currentPage;
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
    },
    computed:{
        data1(){
            this.tableData=this.listb
        }
    }

}
</script>

<style>
.user{
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
.user .user_nav{
    margin-left: 5%;
    overflow: hidden;
}
.user .user_nav1{
    margin-left: 30%;
}
.user .user_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.user_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.user_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.user_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.user .user_box1 .information{
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
.user_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
}
.user_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}

</style>