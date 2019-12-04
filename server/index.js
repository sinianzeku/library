const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('koa-bodyparser')
const session =require( 'koa-generic-session')
const Redis =require( 'koa-redis')
const json =require( 'koa-json')
const proxy = require('koa-server-http-proxy')
var cors = require('koa2-cors');
import passport from './interface/utils/passport'
import feedback from './interface/feedback'
import user from './interface/user'
import index from './interface/index'
import retrieval from './interface/retrieval'
import borrow from './interface/borrow'
import usermanagement from './interface/usermanagement'
import collection from './interface/collection'
import lentout from './interface/lentout'
import borrowingrecords from './interface/borrowingrecords'
import newbooksinstorage from './interface/newbooksinstorage'
import administrators from './interface/administrators'
import newbookshelves from './interface/newbookshelves'
import mylibrary from './interface/mylibrary'
import detailedcontent from './interface/detailedcontent'
import activity from './interface/activity'
import getpassword from './interface/getpassword'

const app = new Koa()
app.use(cors());
app.use(proxy('/api', {
  target: 'http://47.96.139.19:5000',
  pathRewrite: { '^/api': '/' },
  changeOrigin: true
}))

// const and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  app.keys = ['mt', 'keyskeys']
  app.proxy = true
  app.use(session({key: 'mt', prefix: 'mt:uid',
                  cookie: {secure: false, maxAge:86400000}, 
                  store: new Redis()}
                  )
          )
  app.use(bodyParser({
    extendTypes:['json','form','text']
  }))
  app.use(json())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(feedback.routes()).use(feedback.allowedMethods())
  app.use(user.routes()).use(user.allowedMethods())
  app.use(index.routes()).use(index.allowedMethods())
  app.use(retrieval.routes()).use(retrieval.allowedMethods())
  app.use(borrow.routes()).use(borrow.allowedMethods())
  app.use(usermanagement.routes()).use(usermanagement.allowedMethods())
  app.use(collection.routes()).use(collection.allowedMethods())
  app.use(lentout.routes()).use(lentout.allowedMethods())
  app.use(borrowingrecords.routes()).use(borrowingrecords.allowedMethods())
  app.use(newbooksinstorage.routes()).use(newbooksinstorage.allowedMethods())
  app.use(administrators.routes()).use(administrators.allowedMethods())
  app.use(newbookshelves.routes()).use(newbookshelves.allowedMethods())
  app.use(mylibrary.routes()).use(mylibrary.allowedMethods())
  app.use(detailedcontent.routes()).use(detailedcontent.allowedMethods())
  app.use(activity.routes()).use(activity.allowedMethods())
  app.use(getpassword.routes()).use(getpassword.allowedMethods())



  // const Vue
  // Vue.use(Print)
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, '0.0.0.0')
  consola.ready({
    message: `Server listening on http://0.0.0.0:${port}`,
    badge: true
  })
}

start()
