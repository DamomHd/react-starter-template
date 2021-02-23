/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-23 10:51:49
 * @LastEditTime: 2021-02-23 11:10:00
 * @description: 路由配置
 */

import React from 'react'
import {Redirect} from 'react-router-dom'
import Home from '@/views/home'
import Login from '@/views/login'

export default [
    {
        path:'/',
        component:Home,
        routes:[
            {
                path:'/',
                exact:true,
                render:() =>(
                    <Redirect to={"/home"} />
                )
            },
            {
                path:"/home",
                component:Home
            },
            {
                path:'/login',
                component:Login
            }
        ]
    }
]