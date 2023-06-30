<template>
    <login v-if="pageIndex.login" @changePage="changePage"></login>
    <individual v-else-if="pageIndex.individual" @changePage="changePage"></individual>
    <findpass v-else-if="pageIndex.findPass" @changePage="changePage"></findpass>
    <register v-else-if="pageIndex.register" @changePage="changePage"></register>
</template>

<script setup lang="ts">
import login from './components/login.vue';
import register from './components/register.vue';
import findpass from './components/findpass.vue';
import individual from './components/individual.vue';
import { useUserStore } from '@/store/user';
import type { page, pageIndex } from './type'

const userStore = useUserStore()

// 作为一个容器包裹四个页面
const pageIndex: pageIndex = reactive({
    login: false,
    register: false,
    findPass: false,
    individual: false
})

create: {
    if (userStore.token) {
        pageIndex.individual = true
    } else {
        pageIndex.login = true
    }
}

// 切换页面
function changePage(from: page, to: page) {
    pageIndex[from] = false
    pageIndex[to] = true
}

</script>

<style scoped lang="scss">
</style>
