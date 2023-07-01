<template>
    <uni-table border stripe emptyText="暂无更多数据" class="mt20">
        <!-- 表头行 -->
        <uni-tr>
            <uni-th align="center">项目</uni-th>
            <uni-th align="center">数值</uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="(item, index) in tableLabel" :key="index">
            <uni-td align="center" v-if="index !== 'name'">{{ item }}</uni-td>
            <uni-td align="center" v-if="index !== 'name'">{{ tableData[index] }}</uni-td>
        </uni-tr>
    </uni-table>
</template>

<script setup lang='ts'>
import type { tableDataType } from '../type';

const props = defineProps<{
    tableData: tableDataType 
}>()

const tableData = ref<tableDataType >(props.tableData)

watch(() => props.tableData, (newVal) => {
    tableData.value = newVal
})

const tableLabel = ref<Record<keyof tableDataType, string>>({
    name: '股票名称',
    symbol: '股票代码',
    current: '当前价',
    market_capital: '市值',
    pe_ttm: '市盈率',
    amount: '成交额',
    chg: '涨跌额',
    percent: '涨跌幅',
    dividend_yield: '股息率',
    turnover_rate: '换手率',
    volume: '成交量',
    current_year_percent: '年初至今的人百分比',
})

</script>

<style lang='scss' scoped></style>