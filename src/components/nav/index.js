/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-23 11:33:43
 * @LastEditTime: 2021-02-23 16:46:28
 * @description: 
 */
import { React } from "react";
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import './index.less';

function Nav(){

    return (
        <div className="nav">
            <NavLink activeClassName="selected" to="/home">首页</NavLink>
            <NavLink activeClassName="selected" to="/login">登录</NavLink>
        </div>
    )
}
export default Nav