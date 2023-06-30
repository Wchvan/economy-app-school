import request from '@/utils/request'
import type { codeParm, codeResp, findPassParm, findPassResp, loginParm, loginResp, registerParm, registerResp, tokenParm, tokenResp } from '@/interface/person/api'


/*
  @*Parm: 为请求头格式
  @*Resp：为响应格式
*/


// 登录的函数
const login = async (param: loginParm) => {
  const res = await request({
    url: '/user/login',
    method: 'POST',
    data: param,
    skipTokenCheck: true
  }) as loginResp

  return res
}




// 注册的函数
const register = async (param: registerParm) => {
  const res = await request({
    url: '/user/register',
    method: 'POST',
    data: param,
    skipTokenCheck: true
  }) as registerResp

  return res
}


/* 申请验证码 */
const code = async (param: codeParm) => {
  const res = await request({
    url: '/user/emailCheck',
    method: 'GET',
    params: param,
    skipTokenCheck: true
  }) as codeResp

  return res
}


const token = async (param: tokenParm) => {
  const res = await request({
    url: '/user/updateToken',
    method: 'GET',
    params: param,
    skipTokenCheck: true
  }) as tokenResp
  
  return res
}



const findPass = async (param: findPassParm) => {
  const res = await request({
    url: '/user/findPass',
    method: 'GET',
    params: param,
    skipTokenCheck: true
  }) as  findPassResp
  
  return res
}

class UserService {
  // 登录
  static login = login
  // 注册
  static register = register
  // 验证码
  static code = code
  // 更新token
  static token = token
  // 找回密码
  static findPass = findPass
}

export default UserService
