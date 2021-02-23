/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 16:27:14
 * @LastEditTime: 2021-02-23 15:53:24
 * @description: 
 */
import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import axios from 'axios'
import { API_CODE, API_LIST, API_FAILED} from '../../common/js/api.js'
// import './login.styl'
import Nav from '../../components/nav'
import { Button } from 'antd-mobile';
class Login extends Component {
    render() {
        return (
            <div className="P-login">
                <Header />
                <h1>Login page</h1>
                <p>login: myData = {this.props.myData}</p>
                <Button type="warning" onClick={()=> {this.props.setData('123456')}}>更改login的myData</Button>
                <Button onClick={this.getData}>Ajax请求</Button>
                <Button onClick={this.gotoHome.bind(this)}>跳转Home页</Button>
                <Nav />
            </div>
        )
    }

    gotoHome() {
        this.props.history.push('/home')
    }

    getData() {
        console.log(11)
        axios.get(API_LIST.GET_DATA).then((res) => {
            let result = res.data
            if(result.code === API_CODE.OK) {
                alert('获取数据成功：' + result.data)
            } else {
                alert(result.message)
            }
        }).catch(() => {
            alert(API_FAILED)
        })
    }
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
    myData: state.getIn(['login', 'myData']),
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    setData(data) {
        const action = actionCreators.setData(data)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)