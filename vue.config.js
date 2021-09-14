module.exports = {
  integrity: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/playground/'
    : '/',
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/abstracts/_global.scss";'
      }
    }
  }
}
