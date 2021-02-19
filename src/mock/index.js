/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 18:51:39
 * @LastEditTime: 2021-02-19 18:52:55
 * @description: 
 */
import Mock from 'mockjs'
const HOST = '/api/'


Mock.mock(HOST + 'getData' ,function (){
    let result = {
        code:200,
        message:'OK',
        data:'test'
    }
    return result
})