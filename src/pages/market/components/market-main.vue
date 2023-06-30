<template>
    <div class="chart mx10 mb20">
        <marketChart></marketChart>
    </div>
    <marketTable class="mt20" :tableData="tableData"></marketTable>
</template>

<script setup lang='ts'>
import marketChart from './market-chart.vue';
import marketTable from './market-table.vue';
import { tableData } from '@/mock/market'
// 图表数据
</script>

<style lang='scss' scoped>
.chart {
    width: 730rpx;
    height: 500rpx;
}
</style>