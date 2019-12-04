const Router =require( 'koa-router')
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/borrow'})

router.post('/querybook',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/query_borrow_book_info',ctx.request.body);
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

router.post('/borrowuser',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/query_user_info',ctx.request.body);
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
router.post('/borrowbooks',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/book/borrow_book',ctx.request.body);
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
router.post('/returnquerybooks',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/admin/query_return_book_info',ctx.request.body);
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
router.post('/returnbooks',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/book/return_book',ctx.request.body);
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