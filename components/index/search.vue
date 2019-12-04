<template>
    <div class="search">
        <div class="search_nav">
            <ul>
                <li>
                    <div class="search_position" :data="data5">
                        <i class="el-icon-add-location"></i>当前位置 > 首页
                        
                    </div>
                </li>
            </ul>
        </div>
        <div class="search_nav1">
           
            <ul style="width: 63%;">
                <li>
                    <div class="search_box1">
                        <el-input
                            placeholder="请输入关键字"
                            suffix-icon="el-icon-edit el-input__icon"
                            v-model="input"
                            autocomplete="on"
                            size="large"
                            clearable>
                        </el-input>
                        <!-- <router-link :to="{path: '/search', query: {}}"> -->
                            <el-button type="primary" icon="el-icon-search" @click="query()">搜索</el-button>
                        <!-- </router-link> -->
                        <br><br>
                        <div>
                            <el-radio v-model="radio" label="书名">书名</el-radio>
                            <el-radio v-model="radio" label="作者">作者</el-radio>
                        </div>
                        
                    </div>
                    <br>
                    <div class="slide_box">
                        <div class="slide-left">
                            <div class="block">
                                <el-carousel height="245px">
                                    <el-carousel-item v-for="(item,idx) in images" :key="idx">
                                        <img :src="item.url" alt="幻灯片" width="100%" height="100%">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                        <div class="slide-right">
                            <router-link :to="{path: '/activity', query: { index4:1 }}"><div>&nbsp;&nbsp;主题活动<i class="el-icon-arrow-right"></i></div></router-link>
                            <router-link :to="{path: '/activity', query: { index4:2 }}"><div>&nbsp;&nbsp;公益讲座<i class="el-icon-arrow-right"></i></div></router-link>
                            <router-link :to="{path: '/activity', query: { index4:3 }}"><div>&nbsp;&nbsp;志愿服务<i class="el-icon-arrow-right"></i></div></router-link>
                            <a href="/survey"><div>&nbsp;&nbsp;本馆概况<i class="el-icon-arrow-right"></i></div></a>
                            <a href="/feedback"><div>&nbsp;&nbsp;读者反馈<i class="el-icon-arrow-right"></i></div></a>
                        </div>
                    </div>
                    <br>
                    <div class="popular_box">
                        <section class="aui-flexView">
                            <div class="aui-flex">
                                <div class="aui-flex-box">
                                    <h2>热门推荐<a href="/popularbook"><span style="float:right;font-weight:550;font-size:0.875rem;margin-right:2rem;">更多 >> </span></a></h2>
                                </div>
                            </div>
                            
                            <div class="aui-list-theme-box">
                                <div id="demo7"> 
                                    <div id="indemo1"> 
                                        <div id="demo8"> 
                                            <a href="#" class="aui-list-item" v-for="(item,idx) in data" :key="idx" @click="popularnewbook(item)">
                                                <div class="aui-list-theme-img">
                                                    <img width="100%" height="100%" :src="item.img"/>
                                                </div>

                                                <div class="aui-list-theme-message">
                                                    <h3 class="aui-list-theme-title">{{item.book_name}}</h3>
                                                    <p class="aui-list-theme-author">{{item.author}}</p>
                                                </div>
                                            </a>
                                        </div> 
                                        <div id="demo9"></div> 
                                    </div> 
                                </div>

                            </div>
                        </section>
                    </div>
                    <br><br>
                    
                </li>
            </ul>
        </div>

        <div class="search_nav2">
            <br><br>
            <ul>
                <li style="float: left;width: 28%;">
                    
                    <div class="search-box-login" v-if="username&&radios==0">
                        <div style="font-size:16px;text-align:center"><b>用户须知</b></div>
                        <p style="font-size:15px;text-indent:2em;text-align: justify">为了图书室的正常使用,维护图书室的秩序,给各位家人营造良好的学习氛围,请大家仔细阅读以下规则:</p>
                        <el-button type="text" style="font-size:15px">
                            <a href="/library_announcement_6">《图书管理规定》</a>
                        </el-button>
                        <p style="font-size:15px;text-align:right;">请大家自觉遵守,谢谢!</p>
                        
                    </div>
                    <div class="search-administrators" v-else-if="username&&radios==1">
                        <nuxt-link to="/borrowbooks"><el-button type="primary" style="font-size:16px;">借书</el-button></nuxt-link>
                        <nuxt-link to="/newbooksinstorage"><el-button type="warning" style="margin-left:2%;font-size:16px;">新书入库</el-button></nuxt-link>
                        <nuxt-link to="/returnbooks"><el-button type="success" style="margin-top:16px;margin-left:0;font-size:16px;">还书</el-button></nuxt-link>
                        <nuxt-link to="/newbookshelves"><el-button type="danger"  style="margin-top:16px;margin-left:2%;font-size:16px;">收件箱</el-button></nuxt-link>
                        
                    </div>
                    <div class="search_box2_1" v-else>
                        <div><span style="font-size:14px;color:#666666;">用户名:  </span>
                            <input v-model="username1"/>
                        </div>
                        <div><span style="font-size:14px;color:#666666;">密&nbsp;&nbsp; 码:</span>
                            <input v-model="password1" type="password" />
                        </div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-checkbox v-model="checked">7天内自动登录</el-checkbox>
                            <a href="/getpassword"><span style="font-size:14px;color:#111;cursor: pointer;" @click="clearCookie">重置密码</span></a>
                        </div>
                        <div style="text-indent:3em;float:left">
                            <button size="mini" @click="login()">登录</button>
                        </div>
                        <el-radio-group v-model="radio1" size="mini" style="margin-left:5px;">
                            <el-radio label="0" >用户</el-radio>
                            <el-radio label="1" style="margin-left:-20px;">管理员</el-radio>
                        </el-radio-group>
                        <br>
                    </div>
                    <br>
                    <div class="search_box3" >
                        <div class="list2" > <!--右边结束-->
                            <div class="one" style="background:white;">
                                <p>新书上架</p>
                                <div class="notice">
                                    <ul>
                                        <li v-for="(item,idx) in data2" :key="idx" @click="popularnewbook(item)">
                                            <a href="#">{{item.book_name}}
                                                <span style="overflow: hidden;float:right;font-size:0.875rem">{{item.books_add_time}}</span>
                                            </a>
                                        </li>
                                        <!-- <li><a href="javascrip:;">文化苦旅</a></li>
                                        <li><a href="javascrip:;">谢谢你曾来过我的世界<span style="overflow: hidden;float:right;font-size:0.875rem">2019-09</span></a></li>
                                        <li><a href="javascrip:;">文化苦旅</a></li>
                                        <li><a href="javascrip:;">文化苦旅</a></li>
                                        <li><a href="javascrip:;">文化苦旅</a></li>
                                        <li><a href="javascrip:;">文化苦旅</a></li>
                                        <li><a href="javascrip:;">文化苦旅</a></li> -->
                                    </ul>
                                </div>
                            </div><!--新书上架结束--> 
                        </div>
                    </div>
                    <br>
                    <notice/>
                    <br><br>
                </li>
            </ul>
            
        </div>
        
        <bottom/>
        <foot/>
    </div>
