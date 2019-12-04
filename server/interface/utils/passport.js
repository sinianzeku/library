const passport =require( 'koa-passport')
const LocalStrategy =require( 'passport-local')
// const axios = require('axios')
import axios from  '../utils/axios'

passport.use(new LocalStrategy(async function(username,password,done){
  axios.post("/api/user/login",
  {"username":username,"password":password}
  ).then(function(response) {
    console.log(response.data)
    if(response.data.status == 0){
        return done(null,{username,password})
    }else{
      return done(null,false,'登录错误')
    }
  }).catch(function (error) {
    console.log(error);
  });
}))

passport.serializeUser(function(user,done){
  done(null,user)
})

passport.deserializeUser(function(user,done){
  return done(null,user)
})

export default passport
