const Router =require( 'koa-router')
import axios from  './utils/axios'
// import axios from 'axios'

let router = new Router({prefix: '/newbooksinstorage'})

router.post('/warehousing',async (ctx)=>{
    console.log(ctx.isAuthenticated())
    console.log(ctx.request.body)
    if (!ctx.isAuthenticated()) {
        let {data} = await axios.post('/api/book/new_book_entry',ctx.request.body);
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