import request from '@/utils/request'

// 发送验证码
export function commonSendSmsCodeApi (query) {
  return request({
    url: '/common/sendSmsCode',
    method: 'get',
    params: query
  })
}

// 校验验证码
export function commonCheckSmsCodeApi (data) {
  return request({
    url: '/common/checkSmsCode',
    method: 'post',
    data
  })
}

// 注册
export function customerRegisterApi (data) {
  return request({
    url: '/customer/register',
    method: 'post',
    data
  })
}

// 登录
export function customerLoginApi (data) {
  return request({
    url: '/customer/login',
    method: 'post',
    data
  })
}

// 重置密码
export function customerResetPasswordApi (data) {
  return request({
    url: '/customer/resetPassword',
    method: 'post',
    data
  })
}

// 场景分类
export function homeBookTypeApi (data) {
  return request({
    url: '/home/bookType',
    method: 'post',
    data
  })
}

// 场景词本
export function homeBooksApi (data) {
  return request({
    url: '/home/books',
    method: 'post',
    data
  })
}

// 创建轮次
export function wordCreateRoundApi (data) {
  return request({
    url: '/word/createRound',
    method: 'post',
    data
  })
}

// 获取单词
export function homeCreateWordApi (data) {
  return request({
    url: '/home/createWord',
    method: 'post',
    data
  })
}

// 提交单词
export function wordSubmitWordApi (data) {
  return request({
    url: '/word/submitWord',
    method: 'post',
    data
  })
}

// 获取轮次结果
export function wordStopRoundApi (data) {
  return request({
    url: '/word/stopRound',
    method: 'post',
    data
  })
}
