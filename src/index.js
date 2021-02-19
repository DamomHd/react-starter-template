/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-05 12:43:34
 * @LastEditTime: 2021-02-19 18:53:19
 * @description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.less';
import store from "./store";
import { Provider } from "react-redux";
import App from './App';
import './mock';
const Apps = (
    <Provider store={store}>
        <App></App>
    </Provider>
)
ReactDOM.render(
    Apps,document.getElementById('root')
);



