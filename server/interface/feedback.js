const Router =require( 'koa-router')
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/feedback'})

router.post('/message',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/user/feedback',ctx.request.body);
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
router.post('/getfeedback',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/user/get_feedback',ctx.request.body);
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