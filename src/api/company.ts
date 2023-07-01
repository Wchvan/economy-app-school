import type { getBaseParm, getBaseResp, getHotResp } from '@/interface/company/api'
import request from '@/utils/request'

/*
  @*Parm: 为请求头格式
  @*Resp：为响应格式
*/


// 请求热门股票函数
const getHot = async () => {
  const res = await request({
    url: '/company/getHot',
    method: 'GET',
  }) as getHotResp

  return res
}


// 请求基本信息函数
const getBase = async (param: getBaseParm) => {
  const res = await request({
    url: '/company/getBase',
    method: 'GET',
    data: param,
  }) as getBaseResp

  return res
}


class CompanyService {
  // 获取热门股票序列
  static getHot = getHot
  // 获取公司基本信息
  static getBase = getBase
}

export default CompanyService
