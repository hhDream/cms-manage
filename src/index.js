/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 14:55:23
 * @LastEditTime: 2022-03-29 15:37:33
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import { Provider } from 'react-redux'
import store from './store';

import 'antd/dist/antd.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);