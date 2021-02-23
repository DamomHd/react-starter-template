/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-23 14:03:32
 * @LastEditTime: 2021-02-23 16:24:21
 * @description: 修改默认配置
 */
const { override, fixBabelImports, addWebpackAlias, addLessLoader, addPostcssPlugins,overrideDevServer } = require('customize-cra');
const path = require('path')
const rootPath = path.resolve(__dirname, 'src');
const px2rem = require('postcss-px2rem')

const addProxy = () => (configFunction) => {
    configFunction.proxy = {
        '/baidu/': {
            target: 'https://www.baidu.com',
            changeOrigin: true,
            pathRewrite: { '^/baidu': '/' },
        },
    };

    return configFunction;
}
module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: true,
        }),
        addWebpackAlias({
            ['@']:rootPath
        }),
        addLessLoader({
            javascriptEnabled:true,
            modifyVars: {'@primary-color': '#1DA57A'}
        }),
        addPostcssPlugins([
            px2rem({
                remUnit: 75,
                exclude:/node-modules/
            })
        ])
    ),
    devServer: overrideDevServer(
        addProxy()
    )
}
