module.exports = {
  integrity: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/abstracts/_global.scss";'
      }
    }
  }
}
