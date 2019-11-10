/**
 * Created by Administrator on 2019/11/10.
 */

// https://www.cnblogs.com/chaoyuehedy/p/9931146.html
import axios from 'axios'
import QS from 'qs'

if (process.env.NODE_ENV == 'dev') {
  axios.defaults.baseURL = 'https://www.baidu.com';
}
else if (process.env.NODE_ENV == 'prod') {
  axios.defaults.baseURL = 'https://www.ceshi.com';
}
axios.defaults.timeout = 10000
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  }
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
