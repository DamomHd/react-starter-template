/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 16:25:26
 * @LastEditTime: 2021-02-23 11:42:17
 * @description: 
 */
import React, {Component } from 'react'
import Header from '../../components/header'
import Nav from '../../components/nav'

class Home extends Component {
    render() {
        return(
            <div className="p-home">
                <Header></Header>
                <h1>首页</h1>
                <Nav></Nav>
            </div>
        )
    }
}
export default Home