/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 17:32:25
 * @LastEditTime: 2021-02-19 17:32:35
 * @description: 
 */
import * as constans from './constants'

export const setData = (data) => ({
    type: constans.SET_DATA,
    data
})