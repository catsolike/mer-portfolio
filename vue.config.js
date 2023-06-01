const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/global.scss";'
      }
    }
  }, 
  publicPath: process.env.NODE_ENV === 'production'
  ? '/mer-portfolio/'
  : '/'
})