</template>
<script>
import CryptoJS from "crypto-js";
import bottom from './bottom.vue'
import foot from './foot.vue'
import notice from './notice.vue'
export default {
    components: {
        bottom,
        foot,
        notice,
    },
    props:['listb'],
    data(){
        return{
            input:'',
            radio:'书名',
            images:[
                {url:'/images/library1.jpeg',text:'主题活动'},
                {url:'/images/library2.jpg',text:'公益讲座'},
                {url:'/images/library3.jpg',text:'志愿服务'},
                {url:'/images/library4.jpg',text:'本馆概况'},
                {url:'/images/library5.jpg',text:'读者反馈'},
                ],
            data:[
                {img:'/images/fengmian.jpg',book_name:'活着1',author:'余华'},
                {img:'/images/fengmian.jpg',book_name:'追风筝的人',author:'[美] 卡勒德·胡赛尼'},
                {img:'/images/fengmian.jpg',book_name:'白夜行',author:'[日] 东野圭吾'},
                {img:'/images/fengmian.jpg',book_name:'红楼梦',author:'[清] 曹雪芹 著 / 高鹗 续'},
                {img:'/images/fengmian.jpg',book_name:'三体',author:'刘慈欣'},
                {img:'/images/fengmian.jpg',book_name:'白夜行',author:'[日] 东野圭吾'},
                ],
            data2:[
                // {book_name:'天使与魔鬼',book_time:'2019-09'},
                // {book_name:'我不喜欢这世界，我只喜欢你',book_time:'2019-09'},
                // {book_name:'安徒生童话故事集',book_time:'2019-09'},
                // {book_name:'漫长的告别',book_time:'2019-09'},
                // {book_name:'追风筝的人',book_time:'2019-10'},
                // {book_name:'一千零一夜',book_time:'2019-10'},
                // {book_name:'无人生还',book_time:'2019-10'},
                ],
            checked: false,
            username1:'',
            password1:'',
            radio1:'0',
            username:'',
            password:'',
            radios:'',
            token:'',
            list:[],
            queryresults:'',
        }
    },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/list.js'},
            // {src:'js/lrtk.js'},
        ],
        link: [
            // { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },

    methods: {
        
        startMove3(){
            var speed=20; //数字越大速度越慢 
            var tab=document.getElementById("demo7"); 
            var tab1=document.getElementById("demo8"); 
            var tab2=document.getElementById("demo9"); 
            tab2.innerHTML=tab1.innerHTML; 
            function Marquee(){ 
                if(tab2.offsetWidth-tab.scrollLeft<=0) 
                tab.scrollLeft-=tab1.offsetWidth 
                else{ 
                tab.scrollLeft++; 
                } 
            } 
            var MyMar=setInterval(Marquee,speed); 
            tab.onmouseover=function() {clearInterval(MyMar)}; 
            tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 
        },
        query:async function(){
            if(this.input){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/index/query',
                {txt :self.input,query_mode:self.radio})
                console.log(status,list)
                self.list= list.data
                // sessionStorage.obj("queryresults",self.list);    
                var queryresults = JSON.stringify(self.list);
                sessionStorage.setItem("queryresultskey", queryresults);  
                location.href='/search'           
            }else{
                alert('请输入查询条件!');
            }
        },
        popularnewbook:async function(item){
            let self = this;
            let {status,data:{list}} = await self.$axios.post('/index/popular_new_book',
            {book_name:item.book_name})
            console.log(status,list)
            self.searchresult=list.data
            var searchmessage = JSON.stringify(self.searchresult);
            sessionStorage.setItem("searchresult", searchmessage);  
            location.href='/detailedcontent';         
        },
        login:async function(){
            // localStorage.setItem("name", self.user.data);
            if(this.username1==''){
                this.$message('对不起，请输入账号！');
                }
            else if(this.password1==''){
                this.$message('对不起，请输入密码！');
            }else{ 
                let self = this;
                self.$axios.post('/user/login',
                {username:self.username1,password:self.password1,code:self.radio1,time:self.checked})
                .then(({status,data:{list}})=>{
                const loginstatus=list.status
                const loginmessage = list.message
                if(status===200){
                    if(loginstatus===0){
                            this.$alert('登录成功', {
                            confirmButtonText: '确定',
                            type:'success'
                            });
                            var name = self.username1;
                            //保存的密码
                            var pass = list.data;
                            //判断复选框是否被勾选 勾选则调用配置cookie方法
                            var code = self.radio1;
                            if (self.checked) {
                                //传入账号名，密码，和保存天数3个参数
                                this.setCookie(name, pass, code, 7);
                            }else{
                                this.setCookie(name, pass, code, 1);
                            }
                            location.href='/'
                    }else{
                            this.$alert( loginmessage , '登录失败', {
                            confirmButtonText: '确定',
                            type: 'error'
                            });
                            location.href='/'
                    }
                }else{
                    self.error=`服务器出错`
                }
                })
            }
            
        },
        clearCookie: function(){
            document.cookie  = "username=;path=/";
            document.cookie  = "token=;path=/";
            document.cookie  = "radios=;path=/";
        },
        //设置cookie
        setCookie(c_name, c_pwd,c_code, exdays) {

        // Encrypt，加密账号密码
        var cipherPortId = CryptoJS.AES.encrypt(
            c_name+'',
            "secretkey123"
        ).toString();
        var cipherPsw = CryptoJS.AES.encrypt(c_pwd+'', "secretkey123").toString();
        var usercode = CryptoJS.AES.encrypt(c_code+'', "secretkey123").toString();
        console.log(cipherPortId+'/'+cipherPsw+'/'+usercode)//打印一下看看有没有加密成功
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie =
            "username" + "==" + cipherPortId + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
            "token" + "==" + cipherPsw + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
            "radios" + "==" + usercode + ";path=/;expires=" + exdate.toGMTString();
        // console.log(document.cookie)
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
                this.token = bytes.toString(CryptoJS.enc.Utf8);
            }else if (arr2[0] == "radios") {
                var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
                this.radios = bytes.toString(CryptoJS.enc.Utf8);
                // console.log('ss',this.password)
                }
                }
            }
        },
         
    },
    mounted(){
        this.getCookie();
        this.startMove3()
        this.queryresults=JSON.parse(sessionStorage.getItem("queryresultskey"));
       
    },
    computed:{
        data5(){
            this.data2=this.listb
        } 
    }

}
</script>

