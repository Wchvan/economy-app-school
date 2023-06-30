// 页面变化类型
export type page = "login" | "register" | "findPass" | "individual"
export type pageIndex =  Record< page, boolean>

// 表单检验失败返回参数
export type errMsg = {
    key: string,
    errorMessage: string
}[]

// 表单输入框变化
export enum status {
    blur = "bt1",
    focus = "bt2",
    err = "bt3"
}

// 登录的类型
export type loginLabel = "userName" | "password"
export type loginForm = Record<loginLabel, string>
export type loginInputStatus = Record<loginLabel, status>

// 注册的类型
export type registerLabel = "userName" | "password" | "checkPass" | "email" | "code"
export type registerForm = Record<registerLabel, string>
export type registerInputStatus = Record<registerLabel, status>

// 找回密码的类型
export type findPassLabel = "userName" | "email"
export type findPassForm = Record<findPassLabel, string>
export type findPassInputStatus = Record<findPassLabel, status>