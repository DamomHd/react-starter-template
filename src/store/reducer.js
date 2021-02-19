/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 17:25:30
 * @LastEditTime: 2021-02-19 18:08:58
 * @description: 
 */

import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../views/login/store'
import { reducer as headerReducer } from '../components/header/store'
// 避免组件间store数据相互污染  组件独立维护自己的store，减少维护成本
const reducer = combineReducers({
    login: loginReducer,
    header: headerReducer
})

export default reducer