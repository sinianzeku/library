const Router =require( 'koa-router')
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/administrators'})

router.post('/eachars',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/borrowing_condition',ctx.request.body);
        // sessionStorage.setItem("name", data);
    console.log(data)
    ctx.body = {
            list: data
        }

    }else{
        ctx.body = {
            list: 'err'
        } 
    }

})


export default router