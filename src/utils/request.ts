import type { apiParm, apiResp } from '@/interface/api'
import { useUserStore } from '@/store/user'


let defalutPATH: string  // 声明默认请求地址头
const defaultTokenKey = 'Authorization'

// #ifndef H5
defalutPATH = ' http://localhost:8081/api' // 这里是自己的服务器地址
// #endif

// #ifdef H5
defalutPATH = '/api' //''
// #endif

defalutPATH = '/api'


class Request {
  public http (param: apiParm) {

    const userStore = useUserStore() // 这里将token放在pinia user模块中
    // 请求参数
    var url = param.url,
      method = param.method,
      header = {},
      data = param.data || {},
      params = param.params || {},
      token = userStore.token || '',
      hideLoading = param.hideLoading || false,
      skipTokenCheck = param.skipTokenCheck 

    // 拼接完整请求地址
    var requestUrl = defalutPATH + url
    if (Object.keys(params).length !== 0){
      requestUrl += "?"
      let flag: boolean = false
      for (let i in params) {
        if (flag) requestUrl += "&"
        requestUrl += i + '='+ params[i]
        if (!flag) flag = true
      }
    }
    
    // 请求方式:GET或POST(POST需配置
    if (method) {
      if (method === 'POST') {
        header = {
          'content-type': 'application/json',
        }
      } else {
        header = {
          'content-type': 'application/json',
        }
      }
    }

    // 判定是否携带token 
    if (!skipTokenCheck && !token) {
      uni.showToast({
        title: '请登录账号',
        icon: 'none',
      })
      return
    }

    if (!skipTokenCheck && token) {
      const key = defaultTokenKey
      Object.assign(header, { key: token })
    }

    // 加载圈
    if (!hideLoading) {
      uni.showLoading({
        title: '加载中...',
      })
    }
    
    // 返回promise
    return new Promise((resolve, reject) => {
      // 请求
      uni.request({
        url: requestUrl,
        data: data,
        method: method,
        header: header,
        success: (res) => {
          // 判断 请求api 格式是否正确
          if (res.statusCode && res.statusCode !== 200) {
            uni.showToast({
              title: '请求错误：' + res.errMsg,
              icon: 'none',
            })
            return
          }
          // 将结果抛出
          resolve(res.data)
        },
        // 请求失败
        fail: (e) => {
          uni.showToast({
            title: '' + e.errMsg,
            icon: 'none',
          })
          resolve(e.errMsg)
        },
        // 请求完成
        complete() {
          // 隐藏加载
          if (!hideLoading) {
            uni.hideLoading()
          }
        },
      })
    })
  }
}

export default new Request().http