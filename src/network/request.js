import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    // baseURL: 'http://www.coldairance.com:8081',
    baseURL: 'http://127.0.0.1:8080',
    timeout: 5000
  })

  instance.interceptors.request.use(res => {

    let token = localStorage.getItem('token')
    
    if(token != null && token != '') {
      res.headers= {
        'token': token
      }
    }
    return res
  }, err => {
    window.location.href = "/error"
    sessionStorage.setItem("error","客户端出现异常")
  })

  instance.interceptors.response.use(res => {
    // let code = res.data.code
    // let info = res.data.message
    // // 不可忽略错误
    // if(code >=2000 && code < 3000) {
    //   window.location.href = "/login/frontstage"
    //   sessionStorage.setItem('info', info)
    //   localStorage.removeItem('user')
    //   localStorage.removeItem('token')
    // }
    // return res.data
  }, err => {
    
  })

  return instance(config)
}