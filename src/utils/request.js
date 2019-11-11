/**
 * Created by Administrator on 2019/11/10.
 */

// https://www.cnblogs.com/chaoyuehedy/p/9931146.html
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 600000 // request timeout
})
// 设置每次session不变
service.defaults.withCredentials = true

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  // config.headers['Operation-Back-Token'] = "1" // 让每个请求携带token-- ['Back-Token']为自定义key 请根据实际情况自行修改
  // if (store.getters.token) {
  //   config.headers['Operation-Back-Token'] = getToken() // 让每个请求携带token-- ['Back-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  // response => response,
  response => {
    return response.data
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
