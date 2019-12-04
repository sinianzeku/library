<template>
    <div class="usermanagement" v-if="this.radios==1">
        <account/>
        <div class="seven">
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
                    <nuxt-link to="/administrators"><li class="index8">管理员</li></nuxt-link>
                </ul>
            </div>
        </div>
        <div class="usermanagement-body">
            <user :listb="listb"/>
            <!-- <buttom/> -->
        </div>
    </div>
</template>

<script>
import CryptoJS from "crypto-js";
import account from '../components/account.vue'
import user from '../components/administrators/user.vue'
// import bottom from '../components/index/bottom.vue'
export default {
    components: {
        account,
        user,
        // bottom,
    },
    data(){
        return{
            username:'',
            password:'',
            radios:'',
        }
    },
    async asyncData(ctx) {
        // console.log("请求list接口了！")
        try{
            const {data:{list}} = await ctx.$axios.post('/usermanagement/userlist')
            return {listb : list.data}
        }catch(err){
        console.log(err)
        }
    },
    head:{
        script:[
            {src:'js/jquery1.42.min.js'},
            {src:'js/echarts.common.min.js'},
            // {src:'js/jquery.SuperSlide.2.1.1.js'},
            // {src:'js/jQuery.js'},
        ],
        link: [
            { rel: 'stylesheet', href: 'css/style.css' },
        ]
    },
    methods:{
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
        
    },

}
</script>

<style>
.usermanagement{
    width:100%;
    min-width: 1200px;;
}
.seven{
    height: 60px;
    background: rgb(240, 240, 240);
}
.seven .nav{
    margin-left: 5%;
    position: relative;
    z-index: 3; 
}
.seven .nav li{
    float: left;
    width: 13.07%;
    text-align: center;
    list-style: none;
    line-height: 60px;
    color: black;
}
.seven .nav li:hover{
    background: rgba(255, 51, 0, 0.815);
}
.seven .nav:hover .index8{
    background:none;
}
.seven .nav .index8{
    background: rgba(255, 51, 0, 0.815);
}
.seven .nav .index8:hover{
    background: rgba(255, 51, 0, 0.815);
}
.index2 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index2 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index2:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;   
}
.index2:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index3 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index3 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index3:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index3:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index4 ul li{
    position: relative;
    display: none;
    z-index: 1;
    transition: opacity 2s ease-in;
}
.index4 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index4:hover ul li{
    display: block;
    z-index: 2;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index4:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.index5 ul li{
    position: absolute;
    display: none;
    transition: opacity 2s ease-in;
}
.index5 ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.index5:hover ul li{
    position: relative;
    z-index: 3;
    display: block;
    line-height: 40px;
    width: 100%;
    font-size: 15px;
}
.index5:hover ul li:hover{
    background: rgb(255, 200, 0);
}
.usermanagement-body{
    position: absolute;
    z-index: 1;
    width: 100%;
}
.router{
    text-decoration: none;
    color:black;
}
</style>