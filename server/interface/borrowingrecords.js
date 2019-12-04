const Router =require( 'koa-router')
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/borrowingrecords'})

router.post('/lendbooklist',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/borrow_record',ctx.request.body);
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

router.post('/searchlendbook',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/conditional_borrow_record',ctx.request.body);
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
router.post('/delectlendbook',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/delete_borrow_record',ctx.request.body);
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