import type { apiResp } from '../api'

export type getHotResp = apiResp<{
   name: string;
   symbol: string;
}[]>


/* 获取公司基本信息 */
export type getBaseParm = {
  symbol: string
}

export type getBaseResp = apiResp<{
  amount: number;
  chg: number;
  current: number;
  current_year_percent: number;
  dividend_yield: number;
  market_capital: number;
  name: string;
  pe_ttm: number;
  percent: number;
  symbol: string;
  turnover_rate: number;
  volume: number;
}>
