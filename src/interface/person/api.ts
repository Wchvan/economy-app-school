import type { apiResp } from '../api'

/* 登录 */
export type loginParm = {
  userName: string
  password: string
}

export type loginResp = apiResp<{
  token: string
}>

/* 注册 */
export type registerParm = {
  userName: string
  password: string
  email: string
}

export type registerResp = apiResp<{
  token: string
}>

/* 申请验证码 */
export type codeParm = {
  email: string
}

export type codeResp = apiResp<{
  code: string
}>

// 更新token，查看token是否过期
export type tokenParm = {
  token: string
}

export type tokenResp = apiResp<{
  token: string
}>

// 找回密码
export type findPassParm = {
  userName: string
  email: string
}

export type findPassResp = apiResp<null>
