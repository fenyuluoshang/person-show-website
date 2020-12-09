module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    const externals = {
      'three': 'THREE', // 配置使用CDN
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'vue-class-component': 'VueClassComponent'
    }
    config.externals(externals)
    config.module
      .rule("model")
      .test(/(\.glb|\.obj|\.mtl)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `model/[name].[hash:8].[ext]`
      })
    // config.plugin('workbox')
  },
  pwa: {
    name: '纷羽の实验室',
    themeColor: '#000',
    msTileColor: '#fff',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      exclude: ['index.html'],
      swSrc: 'src/sw.js',
      importWorkboxFrom: 'local'
    }
  }
}