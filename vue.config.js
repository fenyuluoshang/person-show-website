module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
            .rule("model")
            .test(/(\.glb|\.obj|\.mtl)$/)
            .use("file-loader")
            .loader("file-loader")
            .options({
                name: `model/[name].[hash:8].[ext]`
            })
    },
    configureWebpack: {
        externals: {
            'three': 'THREE', // 配置使用CDN
            vue: 'Vue',
            'vue-router': 'VueRouter'
        }
    }
}