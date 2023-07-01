import { defineStore } from 'pinia'
import CompanyService from '@/api/company'
import type { hotSeriesType } from '@/interface/company'

export const useMarketStore = defineStore(
  'market',
  () => {
    const hotSeries = ref<hotSeriesType>([])

    const getHot =async () => {
        const res = await CompanyService.getHot()
        if (res.code === 200) {
            hotSeries.value = res.data
        }
        return res
    }

    return {
      hotSeries,
      getHot
    }
  }
)