<style> 
.search{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    min-width: 1200px;
    z-index: 1;
}
/* ul li{
    list-style: none;
} */
.search .search_nav1,.search .search_nav{
    margin-left: 5%;
}
.search .search_nav1 ul li,.search .search_nav ul li{
    float:left;
    list-style: none;
}
.search .search_nav2{
    /* margin-right: 5%; */
}
.search .search_nav2 ul li{
    /* float: left; */
    list-style: none;
}
.search_position{
    font-size: 15px;
    font-family: "Microsoft Yahei";
    color: #666666;
    line-height: 50px;
}
.search_box1{
    border: 1px solid #dad4d4;
    width: 99%;
    height: 166px;
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 5px #dad4d4;
    padding: 5.3% 5%;
    overflow: hidden;
}
.search_box3{
    border: 1px solid #dad4d4;  
    height: auto;
    background-color: white;
    border-top: 0.1875rem solid blue;
    font-size:0.9375rem;
    color:#333; 
    font-family:"微软雅黑";
    overflow: hidden;
}
.list2 a{
    text-decoration:none;
    color:#333; 
    outline:none;
    width: 100%;
    overflow:hidden; 
    display: -webkit-box;
    text-overflow:ellipsis; 
    white-space:normal;
    word-break: break-all;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical; 
}
.list2 a:hover{
    color:#CD3339;
}
.list2{
    width:100%;
    float:right;
    margin:0 0 1.9rem; 
    
}
.list2 .one{
    /* border: 1px solid #dcdddd; */
}
.list2 p{
    font-size:1rem; 
    height:2.5rem; 
    line-height:2.5rem;  
    background:white; 
    padding-left:1.25rem;
    border-bottom: 0.06rem solid #EBEFEF;
    overflow: hidden;
}
.list2 .notice{
    margin:0.6rem -1.3rem 1.87px; 
    height:13.125rem; 
    overflow: hidden; 
    list-style:none;
}
.list2 .notice a{
    /* border:1px solid red; */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    word-break: break-all;
    overflow: hidden;
}
.list2 ul li{ 
    height:2.18rem; 
    line-height:1.87rem;
    border-bottom: 0.06rem  dashed #dcdddd; 
    padding-top:0.31rem;
    width:87%;
    overflow: hidden;
    /* overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:normal; */
}
/* <!--新书上架结束--> */
/* 新书推荐  热门推荐 */
#demo7 { 
    background: #FFF; 
    overflow:hidden; 
    width: 100%;
} 
#demo7 img { 
    border: 3px solid #F2F2F2; 
} 
#indemo1 { 
    float: left; 
    width:300%; 
} 
#demo8 { 
    float: left;
} 
#demo9 { 
float: left; 
}
.newbook_box{
    border: 1px solid #dad4d4;
    width: 99%;
    height: auto;
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 5px #dad4d4;
    /* padding: 6% 5%; */
}
.popular_box{
    border: 1px solid #dad4d4;
    width: 99%;
    height: 300px;
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 5px #dad4d4;
}
.aui-flex-box h2 {
    font-size: 1rem;
    color: #404047;
    position: relative;
    padding-left: 2rem;
    line-height: 3rem;
    
}
.aui-list-theme-box a {
    text-decoration: none;
    color: #000;
}
.aui-list-theme-box a:hover {
    text-decoration: none;
    color:#CD3339;
}
.aui-list-theme-box {
    padding: 0 1.8rem 0 1.8rem;
    overflow: hidden;
    position: relative;
}
.aui-list-item {
    width: 14.567%;
    float: left;
    margin: 0 2.1% 0% 0;
    background: #fff;
    display: block;
    overflow: hidden;
}
.aui-list-theme-img {
    height: auto;
    width: 140px;
    position: relative;
    overflow: hidden;
}
.aui-list-theme-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}
.aui-list-theme-img span {
    position: absolute;
    left: 0;
    top: 0;
    background: #ff6d6d;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0 0 5px 0;
    padding: 0.2rem 0.8rem;
}
.aui-list-theme-message {
    background: #fff;
    padding: 0.3rem 0;
}
.aui-list-theme-title{
    color: #333;
    font-size: 0.85rem;
    margin: 0.1rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-weight: normal;
    text-overflow: ellipsis;
}
.aui-list-theme-message .aui-list-theme-author{
    color: #b5b5b5;
    font-size: 0.8rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
/* 新书推荐  热门推荐 结束*/
.slide_box{
    border: 1px solid #dad4d4;
    width: 99%;
    height: 18.5rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 5px #dad4d4;
    padding: 3%;
}
.slide_box .slide-left{
    border: 1px solid #dad4d4;
    width: 70%;
    float: left;
}
.slide_box .slide-right{
    /* border-left: 1px solid #dad4d4; */
    border-right: 1px solid #dad4d4;
    border-bottom: 1px solid #dad4d4;
    width: 30%;
    float: right;
}
.slide-right a{
    text-decoration: none;

}
.slide-right div{
    color: #333;
    line-height: 48px;
    /* text-align: center; */
    border-top: 1px solid #dad4d4;
    /* text-indent: 1.5em; */
    text-indent: 2.5em;
    /* background: #eee */
}
.slide-right div:hover{
    color: darkorange;
    background: #eee
}
.search-box-login a{
    text-decoration: none;
}
</style>