/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-19 17:31:12
 * @LastEditTime: 2021-02-23 15:31:09
 * @description: 
 */
import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    myData: null
})

const setData = (state, action) => {
    return state.set('myData', action.data)
}
const fn = (state = defaultState, action) => {
    switch(action.type) {
        case constants.SET_DATA:
            return setData(state, action)
        default:
            return state
    }
}
export default fn