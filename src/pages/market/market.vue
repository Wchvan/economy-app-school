<template>
	<gb-search @click="goSearch"></gb-search>
	<gb-tab v-model:current="current">
		<gb-tab-item v-for="(item, index) in tabData" :key="index" @click="tabClick" :active="current === item.symbol"
			:value="item.symbol">
			{{ item.name }}
		</gb-tab-item>
	</gb-tab>
	<div class="chart mx10 mb20">
        <marketChart1 ></marketChart1>
    </div>
	<marketTable class="mt20" :tableData="tableData"></marketTable>
	<div class="chart2 mx10 mb20">
        <marketChart2 :title="currentTitle"></marketChart2>
    </div>
	<div class="chart2 mx10 mb10">
        <marketChart3 ></marketChart3>
    </div>
	<div class="chart2 mx10 mb20">
        <marketChart4 ></marketChart4>
    </div>
</template>

<script setup lang='ts'>
import type { hotSeriesType } from '@/interface/company/'
import { useMarketStore } from '@/store/market/index'
import CompanyService from '@/api/company'
import marketChart1 from './components/market-chart1.vue';
import marketTable from './components/market-table.vue';
import marketChart2 from './components/market.chart2.vue';
import marketChart3 from './components/market.chart3.vue';
import marketChart4 from './components/market-chart4.vue'
import type { tableDataType } from './type';

const marketStore = useMarketStore()

// 搜索
function goSearch() {
	uni.navigateTo({
		url: "/pages/search/search"
	})
}

// 导航栏
const tabData = ref<hotSeriesType>(marketStore.hotSeries)
const current = ref<string>('')
const currentTitle = ref<string>('')
const tabClick = async (val: string) => {
	current.value = val
	for (let i = 0; i<tabData.value.length; i++) {
		if(tabData.value[i].symbol === current.value) {
			currentTitle.value = tabData.value[i].name
		}
	}
	const res = await CompanyService.getBase({ symbol: current.value })
	if (res.code === 200) {
		tableData.value = res.data
	}
}

// 表格
const tableData = ref<tableDataType>({
	name: '',
	symbol: '',
	current: -1,
	market_capital: -1,
	pe_ttm: -1,
	amount: -1,
	chg: -1,
	percent: -1,
	dividend_yield: -1,
	turnover_rate: -1,
	volume: -1,
	current_year_percent: -1
}
)

// 初始化
onShow: marketStore.getHot().then(res => {
	if (res.code === 200) {
		tabData.value = res.data
		current.value = tabData.value[0].symbol
		currentTitle.value = tabData.value[0].name
		CompanyService.getBase({ symbol: current.value }).then(res => {
			if (res.code === 200) {
				tableData.value = res.data
			}
		})
	}
})
</script>

<style lang='scss' scoped>
.chart {
	width: 730rpx;
	height: 500rpx;
}
.chart2{
	width: 730rpx;
	height: 600rpx;
}
</style>