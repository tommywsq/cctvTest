const config = require('./config')

module.exports = {
    devServer: {
        // host: "localhost", //要设置当前访问的ip 否则失效
        open: true, //浏览器自动打开页面
        proxy: config.dev.proxyTable
    },
    lintOnSave: false,
    chainWebpack: config => {
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('file-loader')
            .options({
                name: 'imgLocal/[name].[hash:8].[ext]'
            })
        config.module.rule('svg')
            .test(/\.(svg)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'imgLocal/[name].[hash:8].[ext]'
            })
    }
}