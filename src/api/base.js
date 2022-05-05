/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 16:32:33
 * @LastEditTime: 2022-03-29 16:55:17
 * @LastEditors: Fenghua Zhang
 */
import request from '@/request/index'

export function login({username, password,captchaVerification, currentTime, force}) {
  return request.post('/auth/loginEOMS', {
    username,
    password,
    captchaVerification,
    currentTime,
    force
  })
}

export function loginByCaptcha(username, password,captchaVerification, force) {
  return request.post('/auth/loginByCaptcha', {
    username,
    password,
    captchaVerification,
    force
  })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get'
  })
}

export function logout(token) {
  return request.post('/auth/loginOutEOMS', { token })
}
