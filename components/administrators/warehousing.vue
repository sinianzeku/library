<template>
    <div class="warehousing">
        
        <div class="warehousing_nav">
            <ul>
                <li>
                    <div class="warehousing_position">
                        <i class="el-icon-add-location"></i>当前位置 > 管理员 > 新书入库
                    </div>
                    <div class="about">
                        <div class="warehousing-left">



                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                                <el-form-item label="封面" prop="image">
                                    <div >
                                        <canvas 
                                            ref="imgPreview"
                                            height="120"
                                            width="100"
                                            style="border:1px dashed #ccc"
                                            >
                                        </canvas>
                                    </div>
                                    <input 
                                        type="file"
                                        accept="image/*"
                                        @change="chooseImg" 
                                        style="float:left"/>
                                </el-form-item>
                                <el-form-item label="条码号" prop="input1">
                                    <el-input v-model="ruleForm.input1"  placeholder="请输入条码号" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item label="书名" prop="input2">
                                    <el-input v-model="ruleForm.input2"  placeholder="请输入书名" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item label="作者" prop="input3">
                                    <el-input v-model="ruleForm.input3"  placeholder="请输入作者" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item label="出版社" prop="input4">
                                    <el-input v-model="ruleForm.input4"  placeholder="请输入出版社" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item label="出版时间" prop="input5">
                                    <el-date-picker
                                    v-model="ruleForm.input5"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd">
                                    </el-date-picker>
                                    <!-- <el-input v-model="ruleForm.input5"  placeholder="请输入出版时间" style="width:60%;"></el-input> -->
                                </el-form-item>
                                <el-form-item label="文献类型" prop="region1">
                                    <el-select v-model="ruleForm.region1" placeholder="请选择文献类型" style="width:60%;">
                                        <el-option label="中文图书" value="中文图书"></el-option>
                                        <el-option label="西文图书" value="西文图书"></el-option>
                                    </el-select>
                                </el-form-item>

                            </el-form>
                        </div>
                        <div class="warehousing-right">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="类型一" prop="region2">
                                    <el-select v-model="ruleForm.region2" placeholder="请选择图书类型" style="width:60%;">
                                        <el-option label="文学" value="文学"></el-option>
                                        <el-option label="流行" value="流行"></el-option>
                                        <el-option label="文化" value="文化"></el-option>
                                        <el-option label="生活" value="生活"></el-option>
                                        <el-option label="科技" value="科技"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="类型二" prop="region3">
                                    <el-select v-model="ruleForm.region3" placeholder="请选择图书类型" style="width:60%;">
                                        <el-option label="小说" value="小说"></el-option>
                                        <el-option label="散文" value="散文"></el-option>
                                        <el-option label="诗歌" value="诗歌"></el-option>
                                        <el-option label="武侠" value="武侠"></el-option>
                                        <el-option label="传记" value="传记"></el-option>
                                        <el-option label="励志" value="励志"></el-option>
                                        <el-option label="编程" value="编程"></el-option>
                                        <el-option label="音乐" value="音乐"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="图书简介" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc" :rows="5" placeholder="请输入内容" style="width:90%;"></el-input>
                                </el-form-item>
                                <el-form-item label="馆藏地" prop="input6">
                                    <el-input v-model="ruleForm.input6"  placeholder="请输入馆藏地" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item label="架位" prop="input7">
                                    <el-input v-model="ruleForm.input7" placeholder="请输入架位" style="width:60%;"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="warehousing()">确定入库</el-button>
                                </el-form-item>
                            
                            </el-form>   
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
    props:['items'],
    data(){
        return{
            username: '',
            password: '',
            radios:'',
            imageUrl: '',
            base64:'',
            ruleForm: {
                input1: '',
                input2: '',
                input3: '',
                region1: '',
                region2: '',
                region3: '',
                // type: [],
                desc: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
            },
            rules: {
                input1: [
                    { required: true, message: '请输入书籍编号', trigger: 'blur' },
                ],
                input2: [
                    { required: true, message: '请输入书名', trigger: 'blur' },
                ],
                input3: [
                    { required: true, message: '请输入作者', trigger: 'blur' },
                ],
                input4: [
                    { required: true, message: '请输入出版社', trigger: 'blur' },
                ],
                input5: [
                    { required: true, message: '请输入出版时间', trigger: 'blur' },
                ],
                region1: [
                    { required: true, message: '请选择图书类型', trigger: 'change' }
                ],
                region2: [
                    { required: true, message: '请选择图书类型', trigger: 'change' }
                ],
                region3: [
                    { required: true, message: '请选择图书类型', trigger: 'change' }
                ],
                // type: [
                //     { type: 'array', required: true, message: '请至少选择一个图书性质', trigger: 'change' }
                // ],
                desc: [
                    { required: true, message: '请填写图书简介', trigger: 'blur' }
                ],
                input6: [
                    { required: true, message: '请输入馆藏地', trigger: 'blur' },
                ],
                input7: [
                    { required: true, message: '请输入架位', trigger: 'blur' },
                ],
            },
        }
    },
    methods:{
        warehousing:async function(){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/newbooksinstorage/warehousing',
            {book_synopsis:self.ruleForm.desc,book_name:self.ruleForm.input2,book_auther:self.ruleForm.input3,book_publisher:self.ruleForm.input4,
            book_room:self.ruleForm.input6,book_bookshelf:self.ruleForm.input7,book_publication_date:self.ruleForm.input5,
            book_code:self.ruleForm.input1,category1:self.ruleForm.region2,category2:self.ruleForm.region3,book_language:self.ruleForm.region1,
            imges:self.base64})
            console.log(status,list)
            this.list=list.status
            // location.href="/collection"
            if(list.status==0){ 
                this.$alert( '入库成功', {
                    confirmButtonText: '确定',
                    type: 'success'
                    });
                location.href="/newbooksinstorage"
            }else{
                this.$alert( list.message , '入库失败', {
                    confirmButtonText: '确定',
                    type: 'error'
                    });
            }
            
        },
        chooseImg (event) {
            console.log(event)
            let file = event.target.files[0]
            let reader = new FileReader()
            let img = new Image()
            // 读取图片
            reader.readAsDataURL(file)
            // 读取完毕后的操作
            reader.onloadend = (e) => {
                img.src = e.target.result
                // 这里的e.target就是reader
                // console.log(reader.result)
                // reader.result就是图片的base64字符串
                this.base64 = reader.result
            }
            // 预览图片
            let canvas = this.$refs['imgPreview']
            let context = canvas.getContext('2d')
            img.onload = () => {
                img.width = 100
                img.height = 100
                // 设置canvas大小
                canvas.width = 100
                canvas.height = 120
                // 清空canvas
                context.clearRect(0, 0, 100, 120)
                // 画图
                context.drawImage(img, 0, 0, 100, 120)
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
    },

}
</script>

<style>
.warehousing{
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
.warehousing .warehousing_nav{
    margin-left: 5%;
    overflow: hidden;
}
.warehousing .warehousing_nav1{
    margin-left: 30%;
}
.warehousing .warehousing_nav1 ul li{
    float: left;
    width: 40%;
    list-style: none;
}
.warehousing_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.warehousing_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: white;
}
.warehousing_box1 h3{
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
    color: #CD3339;
}
.warehousing .warehousing_box1 .information{
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
.warehousing_nav .about{
    border: 1px solid #dad4d4;
    width: 91.3%;
    height: auto;
    background-color: white;
    padding: 3% 3%;
    overflow: hidden;
}
.warehousing_nav .about .name div{
    position:relative;
    /* float: left; */
    /* width: 15%; */
    margin-right: 3%;
}
.warehousing-left{
    width: 50%;
    float: left;
    border-right: 1px solid #dad4d4;
    height: auto;
    overflow: hidden;
}
.warehousing-right{
    width: 50%;
    float: right;
    /* border: 1px solid #dad4d4; */
    /* overflow: hidden; */
    padding-left: 3%;
}
/* 上传图片 */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>