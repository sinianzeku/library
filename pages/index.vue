<template>
  <div class="index">
    <float/>
    <account/>
    <middle/>
    
    <search :listb="listb"/>
    <!-- <float/> -->
  </div>
</template>

<script>
import account from '../components/account.vue'
import middle from '../components/middle.vue'
import search from '../components/index/search.vue'
import bottom from '../components/index/bottom.vue'
import float from '../components/index/float.vue'
export default {
  components: {
    account,
    middle,
    search,
    bottom,
    float,
  },
  data(){
    return{
      
    }
  },
  async asyncData(ctx) {
        try{
            const {data:{list}} = await ctx.$axios.post('/index/indexnewbooklist')
            return {listb : list.data}
        }catch(err){
        console.log(err)
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
     
  },
  mounted:function(){

  },

  
}
</script>

<style>
.body{
  width: 100%;
  min-width:1200px;
  /* transform: scale(1.5); */
  /* font-family: "Microsoft Yahei","宋体",Arial ,HELVETICA; */
}
.index{
  min-width:1200px;
  z-index: 1;
  position: relative;
}

</style>
