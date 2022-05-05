/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 15:05:57
 * @LastEditTime: 2022-03-29 16:52:16
 * @LastEditors: Fenghua Zhang
 */
import { message } from 'antd';
import axios from 'axios'

// 配置项
const axiosOption = {
    baseURL: 'https://xduat.xiaodeyun.com/homecare_server',
    timeout: 5000
}

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    if (config.data) {
        config.data = {
            platform: "web",
            requestUser: "1",
            // token: getToken(),
            sign: "aaaa-bbbb-cccc-ddd",
            requestBody: config.data
        }
    } else {
        config.data = {
            platform: "web",
            requestUser: "1",
            // token: getToken(),
            sign: "aaaa-bbbb-cccc-ddd",
            requestBody: config.data
        }
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let isok = response.data.ok;
    if (!isok) {
        message.error(response.data.message)
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
