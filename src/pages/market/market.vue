<template>
	<gb-search @click="goSearch"></gb-search>
	<gb-tab v-model:current="current">
		<gb-tab-item v-for="(item, index) in tabData" :key="index" @click="tabClick" :active="current == item"
			:value="item">
			{{ item }}
		</gb-tab-item>
	</gb-tab>
	<marketMain></marketMain>
</template>

<script setup lang='ts'>
import { navData } from '@/mock/market'
import type { navDataType } from './type'
import marketMain from './components/market-main.vue'
// 搜索
function goSearch() {
	uni.navigateTo({
		url: "/pages/search/search"
	})
}
// 导航栏
const tabData = reactive<navDataType>(navData)
const current = ref<number | string>(tabData[0])
function tabClick(val: number | string) {
	current.value = val
	console.log(current.value)
}
</script>

<style lang='scss' scoped></style>