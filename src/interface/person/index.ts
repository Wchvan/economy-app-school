// 基本用户信息
export interface userInfoType {
    userName: string,
    password: string,
    email: string
}

export type updateForm = {
    userName?: string,
    password?: string,
    email?: string
}