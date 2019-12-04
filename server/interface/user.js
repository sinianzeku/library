const Router =require( 'koa-router')
import Passport from './utils/passport'
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/user'})

router.post('/verification',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/user/email_verify',ctx.request.body);
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

router.post('/register',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/user/register',ctx.request.body);
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

router.post('/login',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/user/login',ctx.request.body);
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