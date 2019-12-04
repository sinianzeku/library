<template>
    <div class="feedback">
        <account />
        <div class="six">
            <div class="nav">
                <ul>
                    <nuxt-link to="/"><li class="index1">首页</li></nuxt-link>
                    <li class="index2"><router-link :to="{path: '/announcement', query: { index2:1 }}" class="router"><div>图书公告</div></router-link>
                        <ul>
                            <router-link :to="{path: '/announcement', query: { index2:1 }}"><li>开馆时间</li></router-link>
                            <router-link :to="{path: '/announcement', query: { index2:2 }}"><li>图书馆公告</li></router-link>
                        </ul>
                    </li>
                    <li class="index3"><nuxt-link to="/retrieval" class="router"><div>图书检索</div></nuxt-link>
                        <ul>
                            <nuxt-link to="/retrieval"><li>书目检索</li></nuxt-link>
                            <nuxt-link to="/classification"><li>分类浏览</li></nuxt-link>
                            <nuxt-link to="/newbook"><li>新书推荐</li></nuxt-link>
                            <nuxt-link to="/popularbook"><li>热门推荐</li></nuxt-link>
                        </ul>  
                    </li>
                    <li class="index4"><router-link :to="{path: '/activity', query: { index4:1 }}" class="router"><div>图书活动</div></router-link>
                        <ul>
                            <router-link :to="{path: '/activity', query: { index4:1 }}"><li>主题活动</li></router-link>
                            <router-link :to="{path: '/activity', query: { index4:2 }}"><li>公益讲座</li></router-link>
                            <router-link :to="{path: '/activity', query: { index4:3 }}"><li>志愿活动</li></router-link>
                        </ul>
                    </li>
                    <li class="index5"><router-link :to="{path: '/survey', query: { index5:1 }}" class="router"><div>本馆概况</div></router-link>
                        <ul>
                            <router-link :to="{path: '/survey', query: { index5:1 }}"><li>本馆简介</li></router-link>
                            <router-link :to="{path: '/survey', query: { index5:2 }}"><li>馆藏分布</li></router-link>
                        </ul>
                    </li>
                    <nuxt-link to="/feedback"><li class="index6">意见反馈</li></nuxt-link>
                    <nuxt-link to="/administrators" v-if="username&&radios==1"><li class="index7">管理员</li></nuxt-link>
                    <nuxt-link to="/mylibrary" v-else><li class="index7">我的图书馆</li></nuxt-link>
                </ul>
            </div>
        </div>
        <div class="feedback-body">
            <message :list="list"/>
        </div>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import account from '../components/account.vue'
import message from '../components/feedback/message.vue'
export default {
    components: {
        account,
        message,
    },
    data(){
        return{
            username:'',
            password:'',
            radios:'',
            text:'ss',
            list:[],
        }
    },
    // async asyncData(context) {
    //     try{
    //         // let self=this
    //         var text='self.username'
    //         const {status,data:{list}} = await context.$axios.post('/feedback/getfeedback',{time:'ss'})
    //         // console.log(context)
    //         // console.log(context.store)
    //         return {listb : list.data}
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/echarts.common.min.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
        state:async function(){
            if(this.username){
                let self = this;
                let {status,data:{list}} = await self.$axios.post('/feedback/getfeedback', 
                {user_name:self.username,tokens:self.password})
                
                if(list.status==0){
                    self.list=list.data
                }else{
                    console.log('ddd')
                    this.$alert( '服务器出错，请重新登录！' , {
                            confirmButtonText: '确定',
                            type: 'error'
                            });
                    location.href="/login"
                    document.cookie  = "username=;path=/";
                    document.cookie  = "token=;path=/";
                    document.cookie  = "radios=;path=/";  
                }
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
        this.state();
     }

}
</script>

<style>
.feedback{
    width: 100%;
    min-width: 1200px;
}
.six{
    height: 60px;
    background: rgb(240, 240, 240);
}
.six .nav{
    margin-left: 5%;
    position: relative;
    z-index: 3; 
}
.six .nav li{
    float: left;
    width: 13.07%;
    text-align: center;
    list-style: none;
    line-height: 60px;
    color: black;
}
.six .nav li:hover{
    background: rgba(255, 51, 0, 0.815);
}
.six .nav:hover .index6{
    background:none;
}
.six .nav .index6{
    background: rgba(255, 51, 0, 0.815);
}
.six .nav .index6:hover{
    background: rgba(255, 51, 0, 0.815);
}
.six .index2 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.six .index2 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.six .index2:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;   
}
.six .index2:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.six .index3 ul li{
    position: relative;
    display: none;
    z-index: 3;
    transition: opacity 2s ease-in;
}
.six .index3 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.six .index3:hover ul li{
    display: block;
    z-index: 4;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.six .index3:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.six .index4 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.six .index4 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.six .index4:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.six .index4:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.six .index5 ul li{
    position: absolute;
    display: none;
    transition: opacity 2s ease-in;
}
.six .index5 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.six .index5:hover ul li{
    position: relative;
    z-index: 3;
    display: block;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.six .index5:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.six .feedback-body{
    width: 100%;
    position: absolute;
    z-index: 2;
}
.router{
    text-decoration: none;
    color:black;
}
</style>