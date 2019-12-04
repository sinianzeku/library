<template>
    <div>
        <!-- 选择图片 -->{{imageUrl}}
        
        <el-button  style="position: relative;" type="primary" plain size="small">更换头像
          <input class="change-photo-btn" type="file" accept="image/jpg,image/png,image/jpeg,image/bmp" @change="chooseImg">
        </el-button>
<!-- <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <div v-if="imageUrl" class="block" style="margin-left:3%;">
      <el-avatar ref="imgPreview" :size="100" :src="imageUrl" style="float:left;margin-right:2%;">
      </el-avatar>
  </div>
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload> -->

        <!-- <input type="file"
               accept="image/*"
               @change="chooseImg" 
               value="上传图片"/> -->
        <!-- 预览图片 -->
      <!-- <canvas ref="imgPreview"
                height="0"
                width="0"> -->
        <div v-if="imageUrl" class="block" style="margin-left:3%;">
      <el-avatar ref="imgPreview" :size="100" :src="imageUrl" style="float:left;margin-right:2%;">
      </el-avatar>
  </div>   
                
      <!-- </canvas> -->
        <!-- 提交图片 -->
        <button @click="uploadImg">提交图片</button>
        <!-- 通过后台返回的url向文件服务器请求图片 -->
        <!-- <img :src="imgUrlFromServer"> -->
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'uploadImg',
    data () {
        return {
            imgUrlFromServer: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            base64: '',
            imageUrl: '',
        }
    },
    methods: {
        chooseImg (event) {
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
            this.imageUrl=URL.createObjectURL(file);
            console.log('ff',)
            // this.imageUrl= URL.createObjectURL(file.raw);
            // 预览图片
            // let canvas = this.$refs['imgPreview']
            // let context = canvas.getContext('2d')
            // img.onload = () => {
            //     img.width = 100
            //     img.height = 100
            //     // 设置canvas大小
            //     canvas.width = 100
            //     canvas.height = 100
            //     // 清空canvas
            //     context.clearRect(0, 0, 100, 100)
            //     // 画图
            //     context.drawImage(img, 0, 0, 100, 100)
            // }
        },
        uploadImg () {
            axios.post('http://1.2.3.4:8080/uploadImg', {
                img: this.base64
            }).then(response => {
                this.imgUrlFromServer = response.data.imgUrl
            })
        },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
    
    }
}
</script>
<style >
/* div{ position: relative; } */
.change-photo-btn{ 
  position: absolute; 
  top: 0; 
  left: 0; 
  opacity: 0; 
  cursor: pointer; 
  height: 40px; 
  width: 88px;
}
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