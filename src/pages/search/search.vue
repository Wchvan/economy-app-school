<template>
    <gb-search :focus="true"></gb-search>
    <gb-seciton :title="'搜索历史'" :titleFontSize="'28rpx'" :color="'#111'" :trash="true">
        <view class="history" >
            <button v-for="(item, index) in searchHistory" :key="index" class="mx10 history-item"> {{ item }}</button>
        </view>
    </gb-seciton>
</template>

<script setup lang='ts'>
import { searchHistoryData, recommendationData } from '@/mock/search';
import type { searchHistoryType, recommendationType } from './type';

const searchHistory = reactive<searchHistoryType>(searchHistoryData)
const recommendation = reactive<recommendationType>(recommendationData)
</script>

<style lang='scss' scoped>
.history{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: auto;
    .history-item{
        display: inline-block;
        width: 150rpx ;
        font-size: 16rpx;
        white-space: nowrap;
    }
}
</style>