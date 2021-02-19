/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 18:53:41
 * @LastEditTime: 2021-02-19 19:02:00
 * @description: 
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '^/api',
        createProxyMiddleware({
            target: 'http://localhost',
            changeOrigin: true
        })
    )
}