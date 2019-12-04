const pkg = require('./package')


module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '图书管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   src:"/js/flexible.js", type: 'text/javascript', charset: 'utf-8'
      // },
      // {
      //   src:"/js/.postcssrc.js", type: 'text/javascript', charset: 'utf-8'
      // }
    ],
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',


  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  // loaders:[
  //   {test: /\.css$/, 
  //   loader: 'style-loader!css-loader'}//2.0貌似不支持缩写了
  // ],

  // axios: {
  //   proxy: true,
  //   prefix: '/api/',
  //   credentials: true
  //   // See https://github.com/nuxt-community/axios-module#options
  // },

  // proxy: {
  //   '/api/': { 
  //     target: 'https://h5api.zhefengle.cn',//这个网站是开源的可以请求到数据的
  //     pathRewrite: {
  //        '^/api/': '/',
  //        changeOrigin: true
  //     }    
  //   }
  // },


  // axios: {
  //       prefix: '/api/',
  //       proxy: true
  //    },
    
    // proxy: {
    //     '/api/': {
    //       target: 'https://maoyan.com/',
    //      pathRewrite: {
    //        '^/api/': ''
    //       }
    //     }
    //  },

  proxy: [
    [
    '/api', 
    { 
    target: 'https://jsonplaceholder.typicode.com', // api主机
    pathRewrite: { '^/api' : '/' }
    }
    ]
    ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  }
}
